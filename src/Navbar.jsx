import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div  className="absolute flex items-center justify-between w-[92%%] left-[4%] top-[5%] ">
    
      <div className="flex items-center">
        <img src="../public/assets/shared/logo.svg" alt="Logo" />
        <div className="relative  w-[40em] bg-white ml-[50px] h-[1px]  backdrop-blur-2xl bg-white/30 z-50  max-md:hidden" />
      </div>

    
      <div  className="text-white flex gap-20 backdrop-blur-2xl bg-white/5 pt-8 pb-8 pl-40 pr-60 rounded-lg ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-3  '
              : 'hover:border-b-2 hover:border-gray-400 pb-2'
          }
        >
          <strong className="mr-4 max-md:hidden">00</strong>HOME
        </NavLink>

        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-2'
              : 'hover:border-b-2 hover:border-gray-400 pb-2'
          }
        >
          <strong className="mr-4 max-md:hidden">01</strong>DESTINATION
        </NavLink>

        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-2'
              : 'hover:border-b-2 hover:border-gray-400 pb-2'
          }
        >
          <strong className="mr-4 max-md:hidden">02</strong>CREW
        </NavLink>

        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-2'
              : 'hover:border-b-2 hover:border-gray-400 pb-2'
          }
        >
          <strong className="mr-4 max-md:hidden">03</strong>TECHNOLOGY
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
