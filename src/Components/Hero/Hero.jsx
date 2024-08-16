import React from 'react'
import carlight from '../../assets/carlight.png'
import cardark from '../../assets/cardark.png'

const Hero = ({theme}) => {
  return (
    <div className='bg-white dark:bg-black dark:text-white duration-300 
    relative -z-20 min-h-[620px] pb-24 scroll-pt-0 flex'id='home'>
        <div className="container flex">
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
                <div data-aos="zoom-in" data-aos-duration="1500"
                className='order-1 sm:order-2'>
                    <img src={theme === "dark" ? cardark : carlight} className='relative -z-10 max-h-[500px] 
                     scale-150 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'/>
                </div>
               
                <div className='order-2 sm:order-1 space-y-7 sm:pr-32 '>
                    <p data-aos="fade-up" data-aos-duration="1000"
                    className='text-green-500 text-6xl font-serif'>Temple City</p>
                    <h1 data-aos="fade-up" data-aos-duration="1000"
                    className='text-4xl lg:text-5xl font-semibold font-serif'>Car Rental</h1>
                    <p data-aos="fade-up" data-aos-duration="1000"
                    className='dark:text-gray-400 text-black font-medium'>
                        <span className='text-blue-700 font-medium'>Hire Best Self Drive Luxury Cars</span> 
                        {} in Madurai at affordable price
                        </p>
                        <button data-aos="fade-up" data-aos-duration="1000"
                        className='bg-primary text-black px-6 py-2 rounded-md
                        hover:bg-primary/80 tracking-wider cursor-pointer'>
                         Get Started
                        </button>
                        </div>
                

            </div>

        </div>
    </div>
  )
}

export default Hero