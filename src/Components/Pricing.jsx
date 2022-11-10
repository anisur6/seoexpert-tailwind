import React from 'react';
import {FiCheck} from 'react-icons/fi'


const Pricing = () => {
    return (
        <>
        <div className='bg-gray-50 w-full'>
        <div className='relative p-5 lg:max-w-6xl mx-auto lg:py-20 '>
                <div className='text-center mb-4 lg:mb-8'>
                    <p className='lg:text-5xl text-3xl leading-relaxed font-bold'>Pricing</p>
                    <p className='lg:text-lg text-sm lg:w-8/12 w-10/12 mx-auto'>Here at SEOEXPERT focus on markets where technology, innovation, and capital can unlock long-term value.</p>
                </div>

                <div className='grid lg:gap-8 gap-8 sm:grid-cols-1 lg:grid-cols-3'>
                    <div className='p-5 lg:p-8  shadow-md rounded-md text-center bg-white'>
                        <p className='text-black text-xl font-bold mb-4 lg:text-2xl'>Standard Package</p>
                        <p className='lg:text-5xl text-3xl font-bold mb-4 text-sky-500'>$ 29 <span className='text-lg text-black'>/month</span></p>
                        <p className='lg:text-xl text-normal mb-4 font-bold'>Standard  work for clients. </p>           
                       <div className='flex flex-col gap-4 ml-10 lg:ml-8'>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> 5 Product</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> 24/7 hour support</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> Upto 200 time search</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> Basic Analysis</p>
                       </div>
                        <button className='bg-sky-500 w-full mt-8 font-bold text-white hover:bg-sky-700 rounded-full py-2 lg:py-3 shadow-lg'>Monthly Billing</button>
                    </div>
                    <div className='p-5 lg:p-8  shadow-md rounded-md text-center bg-white'>
                        <p className='text-black text-xl font-bold mb-4 lg:text-2xl'>Premium Package</p>
                        <p className='lg:text-5xl text-3xl font-bold mb-4 text-sky-500'>$ 39 <span className='text-lg text-black'>/month</span></p>
                        <p className='lg:text-xl text-normal mb-4 font-bold'>Standard  work for clients. </p>           
                       <div className='flex flex-col gap-4 ml-10 lg:ml-8'>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> 5 Product</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> 24/7 hour support</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> Upto 200 time search</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> Basic Analysis</p>
                       </div>
                        <button className='bg-sky-500 w-full mt-8 font-bold text-white hover:bg-sky-700 rounded-full py-2 lg:py-3 shadow-lg'>Monthly Billing</button>
                    </div>
                    <div className='p-5 lg:p-8  shadow-md rounded-md text-center bg-white'>
                        <p className='text-black text-xl font-bold mb-4 lg:text-2xl'>Dimond Package</p>
                        <p className='lg:text-5xl text-3xl font-bold mb-4 text-sky-500'>$ 49 <span className='text-lg text-black'>/month</span></p>
                        <p className='lg:text-xl text-normal mb-4 font-bold'>Standard  work for clients. </p>           
                       <div className='flex flex-col gap-4 ml-10 lg:ml-8'>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> 5 Product</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> 24/7 hour support</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> Upto 200 time search</p>
                        <p className='font-normal text-sm lg:text-xl lg:font-semibold flex gap-3'><FiCheck className='h-5 w-5 fw-bold text-sky-500' /> Basic Analysis</p>
                       </div>
                        <button className='bg-sky-500 w-full mt-8 font-bold text-white hover:bg-sky-700 rounded-full py-2 lg:py-3 shadow-lg'>Monthly Billing</button>
                    </div>
                    
                    
                </div>
        </div>
        </div>
        </>
    );
};

export default Pricing;