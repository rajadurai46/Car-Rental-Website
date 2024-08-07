import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'


const skillsData = [
    {
        name: "Best Price",
        icon: (
            <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link: "#",
        description: "In all over india we only one renting the luxury cars in most affordable price.",
        aosDelay: "0",
    },

    {
        name: "Safety and Features",
        icon: (
            <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link: "#",
        description: "Our Cars had Global NCAP Five Star rating to give a safe and secure journey with your loved ones.",
        aosDelay: "500",
    },

    {
        name: "Experienced Service",
        icon: (
            <SlNote className='text-5xl text-primary group-hover:text-black duration-500'/>
        ),
        link: "#",
        description: "Our service makes you feel a Own Car which makes your journey without any interruption.",
        aosDelay: "1000",
    },
];

const Services = () => {
  return (
    <div className='py-14 shadow-md bg-white dark:bg-black dark:text-white 
    sm:min-h-[720px] sm:grid sm:place-items-center'>
        <div className="container">
            <div className='pb-12'>
                <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>
                    Why Choose US
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {skillsData.map((skill) => (
                      <div key={skill.name} data-aos='fade-up' data-aos-delay={skill.aosDelay}
                      className='card text-center group space-y-3 sm:space-y-6 p-4 
                      sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg'>
                        <div className='grid place-items-center'>{skill.icon}</div>
                        <h1>{skill.name}</h1>
                        <p>{skill.description}</p>
                        <a href={skill.link} Learn More/>
                      </div>

                    ))}
                </div>
        </div>
    </div>
  )
}

export default Services