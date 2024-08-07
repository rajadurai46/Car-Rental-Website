import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { FaMobileAlt } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footerlinks = [
    {
        title: "Home",
        link: "/#",
    },

    {
        title: "About",
        link: "/#",
    },

    {
        title: "Contact",
        link: "/#",
    },

    {
        title: "Booking",
        link: "/#",
    },
]

const Footer = () => {
  return (
    <div className='bg-slate-100 dark:bg-black dark:text-white'>
        <div className="container">
            <div className='grid md:grid-cols-3 py-5 dark:bg-dark rounded-t-3xl rounded-b-3xl'>
              <div className='py-8 px-4'>
                <h1 className='text-2xl sm:text-3xl font-bold mb-3 gap-3 flex items-center'>
                    Car Rental
                    </h1>
                    <p>
                        Feel Free to Reach Here
                    </p> <br/>
                    <div className='flex items-center gap-3'>
                        <FaLocationArrow/>
                        <p>Madurai, Tamilnadu</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaMobileAlt/>
                        <p>+91 9876543210</p>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href='#'>
                          <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href='#'>
                          <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href='#'>
                          <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                        </a>
                    </div>
                    
              </div>
              <div className='grid grid-cols-1 sm:text-center text-center col-span-2 md:pl-10'>
               <div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-center text-center mb-3 mr-80'>Links</h1>
                    <ul className=' flex gap-16'>
                      {
                        Footerlinks.map((data) => (
                        <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                            <a href={data.link}>{data.title}</a>
                        </li>
                        ))
                      }
                    </ul>
                </div>
               </div>  
              </div>  
            </div>
            <p className='text-center font-medium'>
              @<span className='text-primary'>{new Date().getFullYear()}</span> Copyrights. All rights reserved.
              </p>
        </div>
    </div>
  )
}

export default Footer