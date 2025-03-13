import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header/Index'
import { IoCheckmarkCircle } from "react-icons/io5";
import Footer from '../../../Components/Footer/Index';


function MobileScreen() {

  
    
  
let features=[
    {
heading:"AI Symptom Checker",
img:"Features-image-1.svg",
points:["Early warnings, practical next steps, easy referrals to real doctors.",
   
]
    },
    {
        heading:"AI Blood Test Analyzer",
        img:"Features-image-1.svg",
        points:["Lab results for immediate AI-driven interpretations.",
          "  Faster insights, informed follow-ups, improved chronic condition management."
        ]
            },
    {
        heading:"Pandemic Risk Assessment",
        img:"Features-image-1.svg",
        points:["Calculate individual risk using a basic or comprehensive risk assessment quiz ",
          "  Assess the pandemic preparedness risk score of the country you are in ",
          "Provides low, moderate to high risk scores (1 to 100) according to various parameters"
        ]
            },
    {
        heading:"Telemedicine",
        img:"Features-image-1.svg",
        points:["Connect with nearby available online physicians for appointments.",
          " Location-based doctor search, appointment scheduling, quick consults.",
        
          
        ]
            },
];
let mission=[
    {
    icon:"Preventive-icon.svg",
    heading:"Preventive Approach",
    para:"Focus on readiness rather than reaction."

},
    {
    icon:"Preventive-icon.svg",
    heading:"Universal Access",
    para:"Committed to serving diverse populations, including under-resourced areas."

},
    {
    icon:"Preventive-icon.svg",
    heading:"Preventive Approach",
    para:"Focus on readiness rather than reaction."

},
];
let values=[
  {
    icon:"intigrity.svg",
    heading:"Integrity",
    paragraph:"We use credible data sources and transparent methodologies, ensuring accuracy and trust in our predictions and recommendations."
  },
 
  {
    icon:"empathy.svg",
    heading:"Empathy",
    paragraph:"Understanding user challenges—whether an individual seeking peace of mind or a healthcare official planning resource allocation—drives our user-centric design."
  },
  {
    icon:"ino.svg",
    heading:"Innovation",

    paragraph:"We never stop exploring new technologies—like AI-based analytics, wearable integrations, or telemedicine expansions—that can better serve global health needs."
  },
  {
    icon:"lang.svg",
    heading:"Accessibility",
    paragraph:"Strive for a user interface that’s intuitive for non-technical users, supports multiple languages, and ensures inclusivity across demographics."
  },
]



  return (
    <div className='w-full'>
        <Header/>

        {/* Your AI-powered Health Solution */}
        <div className=' home relative  mx-4 '>
            <img className='w-full h-full object-cover rounded-[40px]' src="/sm-screen-image/main-sm-bg.svg" alt="" />
            <div className='absolute inset-0  flex  flex-col justify-start items-center mt-8'>
           <h1 className="text-white text-center text-[35px] font-medium relative">
  Your <span className="relative inline-block">
    AI-Powered
    <svg
      className="absolute left-0 bottom-[-16px] w-full h-8"
      viewBox="0 0 660 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
   <path
        d="M0 20 C11 10, 22 30, 33 20 S44 10, 55 20 S66 30, 77 20 S88 10, 99 20 
        S110 30, 121 20 S132 10, 143 20 S154 30, 165 20 S176 10, 187 20 S198 30, 209 20 
        S220 10, 231 20 S242 30, 253 20 S264 10, 275 20 S286 30, 297 20 S308 10, 319 20 
        S330 30, 341 20 S352 10, 363 20 S374 30, 385 20 S396 10, 407 20 S418 30, 429 20 
        S440 10, 451 20 S462 30, 473 20 S484 10, 495 20 S506 30, 517 20 S528 10, 539 20 
        S550 30, 561 20 S572 10, 583 20 S594 30, 605 20 S616 10, 627 20 S638 30, 649 20 
        S660 10, 671 20"
        stroke="#003E5B"
        strokeWidth="12"
        fill="transparent"
        strokeLinecap="round"

      />
    </svg>
  </span> Health Solution
</h1>





                <div className='flex mt-4'>
                    <img className='w-36' src="/playstore.svg" alt="" />
                    <img className='w-36' src="/AppStore.svg" alt="" />
                </div>
            </div>
        </div>
        {/* Features */}
        <div className=' features my-[80px]'>
            <h2 className='text-[32px] font-medium flex justify-center items-center pb-[30px] '>Features</h2>
            <div className='flex  flex-col justify-center items-center  gap-[40px]'>
{features.map((item,index)=>{
   return <div className='w-[92%] '>
    <div className='relative w-full '>
    <img className='border-[2px] border-[#0093D5] rounded-t-[16px] w-full h-full object-cover' src={item.img} alt="" />
    <div className='absolute inset-0  w-full   top-0  '>
<h3 className='text-[20px] w-[100%] text-center bg-[#0093d5] text-white py-[8px] rounded-b-[40px] '>{item.heading}</h3>
    </div>
{/* <div className=' border-b-[2px] h-[100%] border-x-[2px] p-[32px] rounded-b-[16px] border-[#0093d5] '>
{item.points.map((item)=>{
     return     <div className='flex justify-start items-center  w-fit'>

      { item.length>0 &&
        <IoCheckmarkCircle className='text-[30px] w-[6%] text-[#0093D5]'/>
      } 
     <p className='text-[18px] pl-[12px]'>{item}</p>
     </div>
   
})}
   
    </div> */}
    {/* <div className='border-b-[2px] h-[100%] border-x-[2px] p-[32px] rounded-b-[16px] border-[#0093d5]'>
  {item.points.map((point, index) => {
    return (
      point.trim().length > 0 && ( // Ensure empty strings are ignored
        <div key={index} className='flex justify-start items-center w-fit'>
          <IoCheckmarkCircle className='text-[30px] w-[6%] text-[#0093D5]' />
          <p className='text-[18px] pl-[12px]'>{point}</p>
        </div>
      )
    );
  })}
</div> */}
<div className='border-b-[2px] h-[100%] border-x-[2px] p-[12px] rounded-b-[16px] border-[#0093d5]'>
  {item.points.map((point, index) => {
    return (
      <div key={index} className='flex  justify-start items-center pb-2 w-fit'>
        {point.trim().length > 0 ? (
            <div className='w-[30px]'>
          <IoCheckmarkCircle className='text-[27px]   text-[#0093D5]' />
          </div>
        ) : (
          <div className='h-[24px]' /> // Placeholder to maintain spacing
        )}
        <p className='text-[16px]  pl-[8px]'>{point}</p>
      </div>
    );
  })}
</div>


    </div>
  

    </div>

})}
            </div>

        </div>
        {/* About us */}
        <div className={` about-us  bg-[url('/about-us-bg.svg')] rounded-[24px]   `} >
            {/* <img className='w-full h-full object-cover' src="sm-screen-image/about-us-sm-bg.svg" alt="" /> */}
          
            <div className=' inset-0 pt-20 p-4'>
                <h2 className='text-[32px] font-medium pb-[30px] text-center'>About Us</h2>
                <div className='our mission w-full mb-20    flex flex-col justify-center items-center  '>
              <div className={`relative  bg-[url('/mission-bg.svg')] rounded-[24px] bg-cover w-full h-[140px] `}>
              {/* <img  className={`rounded-[24px]  w-full  object-cover h-[200px]`}  src="/mission-bg.svg" alt="" /> */}
              <div   className={` inset-0 rounded-[24px] bg-center  w-full object-cover pl-5 py-6  `}>
                <img className='pb-3 w-12' src="/mission-icon.svg" alt="" />
                <h3 className='text-[24px]  font-medium text-white '>Our Mission</h3>
               
              </div>
              </div>
              <div className='h-[39px] w-[9%] bg-white '></div>
              <div className={`rounded-[24px]  bg-[url('sm-screen-image/mission-para-bg.svg')] `}>
              {/* <img  className='rounded-[24px] h-[120%] w-full object-cover' src="g" alt="" /> */}
              <div className='  p-[20px] text-[17px] pb-4'>
              PandSecure is on a mission to empower individuals, communities, and healthcare systems to stay one step ahead of infectious diseases and emerging health threats. 
<br/>
<br/>

By combining data-driven insights, AI technologies, and proactive preparedness tools, we strive to create a safer, healthier world for everyone—no matter where they live or what challenges they face.
              </div>
              </div>
               </div>
                  <div className=' flex flex-col justify-center ml-[px]'>

{mission.map((item,index)=>{
    return  <div className='flex flex-col justify-center   items-center  '>
    
    <div className={`bg-[url('/mission-bg.svg')] rounded-[24px] w-full py-10 flex-shrink0`}>
        
        {/* <img  className='rounded-[24px] w-full h-full object-cover' src="/mission-bg.svg" alt="" /> */}
        {/* <div className=' inset-0 p-[10px]'>  */}

    <div className='mb-5 flex justify-center items-center'>
    <img className='' src={item.icon} alt="" />

    </div>
    <div className='h-[60%]'>
    <h3 className='text-[24px] font-medium text-white text-center'>{item.heading}</h3>
    <p className='text-[17px] text-white font-normal px-2 text-center pt-[12px]'>{item.para}</p>
    {/* </div> */}
       
        </div>

         </div>
{ index !== mission.length - 1 ?       <div className='h-[19px] w-[15%] bg-[#0093D5] '></div>:<div className='h-[19px] w-[15%]  '></div>
}
      </div>

})}
                  </div>





            </div>

        </div>
        {/* Our values */}
        <div className=' values py-[80px]'>
          <h2 className='text-[32px] font-medium text-center pb-[30px]'>Our Values</h2>
          <div className='flex  flex-col justify-center mx-4 items-center gap-10'>

          {values.map((item,index)=>{
            return <div className='relative w-[100%]  '>
<img className='border-[2px] border-[#0093D5] rounded-[24px] w-full h-full object-cover' src="sm-screen-image/value-sm-bg.svg" alt="" />
<div className='absolute inset-0   p-[24px] flex  flex-col gap-[10px]'>
<div className=''>
            <img className='w-[12%]' src={item.icon} alt="" />
            </div>
            <div className=''>
            <h3 className='text-[24px] font-medium'>{item.heading}</h3>
            <p className='text-[16px] font-normal pt-[12px]'>{item.paragraph}</p>
            </div>
</div>
           
            </div>
          })}

          </div>

        </div>
        <Footer/>
    </div>
  )
}

export default MobileScreen