import React from 'react'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'

const TestimonialData = [
  {
    name: "Karthikeyan",
    image: user1,
    description: "Most Trustable Platform",
    aosDelay: "0",
  },

  {
    name: "Sudhakaran",
    image: user2,
    description: "Vehicle rental fare is fair by comparing others",
    aosDelay: "300",
  },

  {
    name: "Arunkumar",
    image: user3,
    description: "Their service brings me a satisfaction",
    aosDelay: "1000",
  },
]

const Testimonial = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-white py-14 sm:pb-24'>
        <div className='container'>
          <div className='space-y-4 pb-12'>
            <p data-aos='fade-up' className='text-3xl font-semibold text-center sm:text-4xl font-serif'>
                What Our Clients Say About US
                </p>
            <p data-aos='fade-up' className='text-center sm:px-44'>
                Valuable FeedBack from Our Valuable Customers
                </p>
          </div>
          <div className='grid gride-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-8 text-black dark:text-white'>
            {
                TestimonialData.map((data) => (
              
                    <div data-aos='fade-up' data-aos-delay={data.aosDelay}
                    key={data.name} className='card text-center group space-y-3 sm:space-y-6 p-4
                  bg-gray-100 dark:bg-white/20 
                  hover:bg-green-400 dark:hover:bg-green-400 dark:hover:text-black 
                  sm:py-12 duration-300 rounded-lg'>
                        <div className='grid place-items-center'>
                           <img src={data.image} alt='' className='h-20 w-20 rounded-full'/> 
                            </div>
                            <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                            <p>{data.description}</p>
                            <p className='font-semibold text-center'>{data.name}</p> 
                            </div>
                 ))
            }

          </div>
        </div>
    </div>
  )
}

export default Testimonial