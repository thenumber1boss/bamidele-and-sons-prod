"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Favorite, FavoriteBorder, ArrowForward } from "@mui/icons-material";
import { useUser } from "@context/UserContext";
import catalogueItems from "@app/catalogue/catalogueItems";
import QuoteModal from "@components/ui/QuoteModal";

const filters = ["All", "Stairs", "Balcony", "Bathroom", "Exterior"];

const CatalogueGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { likedItems, toggleLikeItem, visitTier } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  // Filter Logic
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return catalogueItems;
    return catalogueItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleQuote = (title: string) => {
    setSelectedItem(title);
    setModalOpen(true);
  };

  return (
    <>
      {/* 1. Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-10 border-b border-[var(--glass-border)] pb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
              activeFilter === filter
                ? "text-[var(--primary-gold)] font-bold"
                : "text-gray-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 2. Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative bg-[var(--bg-secondary)] border border-[var(--glass-border)] hover:border-[var(--primary-teal)] transition-colors duration-500">
            
            {/* Image Container */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Quick Actions Overlay */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => toggleLikeItem(item.id)}
                  className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white hover:text-[var(--primary-gold)] transition-colors"
                >
                  {likedItems.includes(item.id) ? <Favorite className="text-[var(--primary-gold)]" /> : <FavoriteBorder />}
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase text-[var(--primary-teal)] tracking-widest">{item.material} Series</span>
              </div>
              <h3 className="text-xl font-playfair text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{item.description}</p>
              
              <button 
                onClick={() => handleQuote(item.title)}
                className="flex items-center gap-2 text-xs uppercase font-bold text-white group-hover:text-[var(--primary-teal)] transition-colors"
              >
                {visitTier >= 2 ? "Request Spec Sheet" : "View Details"} <ArrowForward fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <QuoteModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        itemTitle={selectedItem} 
      />
    </>
  );
};

export default CatalogueGrid;