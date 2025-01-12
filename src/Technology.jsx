import React from 'react'

const Technology = () => {
  return (
    <div className="w-[100%] h-screen overflow-hidden ">
        <img className="w-full h-full object-cover"  src='../public/assets/crew/background-crew-desktop.jpg'/>

        <div className='absolute top-[22%] left-[15%]'>
              <h1 className='text-white text-[30px]'><strong className='mr-7'>03</strong>SPACE LAUNCH 101</h1>
        </div>


        <div  className='flex text-white absolute top-[40%] left-[15%]'>

        <div className="space-y-[2em] mr-20">
          <div className="bg-white w-[4em] h-[4em] rounded-full flex items-center justify-center text-black text-xl cursor-pointer">
            1
          </div>
          <div className="bg-transparent border b-white w-[4em] h-[4em] rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
            2
          </div>
          <div className="bg-transparent border b-white  w-[4em] h-[4em] rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
            3
          </div>
        </div>

        <div >
           <h1 className='text-[2em]'>THE TERMINOLOGY...</h1>
           <h1 className='text-[4em]'>LAUNCH VEHICLE</h1>
           <p className='w-[28em] tracking-wide leading-8 mt-10'>A launch vechile or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
           
        </div>

        
         <img className='top-[-23%] left-[120%]  absolute  overflow-hidden ' src='../public/assets/technology/image-launch-vehicle-portrait.jpg'/>
        

        </div>
    
      
    </div>
  )
}

export default Technology