'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DetailCard, FamilyForm, Modal, StatsCards, PaymentForm } from "@/src/components"; // Import the PaymentForm component
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdBorderColor, MdOutlinePayment } from "react-icons/md";
import { OrderForm } from "@/src/components/forms/order";

const dummyData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  memberName: `Member ${i + 1}`,
  balance: (i + 1) * 1000,
  cityName: `City ${i + 1}`,
}));

export function FamilyDetailsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItems, setVisibleItems] = useState(9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<"family" | "payment" | "order" | null>(null); 
  const router = useRouter();

  const filteredData = dummyData.filter((item) =>
    item.memberName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleItems((prev) => prev + 9);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleModal = (formType: "family" | "payment" | "order" | null) => {
    setActiveForm(formType);
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

          <div className="flex gap-3">
            <button
              onClick={() => toggleModal("order")}
              className="px-4 py-2 font-semibold bg-orange-400 text-white rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center gap-2"
            >
              <MdBorderColor className="text-sm" />
              Order
            </button>
            <button
              onClick={() => toggleModal("payment")}
              className="px-4 py-2 font-semibold bg-blue-500 text-white rounded-md shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center gap-2"
            >
              <MdOutlinePayment className="text-sm" />
              Payment
            </button>
            <button
              onClick={() => toggleModal("family")}
              className="px-4 py-2 font-semibold bg-white text-gray-800 rounded-md shadow-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center gap-2"
            >
              <FaPlus className="text-sm" />
              Create
            </button>
          </div>
        </div>

        {/* Family Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.slice(0, visibleItems).map((item) => (
            <DetailCard
              key={item.id}
              name={item.memberName}
              balance={item.balance}
              cityName={item.cityName} id={0}            />
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

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => toggleModal(null)}>
        {activeForm === "family" && <FamilyForm />}
        {activeForm === "payment" && <PaymentForm />}
        {activeForm === "order" && <OrderForm />}
      </Modal>
    </div>
  );
}
