"use client";

import { useForm, Controller } from "react-hook-form";
import {
  daysList,
  tithiList,
  pakshaList,
  ganaList,
  lagnaList,
  rashiList,
  nakshatraList,
  rashiDevList,
} from "@/src/data";
import { useEffect } from "react";

type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  fatherName: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  day: string;
  thiti: string;
  paksha: string;
  gana: string;
  lagna: string;
  rasi: string;
  nakshatra: string;
  rashiDev: string;
  lagnaChart: string[];
  chandraChart: string[];
};

export function MemberForm() {
  const { control, handleSubmit, reset, setValue, watch } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      fatherName: "",
      birthDate: "",
      birthTime: "",
      birthPlace: "",
      gender: "Male",
      phone: "",
      email: "",
      address: "",
      day: "",
      thiti: "",
      paksha: "",
      gana: "",
      lagna: "",
      rasi: "",
      rashiDev: "",
      nakshatra: "",
      lagnaChart: [""],
      chandraChart: [""],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  const handleReset = () => {
    reset();
  };

  const rashi = watch("rasi");

  useEffect(() => {
    if (rashi) {
      // Set the corresponding rashiDev based on the selected rashi
      const matchedRashiDev = rashiDevList.find((dev) => dev.includes(rashi));
      if (matchedRashiDev) {
        setValue("rashiDev", matchedRashiDev);
      }
    }
  }, [rashi, setValue]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-6">Member creation form</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Demographic Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Demographic</h3>

          {/* First Name */}
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Middle Name */}
          <div>
            <label className="block text-sm mb-1">Middle Name</label>
            <Controller
              name="middleName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block text-sm mb-1">Father's Name</label>
            <Controller
              name="fatherName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Birth Date */}
          <div>
            <label className="block text-sm mb-1">Birth Date</label>
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Birth Time */}
          <div>
            <label className="block text-sm mb-1">Birth Time</label>
            <Controller
              name="birthTime"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="time"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Birth Place */}
          <div>
            <label className="block text-sm mb-1">Birth Place</label>
            <Controller
              name="birthPlace"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm mb-1">Gender</label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              )}
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact</h3>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              )}
            />
          </div>

          {/* Address */}
          <div className="flex-1">
            <label className="block text-sm mb-1">Address</label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                  placeholder="Enter your address"
                />
              )}
            />
          </div>
        </div>

        {/* Extra Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Extra</h3>

          {/* Day */}
          <div>
            <label className="block text-sm mb-1">Day</label>
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">Select Day</option>
                  {daysList.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          {/* Thiti */}
          <div>
            <label className="block text-sm mb-1">Thiti</label>
            <Controller
              name="thiti"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">Select Thiti</option>
                  {tithiList.map((thiti) => (
                    <option key={thiti} value={thiti}>
                      {thiti}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          {/* Paksha */}
          <div>
            <label className="block text-sm mb-1">Paksha</label>
            <Controller
              name="paksha"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">Select Paksha</option>
                  {pakshaList.map((paksha) => (
                    <option key={paksha} value={paksha}>
                      {paksha}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          {/* Gana */}
          <div>
            <label className="block text-sm mb-1">Gana</label>
            <Controller
              name="gana"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">Select Gana</option>
                  {ganaList.map((gana) => (
                    <option key={gana} value={gana}>
                      {gana}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          {/* Lagna */}
          <div>
            <label className="block text-sm mb-1">Lagna</label>
            <Controller
              name="lagna"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">Select Lagna</option>
                  {lagnaList.map((lagna) => (
                    <option key={lagna} value={lagna}>
                      {lagna}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Rashi</label>
              <Controller
                name="rasi"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">Select Rashi</option>
                    {rashiList.map((rashi) => (
                      <option key={rashi} value={rashi}>
                        {rashi}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm mb-1">Rashi Dev</label>
              <Controller
                name="rashiDev"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">Select Rashi Dev</option>
                    {rashiDevList.map((rashiDev) => (
                      <option key={rashiDev} value={rashiDev}>
                        {rashiDev}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>

          {/* Nakshatra */}
          <div>
            <label className="block text-sm mb-1">Nakshatra</label>
            <Controller
              name="nakshatra"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  <option value="">Select Nakshatra</option>
                  {nakshatraList.map((nakshatra) => (
                    <option key={nakshatra} value={nakshatra}>
                      {nakshatra}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div>
            <h3 className="text-lg font-medium">Lagan Chart</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm mb-1">House 1</label>
                <Controller
                  name="lagnaChart"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className=" px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-sm mb-1">House 2</label>
                <Controller
                  name="lagnaChart"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className=" px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Chandra Chart</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm mb-1">House 1</label>
                <Controller
                  name="lagnaChart"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className=" px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-sm mb-1">House 2</label>
                <Controller
                  name="lagnaChart"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-300 text-black rounded-md"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
