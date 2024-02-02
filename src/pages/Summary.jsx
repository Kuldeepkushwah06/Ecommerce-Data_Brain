import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

const Summary = () => {
  const formData = useSelector((state) => state.formData);
  const productItem = useSelector((state) => state.itemData);
const navigate = useNavigate();

if(!formData || !productItem){
   navigate('/')
}
  return (
    <div className='flex justify-center items-center'>
    <div className="flex flex-col md:flex md:flex-row gap-5 justify-center items-center m-5 md:w-[85%] w-3/5 p-3  bg-white border-4 rounded-md">
      <div>
        <img src={productItem?.image} alt="Not found" className="max-h-40 max-w-40" />
      </div>
      <div className="flex flex-col justify-between gap-7">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-l text-slate-800">{productItem?.title}</h1>
          <p className="hidden sm:block text-xs text-gray-500 ">
            {productItem?.description?.split(' ')?.slice(0, 10)?.join(' ') + '...'}
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-green-700 font-bold">Price:  ${productItem?.price}</p>
          </div>
        </div>
      </div>

      <div className=" md:ml-10 bg-gray-300 w-[35%] p-4 flex flex-col justify-center items-center rounded-lg">
        <h2 className="text-lg font-bold mb-3 text-slate-900 ">User Information</h2>
        <div className="flex flex-col gap-3 text-slate-600">
          <p className='font-semibold text-sm'>
            <span className="font-bold text-sm">Name:</span> {formData?.personalDetails?.firstName} {formData?.personalDetails?.lastName}
          </p>
          <p className='font-semibold text-sm'>
            <span className="font-bold text-sm">Contact:</span> {formData?.personalDetails?.contactNumber}
          </p>
          <p className='font-semibold text-sm'>
            <span className="font-bold text-sm">Address:</span> {formData?.address?.street}, {formData?.address?.city},{' '}
            {formData?.address?.zip}
          </p>
          <p className='font-semibold text-sm'>
            <span className="font-bold text-sm">Payment Method:</span> {formData?.paymentDetails?.paymentMethod} Card
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Summary;
