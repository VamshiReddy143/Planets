import React from 'react'

const Destination = () => {
  return (
    <div className="w-[100%] h-screen overflow-hidden ">
        <img className="w-full h-full object-cover"  src='/assets/destination/background-destination-desktop.jpg'/>
    
        <div className='absolute top-[22%] left-[15%]'>
              <h1 className='text-white text-[30px]'><strong className='mr-7'>01</strong>PICK YOUR DESTINATION</h1>
        </div>

        <div className='flex justify-between absolute top-[35%] left-[15%] text-white'>
            <div className='text-white'>
               <img  src='/assets/destination/image-mars.png'/>
            </div>
            <div className='pl-[20em] '>
              <div className='flex gap-7 pb-2'>
                <p>MOON</p>
                <p className='border-b-2 border-white'>MARS</p>
                <p>EUROPA</p>
                <p>TITAN</p>
              </div>

              <h1 className='text-[6em]'>MARS</h1>
              <p className='w-[27em] tracking-wide leading-8'>Don’t forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>

              <hr className='mt-20'/>

           <div className='flex gap-20 p-5'>
           <div>
                <p className=''>AVG. DISTANCE</p>
                <h1 className='text-[2em]'>225 MIL. KM</h1>
              </div>

              <div>
              <p className=''>EST. TRAVEL TIME</p>
              <h1 className='text-[2em]'>9 MONTHS</h1>
              </div>
           </div>

            </div>
        </div>
    </div>
  )
}

export default Destination