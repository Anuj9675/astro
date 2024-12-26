'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface PaymentFormValues {
  amount: number;  
  status: string;
}

const paymentFormSchema = yup.object().shape({
  amount: yup
    .number()
    .required('Amount is required')
    .positive('Amount must be a positive number')
    .typeError('Amount must be a number'),
  status: yup.string().required('Payment status is required'),
});

export function PaymentForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PaymentFormValues>({
    resolver: yupResolver(paymentFormSchema),
    defaultValues: {
      amount: 0,
      status: '', 
    },
  });

  const onSubmit = (data: PaymentFormValues) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
    reset();
  };

  return (
    <div className="p-6 flex items-center justify-center ">
      <div className="w-full max-w-md  p-8">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 tracking-tight">
          Payment Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  ₹
                  </span>
                  <input
                    {...field}
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    className={`w-full pl-7 pr-4 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.amount
                        ? 'border-red-300 focus:ring-red-200'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  />
                </div>
              )}
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
          </div>

          {/* Payment Status Dropdown */}
          <div className="space-y-2">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Payment Status
            </label>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <div className="relative">
                  <select
                    {...field}
                    id="status"
                    className={`w-full px-4 py-3 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 appearance-none transition-all duration-300 ${
                      errors.status
                        ? 'border-red-300 focus:ring-red-200'
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  >
                    <option value="" disabled>
                      Select status
                    </option>
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              )}
            />
            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}

