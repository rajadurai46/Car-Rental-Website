import React, { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import { MdWbSunny} from "react-icons/md"
import { BiSolidMoon } from 'react-icons/bi'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'



const NavLinks = [
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
    name: "BOOKLIST",
    link: "#contact",
  },
  
]
 


const Navbar = ({theme, setTheme}) => {
  const [showmenu, setshowmenu] = useState(false)


  const togglemenu = () => {
    setshowmenu(!showmenu)
  }


  return (

  <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 sticky top-0 flex z-40'>
    <div className="container  md:py-0 py-4">
      <div className="flex justify-between items-center">
      <div>
          <h1 className='text-3xl font-bold font-serif'>CAR RENTAL</h1>
        </div>
      
      <div className='hidden md:block'> 
          <ul className='flex items-center gap-6'>
            {
              NavLinks.map((data) => {
              return(
         <BrowserRouter>
              <li className='py-4'>
              <a className='items-center gap-8 inline-flex py-2 hover:border-b-2 hover:text-primary hover:border-primary
              transition-colors duration-500 text-lg font-medium cursor-pointer'>
                 <Link to={data.link}>{data.name}</Link>
              </a>
             
             </li>
             </BrowserRouter>   
              )             

})
}


          </ul>
        </div>
     
        
       
      <div>
            <label className='font-semibold text-md sm:text-xl transition-colors'>
              {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          {
            theme === "dark" ? (
              <MdWbSunny Light onClick={() => setTheme("light")} className='text-2xl ml-7 sm:ml-9 cursor-pointer'/>
            ): (
              <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl ml-7 sm:ml-10 cursor-pointer'/>
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