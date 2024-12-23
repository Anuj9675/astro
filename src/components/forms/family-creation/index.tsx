'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const familyFormSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
  contactNo: yup
    .string()
    .required('Contact number is required')
    .matches(/^\d{10}$/, 'Contact number must be exactly 10 digits'),
  state: yup.string().required('State is required'),
});

export function FamilyForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(familyFormSchema),
    defaultValues: {
      name: '',
      contactNo: '',
      state: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully!');
    reset();
  };

  return (
    <div className="flex items-center justify-center bg-white rounded-lg p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">Family Details Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
              )}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="space-y-4">
            <label htmlFor="contactNo" className="text-sm font-medium text-gray-700 block">
              Contact Number
            </label>
            <Controller
              name="contactNo"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="contactNo"
                  type="text"
                  placeholder="Enter contact number"
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    errors.contactNo ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
              )}
            />
            {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo.message}</p>}
          </div>

          <div className="space-y-4">
            <label htmlFor="state" className="text-sm font-medium text-gray-700 block">
              State
            </label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="state"
                  type="text"
                  placeholder="Enter state"
                  className={`w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                    errors.state ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                />
              )}
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white text-lg font-medium rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
