import React from 'react'
import car2 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import car4 from '../../assets/car4.png'

const CarListdata = [
    {
        name: "BMW GT",
        price: 25000,
        image: car2,
        aosDelay: "0",
    },

    {
        name: "SCORPIO",
        price: 9000,
        image: car3,
        aosDelay: "500",
    },

    {
        name: "BOLERO",
        price: 8500,
        image: car4,
        aosDelay: "1000",
    },
]
const Carlist = () => {
  return (
    <div className='pb-24 pt-12 bg-slate-100 dark:bg-dark dark:text-white '>
        <div className="container">
         <h1 className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>
            Your Favourite Cars
            </h1>
         <p data-aos='fade-up' className='text-sm pb-10'>
             Self Drive Car Rental Tariff in Madurai
            </p>
            <div>
                <div 
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                    {
                        CarListdata.map((data) => (
                           <div data-aos='fade-up' data-aos-delay={data.aosDelay}
                           className='space-y-2 border-4 border-gray-300 hover:border-primary 
                           p-2 rounded-xl relative group'>
                            <div className='w-full h-[180px]'>
                               <img className='w-full h-[220px] object-contain 
                               sm:translate-x-8 group-hover:translate-x-16 duration-700' src={data.image}/>
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-primary font-semibold'>{data.name}</h1>
                                    <div className='flex justify-between items-center text-xl font-semibold'>
                                    <p>{data.price} INR/Day</p>
                                    <a href='#'Details/>
                                    </div>
                                    </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='grid place-content-center mt-8'>
            <button data-aos="fade-up" data-aos-duration="1000"
            className='text-primary border-2 border-primary px-6 py-2 rounded-md 
          hover:bg-primary/80 hover:text-black tracking-wider'>
            Get Started
            </button>
            </div>
        </div>
    </div>
  )
}

export default Carlist