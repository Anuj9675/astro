'use client';

import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaPlus, FaTrash } from 'react-icons/fa';

const orderSchema = yup.object().shape({
  items: yup
    .array()
    .of(
      yup.object().shape({
        itemName: yup.string().required('Item name is required'),
        quantity: yup
          .number()
          .typeError('Quantity must be a number')
          .required('Quantity is required')
          .min(1, 'Quantity must be at least 1'),
        price: yup
          .number()
          .typeError('Price must be a number')
          .required('Price is required')
          .min(0, 'Price cannot be negative'),
      })
    )
    .required('At least one item is required'),
});


type OrderFormValues = {
  items: {
    itemName: string;
    quantity: number;
    price: number;
  }[];
};

export function OrderForm() {
  const { control, handleSubmit, watch, reset } = useForm<OrderFormValues>({
    resolver: yupResolver(orderSchema),
    defaultValues: {
      items: [{ itemName: '', quantity: 0, price: 0 }], 
    },
  });
  

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const items = watch('items');

  const calculateGrandTotal = () =>
    items.reduce((total, item) => total + item.quantity * item.price, 0);

  const onSubmit = (data: OrderFormValues) => {
    console.log('Order Submitted:', data);
    alert('Order Submitted Successfully!');
    reset();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-fit h-fit rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Order Form</h2>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="space-y-6 max-h-96 overflow-auto pr-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50 relative"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor={`items.${index}.itemName`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Item Name
                    </label>
                    <Controller
                      name={`items.${index}.itemName`}
                      control={control}
                      render={({ field, fieldState }) => (
                        <>
                          <input
                            {...field}
                            id={`items.${index}.itemName`}
                            placeholder="Enter item name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                          {fieldState.error && (
                            <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor={`items.${index}.quantity`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Quantity
                      </label>
                      <Controller
                        name={`items.${index}.quantity`}
                        control={control}
                        render={({ field, fieldState }) => (
                          <>
                            <input
                              {...field}
                              id={`items.${index}.quantity`}
                              type="number"
                              placeholder="0"
                              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {fieldState.error && (
                              <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>
                            )}
                          </>
                        )}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`items.${index}.price`}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <Controller
                        name={`items.${index}.price`}
                        control={control}
                        render={({ field, fieldState }) => (
                          <>
                            <input
                              {...field}
                              id={`items.${index}.price`}
                              type="number"
                              placeholder="0.00"
                              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {fieldState.error && (
                              <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>
                            )}
                          </>
                        )}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Total</label>
                      <div className="mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-center">
                        ₹{(items[index]?.quantity || 0) * (items[index]?.price || 0)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="bg-orange-600 hover:bg-red-600 text-white p-2 flex items-center gap-2 rounded-md"
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Item and Grand Total */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => append({ itemName: '', quantity: 0, price: 0 })}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
            >
              <FaPlus /> Add Item
            </button>
            <div className="text-lg font-bold text-gray-700">
              Grand Total: <span className="text-blue-600">₹{calculateGrandTotal()}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}

