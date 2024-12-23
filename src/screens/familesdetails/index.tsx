'use client';

import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { DetailCard, FamilyForm, Modal, StatsCards } from "@/src/components"; 
import Link from "next/link"; 

const dummyData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  familyName: `Family ${i + 1}`,
  balance: (i + 1) * 1000,
  cityName: `City ${i + 1}`,
}));

export function FamilesDetailsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItems, setVisibleItems] = useState(9);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = dummyData.filter((item) =>
    item.familyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleItems((prev) => prev + 9);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div>
          <StatsCards />
        </div>

        {/* Search and Create Button */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search families"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 "
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <button
            onClick={toggleModal}
            className="ml-4 px-4 py-2 font-semibold bg-white text-gray-800 rounded-md shadow-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center gap-2"
          >
            <FaPlus className="text-sm" />
            Create
          </button>
        </div>

        {/* Family Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.slice(0, visibleItems).map((item) => (
            <Link key={item.id} href={`/family/${item.id}`} passHref>
              <DetailCard
                id={item.id} // Pass the id to the card component
                name={item.familyName}
                balance={item.balance}
                cityName={item.cityName}
              />
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredData.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <FamilyForm />
      </Modal>
    </div>
  );
}
