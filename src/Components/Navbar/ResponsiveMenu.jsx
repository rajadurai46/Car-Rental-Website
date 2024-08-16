import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export const NavLinks = [
  {
    name: "HOME",
    link: "#home",
  },

  {
    name: "CARS",
    link: "#carlist",
  },

  {
    name: "ABOUT",
    link: "#about",
  },

  {
    name: "BOOKING",
    link: "#contact",
  },

]


const ResponsiveMenu = ({showmenu}) => {

  return (
    <div className={`${showmenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-900 
    h-screen w-[50%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 
    transition-all duration-300`}>
      <div className='card'>
        <div className='flex items-center justify-start gap-3'>
          <FaUserCircle size={30} />
          <div>
            <h1>Hello User</h1>
          </div>
        </div>
        <nav className='mt-12'>
          <ul className='space-y-4 text-xl'>
          {
            NavLinks.map((data) => (
              <li>
                <a className='hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500' 
                href={data.link}>{data.name}</a>
              </li>
            ))
          }
          </ul>
        </nav>
      </div>
      <div>
        <h1>
        Created by <a href='https://github.com/rajadurai46'>
        <span className='text-primary font-medium'>Rajadurai</span>
        </a>
        </h1>
        </div>
    </div>
  )
}

export default ResponsiveMenu