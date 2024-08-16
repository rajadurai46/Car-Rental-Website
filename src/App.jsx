import { useEffect} from 'react'
import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Carlist from './Components/Carlist/Carlist'
import Testimonial from './Components/Testimonial/Testimonial'
import Appstore from './Components/Appstore/Appstore'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AOS from "aos"
import "aos/dist/aos.css";




function App() {
 

  //Dark Mode Feature
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ?
  localStorage.getItem("theme") : "dark");

  const element = document.documentElement;
  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])

//aos initialization
React.useEffect(() => {
AOS.init({
  offset: 100,
  duration: 800,
  easing: "ease-in-sine",
  delay: 100,
});
AOS.refresh()
}, [])




  return (

    <>
   
      <Navbar theme={theme} setTheme={setTheme}/> 
      <Hero theme={theme}/>
      <About/>
      <Services/>
      <Carlist/>
      <Testimonial/>
      <Appstore/>
      <Contact/>
      <Footer/>

       
    </>
   
  )
}

export default App
