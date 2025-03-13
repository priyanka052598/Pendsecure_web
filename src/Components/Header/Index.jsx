// import React, {  useEffect, useState } from 'react'
// import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
// import { useNavigate } from 'react-router-dom';

// function Header() {


//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
//   // const navigate =useNavigate();

//     // Handle window resize
//     useEffect(() => {
//       const handleResize = () => {
//         setIsLgScreen(window.innerWidth >= 1024);
//       };
  
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   }
//   return (
//     <div className='flex w-[100%] justify-between items-center  px-[120px] py-[28px]'>
//         {/* Logo */}
//         <div className=''>
//         <img 
//   className={`${isLgScreen ? 'w-[90%]' : 'w-[50%]'}`} 
//   src="/logo.svg" 
//   alt="Logo"
// />
//         </div>
//         {/* Menu */}
//         <div className='hidden lg:flex'>
//             <ul className=' gap-[40px]  '>
//                 <li className='text-[18px] font-normal py-[10px] cursor-pointer'>Home</li>
//                 <li className='text-[18px] font-normal py-[10px] cursor-pointer'>Features</li>
//                 <li className='text-[18px] font-normal py-[10px] cursor-pointer'>About Us</li>
//                 <li className='text-[18px] font-normal py-[10px] cursor-pointer'>Our Values</li>
//                 <li className='text-[18px] font-normal bg-[#0093D5] text-white px-[20px] py-[10px] cursor-pointer  rounded-full'>Download Now</li>
//                 </ul>
//                 <div className="h">
//                         <button onClick={toggleSidebar} className="text-white mr-6 p-2 bg-[#464646] rounded-full text-[25px]"><RxHamburgerMenu/></button>
//                     </div>
//     </div>
// {/* For mobile view */}
//     <div  className={`fixed  lg:hidden top-0 right-0 h-full bg-white w-[250px] transform ${
//                     sidebarOpen ? 'translate-x-0' : 'translate-x-full'
//                 } transition-transform duration-300 ease-in-out z-50`}>

// <button onClick={toggleSidebar} className="text-white text-[28px] absolute top-6  p-2 bg-[#0093D5] rounded-full right-8"><RxCross2/></button>
// <ul className='mt-28 ml-8'>
//   <li className='text-black'>Home  </li>
//   <li className='text-black'>Home  </li>
//   <li className='text-black'>Home  </li>
//   <li className='text-black'>Home  </li>
// </ul>
       
//     </div>
//     </div>
//   )
// }

// export default Header


import React, { useState, useEffect } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20, // Adjust for fixed header
        behavior: "smooth",
      });
    }
  };
  

  return (
    <header className={`flex w-full bg-white  transition-shadow sticky top-0 z-50  ${isLgScreen?'border-b-0 py-[20px]':'border-b-[1px] border-black mb-5 '}  justify-between items-center px-6 md:px-12 lg:px-[120px] py-3 bg-white `}>
      {/* Logo */}
      <div>
        <img 
          className="max-w-[150px] md:max-w-[180px]" 
          src="/logo.svg" 
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-8">
          <li onClick={() => scrollToSection('home')} className="text-[18px] font-normal py-2 cursor-pointer hover:text-blue-500 transition">Home</li>
          <li onClick={() => scrollToSection('features')} className="text-[18px] font-normal py-2 cursor-pointer hover:text-blue-500 transition">Features</li>
          <li onClick={() => scrollToSection('about-us')} className="text-[18px] font-normal py-2 cursor-pointer hover:text-blue-500 transition">About Us</li>
          <li onClick={() => scrollToSection('values')} className="text-[18px] font-normal py-2 cursor-pointer hover:text-blue-500 transition">Our Values</li>
          <li className="text-[18px] font-normal bg-[#0093D5] text-white px-6 py-2 cursor-pointer rounded-full hover:bg-[#007bbd] transition">
            Download Now
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="text-white p-2 bg-[#0093D5] rounded-full text-[25px]">
          <RxHamburgerMenu />
        </button>
      </div>

         {/* Black Overlay */}
         {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[250px] shadow-lg transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button onClick={toggleSidebar} className="text-white text-[28px] absolute top-6 p-2 bg-[#0093D5] rounded-full right-6">
          <RxCross2 />
        </button>

        {/* Sidebar Menu */}
        <ul className="mt-28 ml-8 space-y-6 text-lg font-medium">
          <li onClick={() => scrollToSection('home')} className="text-black cursor-pointer hover:text-blue-500 transition">Home</li>
          <li onClick={() => scrollToSection('features')} className="text-black cursor-pointer hover:text-blue-500 transition">Features</li>
          <li onClick={() => scrollToSection('about-us')} className="text-black cursor-pointer hover:text-blue-500 transition">About Us</li>
          <li  onClick ={() => scrollToSection('values')} className="text-black cursor-pointer hover:text-blue-500 transition">Our Values</li>
          <li className="text-black cursor-pointer hover:text-blue-500 transition">Download Now</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
