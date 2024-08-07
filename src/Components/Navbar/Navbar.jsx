import React, { useState } from 'react'
import { MdWbSunny} from "react-icons/md"
import { BiSolidMoon } from 'react-icons/bi'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'


const NavLinks = [
  {
    id: "1",
    name: "HOME",
    link: "/#",
  },

  {
    id: "2",
    name: "CARS",
    link: "/carlist",
  },

  {
    id: "3",
    name: "ABOUT",
    link: "/about",
  },

  {
    id: "4",
    name: "BOOKLIST",
    link: "/contact",
  },
  
]
 


const Navbar = ({theme, setTheme}) => {
  const [showmenu, setshowmenu] = useState(false)


  const togglemenu = () => {
    setshowmenu(!showmenu)
  }


  return (
  <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative flex z-40'>
    <div className="container  md:py-0">
      <div className="flex justify-between items-center">
      <div>
          <h1 className='text-3xl font-bold font-serif'>CAR RENTAL</h1>
        </div>
      
      <div className='hidden md:block'> 
          <ul className='flex items-center gap-6'>
            {
              NavLinks.map((data) => (

            
              <li className='py-4' key={data.id}>
              <a className='items-center gap-8 inline-flex py-2 hover:border-b-2 hover:text-primary hover:border-primary
              transition-colors duration-500 text-lg font-medium' href={data.link}>{data.name}
              </a>
             </li> 

))
}


          </ul>
        </div>
     
        
       
      <div>
            <label className='font-semibold text-sm sm:text-xl transition-colors'>
              {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          {
            theme === "dark" ? (
              <MdWbSunny Light onClick={() => setTheme("light")} className='text-2xl ml-5 sm:ml-9 cursor-pointer'/>
            ): (
              <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl ml-6 sm:ml-10 cursor-pointer'/>
            )
          }
        </div>
        
        <div className='flex items-center gap-4 md:hidden'>
        {
          showmenu?(
            <HiMenuAlt1 onClick={togglemenu} size={30} className='cursor-pointer transition-all'/>
          ):(
            <HiMenuAlt3 onClick={togglemenu} size={30} className='cursor-pointer transition-all'/>
          )
        }
        </div>
      

       

      </div>
    </div>
    <ResponsiveMenu showmenu={showmenu}/>
  </nav>
    
  )
}

export default Navbar