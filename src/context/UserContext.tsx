"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import LoadingScreen from "@components/ui/LoadingScreen";

// Define the shape of our user tracking
interface UserState {
  visitCount: number;
  visitTier: 1 | 2 | 3;
  hasViewedCatalogue: boolean;
  likedItems: number[];
  clientType: 'undecided' | 'homeowner' | 'partner';
  isLoading: boolean; // Exposed to app if needed
}

interface UserContextType extends UserState {
  markCatalogueViewed: () => void;
  toggleLikeItem: (id: number) => void;
  setClientType: (type: 'homeowner' | 'partner') => void;
  resetProgress: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Start with loading TRUE
  const [isLoading, setIsLoading] = useState(true);
  
  const [state, setState] = useState<Omit<UserState, 'isLoading'>>({
    visitCount: 1,
    visitTier: 1,
    hasViewedCatalogue: false,
    likedItems: [],
    clientType: 'undecided',
  });

  // 2. Load from LocalStorage on mount
  useEffect(() => {
    // Artificial delay (optional - e.g. 800ms) to make the "Luxury" feel intentional
    // rather than a glitch. Remove setTimeout if you want instant load.
    const timer = setTimeout(() => {
      const storedData = localStorage.getItem("bam_user_context");
      
      if (storedData) {
        try {
          const parsed = JSON.parse(storedData);
          const newCount = parsed.visitCount + 1;
          
          let newTier: 1 | 2 | 3 = 1;
          if (newCount === 2) newTier = 2;
          if (newCount >= 3) newTier = 3;

          const updatedState = {
            ...parsed,
            visitCount: newCount,
            visitTier: newTier,
            clientType: parsed.clientType || 'undecided',
          };

          setState(updatedState);
          localStorage.setItem("bam_user_context", JSON.stringify(updatedState));
        } catch (e) {
          console.error("Context Parse Error", e);
          // Fallback if data is corrupted
          localStorage.removeItem("bam_user_context");
        }
      } else {
        // First time visitor
        const initialState = {
          visitCount: 1,
          visitTier: 1,
          hasViewedCatalogue: false,
          likedItems: [],
          clientType: 'undecided' as const,
        };
        setState(initialState);
        localStorage.setItem("bam_user_context", JSON.stringify(initialState));
      }

      // 3. Signal that we are ready to render
      setIsLoading(false);
    }, 1000); // 1 second luxury pause

    return () => clearTimeout(timer);
  }, []);

  const updateStorage = (newState: Omit<UserState, 'isLoading'>) => {
    setState(newState);
    localStorage.setItem("bam_user_context", JSON.stringify(newState));
  };

  const markCatalogueViewed = () => {
    if (!state.hasViewedCatalogue) {
      updateStorage({ ...state, hasViewedCatalogue: true });
    }
  };

  const toggleLikeItem = (id: number) => {
    const isLiked = state.likedItems.includes(id);
    const newLikes = isLiked
      ? state.likedItems.filter((itemId) => itemId !== id)
      : [...state.likedItems, id];
    
    updateStorage({ ...state, likedItems: newLikes });
  };

  const setClientType = (type: 'homeowner' | 'partner') => {
    updateStorage({ ...state, clientType: type });
  };

  const resetProgress = () => {
     localStorage.removeItem("bam_user_context");
     window.location.reload();
  }

  // 4. BLOCK RENDERING until loading is false
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <UserContext.Provider value={{ ...state, isLoading, markCatalogueViewed, toggleLikeItem, setClientType, resetProgress }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};