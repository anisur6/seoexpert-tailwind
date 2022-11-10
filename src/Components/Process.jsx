import React from 'react';



const process = [
    {
      id: 1,
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/2679/2679861.png',
      imageAlt: "Front of men's Basic Tee in black.",
      title: 'Find New Keywords',
      description: 'Enter a keyword or website URL to get hundreds of relevant keyword results, tailored to your industry and location.',
    },
    {
      id: 2,
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/1162/1162489.png',
      imageAlt: "Front of men's Basic Tee in black.",
      title: 'Research & Prioritize',
      description: 'Accurate keyword volume and cost per click data helps you find the right keywords to target and maximize your marketing budget.',
    },
    {
      id: 3,
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/2065/2065214.png',
      imageAlt: "Front of men's Basic Tee in black.",
      title: 'Put Your Keywords to Work',
      description: 'Download your full keyword list so you can use it in your SEO content and search advertising campaigns.',
    }
  ]

const Process = () => {


    
    return (
        <>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-14">
        
        <div className="grid gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((product) => (
            <div key={product.id} className="">
              <div className="min-h-80 w-full lg:aspect-none lg:h-50">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-20 w-20 mx-auto lg:h-2/6 lg:w-2/6"
                />
              </div>
              <div className="text-center mt-5">
                <span className='bg-sky-500 text-lime-50 text-xl font-bold rounded-full px-3 py-1'>{product.id}</span>
                <p className="text-2xl mt-2 font-medium text-gray-900">{product.title}</p>
                <p className=" mt-2 font-light text-gray-900">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='bg-gray-100'>
            <div className='px-4 py-10 lg:px-14 lg:py-20'>
                <div className='text-center lg:w-9/12 sm:w-full mx-auto'>
                        <p className='font-bold text-xl lg:text-4xl'>Get your free keywords and start optimizing your search campaigns today! </p>
                        <button className='hover:scale-110 transition ease-in-out duration-150  hover:bg-sky-500 mt-5 bg-sky-400 px-10 rounded-full font-bold text-white py-2'>Find My Keyword</button>
                </div>
            </div>
    </div>
        </>
    );
};

export default Process;