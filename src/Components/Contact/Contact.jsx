import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white py-14' id='contact'>
        <div className="container">
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
          <div className='col-span-2 space-y-3'>
            <h1 className='text-4xl sm:text-5xl font-bold text-white'>
                Let's Collaborate on your upcoming Car Rental venture
            </h1>
            <p className='text-gray-400'>
                If you want to rent a luxury Car for best price in the market.
                We are Here for You.
            </p>
          </div>
          <div className='grid place-items-center'>
            <a href='#' className='inline-block font-semibold py-2 px-6 
            bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300'>
               Contact 
            </a>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Contact