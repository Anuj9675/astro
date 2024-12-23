
import React from "react";

interface DetailCardProps {
  id: number;  
  name: string;
  balance: number;
  cityName: string;
}

export function DetailCard({  name, balance, cityName }: DetailCardProps) {
  return (
    <div className="w-full max-w-sm bg-white hover:bg-gradient-to-br from-orange-400 to-orange-600 hover:text-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{name}</h2>
          <span className="text-sm bg-orange-500 text-white px-2 py-1 rounded-full">Astro</span>
        </div>
        <div className="text-xl font-semibold">₹{balance.toLocaleString()}</div>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{cityName}</span>
        </div>
      </div>
    </div>
  );
}
