import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Index'
import { IoCheckmarkCircle } from "react-icons/io5";
import Footer from '../../Components/Footer/Index';
import BigScreen from './Components/BigScreen';
import MobileScreen from './Components/MobileScreen';


function Home() {

    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
      // Handle window resize
      useEffect(() => {
        const handleResize = () => {
          setIsLgScreen(window.innerWidth >= 1024);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
    
  
let features=[
    {
heading:"AI Symptom Checker",
img:"Features-image-1.svg",
points:["Early warnings, practical next steps, easy referrals to real doctors.",
    " "
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
          "",
          ""
          
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
    
     {isLgScreen && <BigScreen/>}
     {!isLgScreen && <MobileScreen/>}
    </div>
  )
}

export default Home