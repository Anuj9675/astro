'use client'

import { useState } from 'react'

export  function MemberForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    fatherName: '', 
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    gender: 'Male',
    phone: '',
    email: '',
    day: '',
    thiti: '',
    paksha: '',
    gana: '',
    loagna: '',
    rasi: '',
    rakshatra: '',
    lagnaChart: ['', ''],
    chandraChart: ['', '']
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleChartChange = (chart: 'lagnaChart' | 'chandraChart', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [chart]: prev[chart].map((item, i) => i === index ? value : item)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      fatherName: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      gender: 'Male',
      phone: '',
      email: '',
      day: '',
      thiti: '',
      paksha: '',
      gana: '',
      loagna: '',
      rasi: '',
      rakshatra: '',
      lagnaChart: ['', ''],
      chandraChart: ['', '']
    })
  }

  return (
    <div className="max-w-7xl mx-auto p-4">

      <h2 className="text-xl font-semibold mb-6">Member creation form</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Demographic Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Demographic</h3>
          
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Birth Time</label>
            <input
              type="time"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Birth Place</label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact</h3>
          
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">Notes</h4>
            <button
              type="button"
              className="px-4 py-2 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100"
            >
              Add
            </button>
          </div>
        </div>

        {/* Extra Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Extra</h3>
          
          <div>
            <label className="block text-sm mb-1">Day</label>
            <input
              type="text"
              name="day"
              value={formData.day}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Thiti</label>
            <input
              type="text"
              name="thiti"
              value={formData.thiti}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Paksha</label>
            <input
              type="text"
              name="paksha"
              value={formData.paksha}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Gana</label>
            <input
              type="text"
              name="gana"
              value={formData.gana}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Loagna</label>
            <input
              type="text"
              name="loagna"
              value={formData.loagna}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Rasi</label>
            <input
              type="text"
              name="rasi"
              value={formData.rasi}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Rakshatra</label>
            <input
              type="text"
              name="rakshatra"
              value={formData.rakshatra}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="space-y-8">
          {/* Lagna Chart */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Lagna Chart</h3>
            
            {[0, 1].map((index) => (
              <div key={`lagna-${index}`} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm">House {index + 1}</label>
                  <button
                    type="button"
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.lagnaChart[index]}
                  onChange={(e) => handleChartChange('lagnaChart', index, e.target.value)}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
            ))}
            
            <button
              type="button"
              className="px-4 py-2 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100"
            >
              Add
            </button>
          </div>

          {/* Chandra Chart */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Chandra Chart</h3>
            
            {[0, 1].map((index) => (
              <div key={`chandra-${index}`} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm">House {index + 1}</label>
                  <button
                    type="button"
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.chandraChart[index]}
                  onChange={(e) => handleChartChange('chandraChart', index, e.target.value)}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
            ))}
            
            <button
              type="button"
              className="px-4 py-2 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100"
            >
              Add
            </button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="col-span-full flex gap-4 mt-8">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

