import React from 'react';


const Home = () => {
  return (
    <div  className="w-screen h-screen overflow-hidden">
      {/* Change img to div for background-image */}
    
        <img className="w-full h-full bg-cover bg-center" src='/assets/home/background-home-desktop.jpg'/>
      

      <div  className="flex top-[45%] left-[10%] absolute text-white">
        <div>
          <h1 className="tracking-light text-[20px]">SO, YOU WANT TO TRAVEL TO</h1>
          <h1 className="text-[120px] font-normal">SPACE</h1>
          <p className="w-[37%] tracking-wide leading-7">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world
            experience!
          </p>
        </div>

        <div  className="pr-[15%] pt-[3%]">
          <h2 className="text-black text-[40px] bg-white h-[6em] w-[6em] flex items-center justify-center rounded-full">
            EXPLORE
          </h2>
        </div>
      </div> 
    </div>
  );
};

export default Home;
