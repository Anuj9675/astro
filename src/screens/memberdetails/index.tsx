"use client";

import React, { useState } from 'react';

export function MemberDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [memberData, setMemberData] = useState({
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    fatherName: "Michael Smith",
    birthDate: "1990-01-01",
    birthTime: "12:00",
    birthPlace: "New York",
    gender: "Male",
    phone: "1234567890",
    email: "john@example.com",
    day: "Monday",
    thiti: "Pratipada",
    paksha: "Shukla",
    gana: "Deva",
    lagna: "Mesha",
    rasi: "Mesha",
    nakshatra: "Ashwini",
    lagnaChart: ["Sun", "Moon"],
    chandraChart: ["Mars", "Venus"],
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log("Saving updated data:", memberData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    console.log("Deleting member");
    // Here you would typically handle the deletion logic
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMemberData(prev => ({ ...prev, [name]: value }));
  };

  const renderField = (label: string, name: string, value: string) => (
    <div key={name} className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {isEditing ? (
        <input
          name={name}
          value={value}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
        />
      ) : (
        <p className="w-full px-3 py-2 bg-orange-50 border border-orange-200 rounded-md text-gray-700">
          {value}
        </p>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6  min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-orange-100 border-b border-orange-200">
          <h2 className="text-2xl font-bold text-gray-800">Member Details</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Demographic Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Demographic</h3>
              {renderField("First Name", "firstName", memberData.firstName)}
              {renderField("Middle Name", "middleName", memberData.middleName)}
              {renderField("Last Name", "lastName", memberData.lastName)}
              {renderField("Father's Name", "fatherName", memberData.fatherName)}
              {renderField("Birth Date", "birthDate", memberData.birthDate)}
              {renderField("Birth Time", "birthTime", memberData.birthTime)}
              {renderField("Birth Place", "birthPlace", memberData.birthPlace)}
              {renderField("Gender", "gender", memberData.gender)}
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact</h3>
              {renderField("Phone", "phone", memberData.phone)}
              {renderField("Email", "email", memberData.email)}
            </div>

            {/* Extra Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Extra</h3>
              {renderField("Day", "day", memberData.day)}
              {renderField("Thiti", "thiti", memberData.thiti)}
              {renderField("Paksha", "paksha", memberData.paksha)}
              {renderField("Gana", "gana", memberData.gana)}
              {renderField("Lagna", "lagna", memberData.lagna)}
              {renderField("Rasi", "rasi", memberData.rasi)}
              {renderField("Nakshatra", "nakshatra", memberData.nakshatra)}
            </div>

            {/* Charts Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Charts</h3>
              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-600 mb-2">Lagna Chart</h4>
                {memberData.lagnaChart.map((item, index) => (
                  <div key={index} className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">House {index + 1}</label>
                    {isEditing ? (
                      <input
                        value={item}
                        onChange={(e) => {
                          const newLagnaChart = [...memberData.lagnaChart];
                          newLagnaChart[index] = e.target.value;
                          setMemberData(prev => ({ ...prev, lagnaChart: newLagnaChart }));
                        }}
                        className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                      />
                    ) : (
                      <p className="w-full px-3 py-2 bg-orange-50 border border-orange-200 rounded-md text-gray-700">
                        {item}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-600 mb-2">Chandra Chart</h4>
                {memberData.chandraChart.map((item, index) => (
                  <div key={index} className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">House {index + 1}</label>
                    {isEditing ? (
                      <input
                        value={item}
                        onChange={(e) => {
                          const newChandraChart = [...memberData.chandraChart];
                          newChandraChart[index] = e.target.value;
                          setMemberData(prev => ({ ...prev, chandraChart: newChandraChart }));
                        }}
                        className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                      />
                    ) : (
                      <p className="w-full px-3 py-2 bg-orange-50 border border-orange-200 rounded-md text-gray-700">
                        {item}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-orange-100 text-orange-700 font-medium rounded-md border border-orange-300 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="px-6 py-2 bg-orange-100 text-orange-700 font-medium rounded-md border border-orange-300 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Edit
              </button>
            )}
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-white text-red-600 font-medium rounded-md border border-red-300 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

