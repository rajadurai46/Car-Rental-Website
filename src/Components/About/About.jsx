import React from 'react'
import car1 from '../../assets/car1.png'

const About = () => {
  return (
    <div className='shadow-md bg-slate-100 dark:bg-dark dark:text-white duration-300 
    sm:min-h-[720px] sm:grid sm:place-items-center' id='about'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                <div data-aos="slide-right" data-aos-duration="1500">
                    <img src={car1} alt='' className='sm:scale-105 sm:-translate-x-11 max-h-[300px] 
                    drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]'/>
                </div>
                <div>
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 data-aos="fade-down" data-aos-duration="1000"
                        className='text-3xl sm:text-4xl font-bold font-serif'>
                            About US
                        </h1>
                        <p data-aos="fade-down" data-aos-duration="1000">
                            We are the most trustable car rental provider by offering all types of Luxury brand new 
                            automatic cars that provide an excellent experience to make your journey most memorable.
                        </p>    
                        <p data-aos="fade-up" data-aos-duration="1000">
                           If you are worried that you do not have own car to explore your own driving. Then choose our
                           self driving cars is the best way to avoid your inconvenience during your ride.
                        </p>
                        <button data-aos="fade-up" data-aos-duration="1000"
                        className='text-primary border-2 border-primary px-6 py-2 rounded-md 
                        hover:bg-primary/80 hover:text-black tracking-wider'>
                         Get Started
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About