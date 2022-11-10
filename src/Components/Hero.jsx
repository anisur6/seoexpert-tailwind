import React from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
]

const Hero = () => {
    return (
        <>
      

       {/* hero section start  */}
       <div className="relative overflow-hidden bg-gray-100">
      <div className="mx-auto  max-w-7xl">
        <div className="relative   pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          

          

          <main className="mx-auto  mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl xl:text-6xl font-bold tracking-tight text-gray-900">
                <span className="xl:inline ">Free Keyword </span>
                <span className="text-sky-600 xl:inline">Tool</span>
              </h1>
              <p className="mt-3 text-sm lg:text-xl text-gray-500 mx-auto sm:mt-5 sm:max-w-xl w-10/12 md:mt-5 lg:mx-0">
              Discover new keywords and performance data to use in <br className='hidden lg:block'/> your  site content, Google Ads campaigns and more.
              </p>
              <div className="mt-5 grid xl:grid-cols-1 lg:justify-items-start justify-items-center sm:mt-8 ">
                <div className=' w-10/12'>
                        <input
                type="text"
                name="price"
                id="price"
                className="w-full outline-sky-500 bg-slate-200 rounded-md p-4 "
                placeholder="Search Keyword"
                />
                </div>
                <div className="rounded-md mt-5 shadow  w-10/12">
                  <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 md:py-4 md:px-20 md:text-lg">
                    Find My Keyword
                  </a>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:block hidden">
        <img
          className="h-56 img-polygon w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://img.freepik.com/free-photo/search-research-subject-terms-vocabulary_53876-120303.jpg?w=740&t=st=1667905514~exp=1667906114~hmac=b18fcb8bcb020eb6fa8bce3780c87cccc6b78847f99e86ebc918ba813caaa84c"
          alt=""
        />
      </div>
    </div>

       {/* hero section end  */}
            
        </>
    );
};

export default Hero;