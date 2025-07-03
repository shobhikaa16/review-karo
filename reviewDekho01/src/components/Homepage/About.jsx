import React from 'react'

function About() {
  return (
    <div className='py-16 px-4  flex justify-center'>
        <div className='bg-green-200 shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden min-h-[350px]'>
            {/* content section */}
            <div className=' md:w-1/2 p-10 pt-17 flex flex-col jutify-start space-y-4'>
               <h1 className='text-3xl font-bold'>We give you Reviews</h1>
               <p className='mr-10'>We are a review platform designed for everyone. Our goal is to be the ultimate mark of trust—helping people make confident purchasing decisions while enabling 
                businesses to grow through genuine feedback.</p>
                <button className='rounded-full bg-black font-bold text-xs text-white py-3 w-25 hover:bg-gray-700'>Know more</button>
            </div>

            {/* image section */}
            <div className=''>

            </div>
        </div>
    </div>
  )
}

export default About