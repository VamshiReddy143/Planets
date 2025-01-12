import React from 'react'

const Crew = () => {
  return (
    <div className="w-[100%] h-screen overflow-hidden ">
        <img className="w-full h-full object-cover"  src='../public/assets/crew/background-crew-desktop.jpg'/>

        <div className='absolute top-[22%] left-[15%]'>
              <h1 className='text-white text-[30px]'><strong className='mr-7'>02</strong>MEET YOUR CREW</h1>
        </div>


        <div  className='flex text-white absolute top-[40%] left-[15%]'>

        <div >
           <h1 className='text-[2em]'>FLIGHT ENGINEER</h1>
           <h1 className='text-[4em]'>ANOUSHEH ANSARI</h1>
           <p className='w-[25em] tracking-wide leading-8 mt-10'>Anousheh Ansari is an American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first American to fly to the ISS.and the first iraian in space</p>

           <div className='flex gap-7 mt-20'>
             <div className='w-[1em] h-[1em] bg-gray-600 rounded-full'/>
             <div  className='w-[1em] h-[1em] bg-gray-600 rounded-full'/>
             <div  className='w-[1em] h-[1em] bg-gray-600 rounded-full'/>
             <div  className='w-[1em] h-[1em] bg-white rounded-full'/>
           </div>
        </div>

        
         <img className='top-[-23%] left-[120%] absolute  overflow-hidden ' src='../public/assets/crew/image-anousheh-ansari.png'/>
        

        </div>
    
      
    </div>
  )
}

export default Crew