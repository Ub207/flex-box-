import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='flex justify-between mt-10 mx-10 gap-10'>
        <div className='bg-purple-950 w-1/2 h-96'> </div>
       
        <div className='bg-orange-950 w-1/2 h-96'></div>
        </section>
        {/* Hero section with two divs: one on the left and one on the right */}
        <section className='flex justify-between mt-10 gap-4 mx-10'>

        <div className='bg-blue-600 w-full h-80 '> </div>
        <div className='bg-red-600 w-full h-80'></div>
        <div className='bg-black w-full h-80'></div>


 </section>
  {/* Homework section with three divs side by side */}
 <section className='flex justify-between mt-10 mx-10 gap-3'>
    <div className='bg-orange-600 w-full h-80'></div>
    <div className='bg-blue-600 w-full h-80'></div>



 </section>
 </>
  );
}

export default Hero