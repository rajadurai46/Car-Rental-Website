import React from 'react'
import pattern from '../../assets/pattern.jpeg'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'


const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "50%"
}
const Appstore = () => {
  return (
    <div className='bg-slate-100 dark:bg-dark dark:text-white pb-14 pt-14'>
     <div className='container text-black py-10 sm:min-h-[400px] sm:grid 
     sm:place-items-center rounded-3xl' style={bannerImg}>
        <div>
         <div className='space-y-6 max-w-xl mx-auto'>
            <h1 data-aos='fade-up'
            className='text-2xl text-center sm:text-4xl font-semibold font-serif'>
                Get Started with our APP
                </h1>
            <p data-aos='fade-up'
            className='text-center sm:px-20'>
                Download the Latest Version from Official Store
                </p>
                <div data-aos='fade-up'
                className='flex flex-wrap justify-center items-center gap-4'>
                    <a href='#'>
                        <img src={playstore} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>

                    <a href='#'>
                        <img src={appstore} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                </div>
         </div>
        </div>
        </div> 
    </div>
  )
}

export default Appstore