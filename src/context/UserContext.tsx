"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Updated Interface
interface UserState {
  visitCount: number;
  visitTier: 1 | 2 | 3;
  hasViewedCatalogue: boolean;
  likedItems: number[];
  clientType: 'undecided' | 'homeowner' | 'partner'; // NEW: Segmentation
}

interface UserContextType extends UserState {
  markCatalogueViewed: () => void;
  toggleLikeItem: (id: number) => void;
  setClientType: (type: 'homeowner' | 'partner') => void; // NEW: Setter
  resetProgress: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<UserState>({
    visitCount: 1,
    visitTier: 1,
    hasViewedCatalogue: false,
    likedItems: [],
    clientType: 'undecided',
  });

  useEffect(() => {
    const storedData = localStorage.getItem("bam_user_context");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      const newCount = parsed.visitCount + 1;
      let newTier: 1 | 2 | 3 = 1;
      if (newCount === 2) newTier = 2;
      if (newCount >= 3) newTier = 3;

      const updatedState = {
        ...parsed,
        visitCount: newCount,
        visitTier: newTier,
        // Ensure clientType exists for legacy data
        clientType: parsed.clientType || 'undecided', 
      };

      setState(updatedState);
      localStorage.setItem("bam_user_context", JSON.stringify(updatedState));
    } else {
      const initialState: UserState = {
        visitCount: 1,
        visitTier: 1,
        hasViewedCatalogue: false,
        likedItems: [],
        clientType: 'undecided',
      };
      setState(initialState);
      localStorage.setItem("bam_user_context", JSON.stringify(initialState));
    }
  }, []);

  const updateStorage = (newState: UserState) => {
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

  // NEW: Set Client Type
  const setClientType = (type: 'homeowner' | 'partner') => {
    updateStorage({ ...state, clientType: type });
  };

  const resetProgress = () => {
     localStorage.removeItem("bam_user_context");
     window.location.reload();
  }

  return (
    <UserContext.Provider value={{ ...state, markCatalogueViewed, toggleLikeItem, setClientType, resetProgress }}>
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