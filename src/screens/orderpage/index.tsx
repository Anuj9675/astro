"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { Modal, OrderForm } from "@/src/components";

interface Order {
  id: number;
  itemName: string;
  family: string;
  member: string;
  quantity: number;
  totalPrice: number;
}

const initialOrders: Order[] = [
  {
    id: 1,
    itemName: "Pizza",
    family: "Italian",
    member: "John",
    quantity: 2,
    totalPrice: 25.98,
  },
  {
    id: 2,
    itemName: "Sushi",
    family: "Japanese",
    member: "Emma",
    quantity: 1,
    totalPrice: 15.99,
  },
  {
    id: 3,
    itemName: "Burger",
    family: "American",
    member: "Mike",
    quantity: 3,
    totalPrice: 35.97,
  },
  {
    id: 4,
    itemName: "Pad Thai",
    family: "Thai",
    member: "Sarah",
    quantity: 2,
    totalPrice: 27.98,
  },
  {
    id: 5,
    itemName: "Tacos",
    family: "Mexican",
    member: "David",
    quantity: 4,
    totalPrice: 39.96,
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<"order" | null>(null);

  const filteredOrders = orders.filter(
    (order) =>
      order.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleModal = (formType: "order" | null) => {
    setActiveForm(formType);
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Orders</h1>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={() => toggleModal("order")}
            className="px-4 py-2 font-semibold bg-orange-400 text-white rounded-md shadow-sm hover:bg-orange-600 focus:outline-none flex items-center gap-2"
          >
            <MdBorderColor className="text-sm" />
            Order
          </button>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Item Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Family
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Member
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4">{order.itemName}</td>
                <td className="px-6 py-4">{order.family}</td>
                <td className="px-6 py-4">{order.member}</td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4">${order.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal isOpen={isModalOpen} onClose={() => toggleModal(null)}>
          {activeForm === "order" && <OrderForm />}
        </Modal>
      </div>
    </div>
  );
}
