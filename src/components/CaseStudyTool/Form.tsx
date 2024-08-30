// src/components/CaseStudyTool/Form.tsx

import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Data Field</label>
        <input
          type="text"
          {...register('dataField', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        {errors.dataField && <span className="text-red-500 text-sm">This field is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Value</label>
        <input
          type="number"
          {...register('value', { required: true })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        {errors.value && <span className="text-red-500 text-sm">This field is required</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
