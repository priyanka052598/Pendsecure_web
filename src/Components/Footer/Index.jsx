import React, { useEffect, useState } from 'react'

function Footer() {
      const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
    
      // Handle window resize
      useEffect(() => {
        const handleResize = () => {
          setIsLgScreen(window.innerWidth >= 1024);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  return (
    <div>

{
    isLgScreen &&
     <div className='relative'>
        <img className='w-full h-full image-cover' src="/Footer-bg.svg" alt="" />
        <div className='absolute h-full inset-0'>
        <div className=' flex h-[85%] justify-between px-[120px] py-[50px]'>
            <div className='flex  flex-col gap-[40px]'>
                <div className='logo bg-white px-[24px] py-[12px] rounded-[12px] w-fit'>
                    <img src="/logo.svg" alt="" />
                </div>
                <div className='text-[24px] font-medium text-white'>
                Your AI powered health solution
                </div>
                <div className="icon flex gap-[24px]">
                    <img className='w-[44px]' src="fb-icon.svg" alt="" />
                    <img className='w-[44px]' src="insta.svg" alt="" />
                    <img className='w-[44px]' src="x-icon.svg" alt="" />
                    <img className='w-[44px]' src="wtsp-icon.svg" alt="" />
                    <img className='w-[44px]' src="youtube.svg" alt="" />
                    <img className='w-[44px]' src="linkdin-icon.svg" alt="" />

                </div>

            </div>
            <div className='flex  flex-col gap-[24px]'>
                <h2 className='text-[20px] font-medium text-white'>Company</h2>
                <div>
                    <ul className='text-white text-[20px] flex flex-col gap-[16px]'>
                        <li> Home  </li>
                        <li> Features  </li>
                        <li> About Us  </li>
                        <li> Our Values  </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-[16px]'>
                <h2 className='text-[20px] font-medium text-white pl-5'>Download Now</h2>
                <div className='  flex flex-col '>
                    <img className='  ' src="playstore.svg" alt="" />
                    <img className='mt-[-14px]' src="AppStore.svg" alt="" />
                </div>
            </div>

        </div>
        <div className='w-full h-[2px] bg-white'></div>
        <div className='flex  justify-between  px-[120px] pt-5  items-center'>
            <div className='text-white text-[18px]'>Copyright & Branding Info: “©️ 2025 PandSecure.</div>
            <div className='text-white text-[18px]'>All Rights Reserved</div>
        </div>
        </div>
       

    </div>
}
{
    !isLgScreen &&
    <div className='relative'>
    <img className='w-full h-full image-cover' src="sm-screen-image/footer-sm-bg.svg" alt="" />
    <div className='absolute h-full inset-0'>
    <div className=' flex flex-col h-[80%] justify-between px-[10px] py-[40px]'>
        <div className='flex  flex-col  justify-center items-center gap-[20px]'>
            <div className='logo bg-white px-[20px] py-[12px] rounded-[10px] w-fit'>
                <img className='w-[140px]' src="/logo.svg" alt="" />
            </div>
            <div className='text-[24px] text-center font-medium text-white'>
            Your AI powered health solution
            </div>
            <div className="icon flex gap-[10px]">
                <img className='w-[30px]' src="fb-icon.svg" alt="" />
                <img className='w-[30px]' src="insta.svg" alt="" />
                <img className='w-[30px]' src="x-icon.svg" alt="" />
                <img className='w-[30px]' src="wtsp-icon.svg" alt="" />
                <img className='w-[30px]' src="youtube.svg" alt="" />
                <img className='w-[30px]' src="linkdin-icon.svg" alt="" />

            </div>

        </div>
     
    
           
            <div className='  flex flex-col justify-center items-center '>
                <img className='w-40  ' src="playstore.svg" alt="" />
                <img className='mt-[-14px] w-40' src="AppStore.svg" alt="" />
            
        </div>

    </div>
    <div className='w-full h-[1px] bg-white'></div>
    <div className='flex flex-col  justify-start px-4 pt-5 gap-3  '>
        <div className='text-white text-left text-[16px]'>Copyright & Branding Info: “©️ 2025 PandSecure.</div>
        <div className='text-white  text-left text-[16px]'>All Rights Reserved</div>
    </div>
    </div>
   

</div>
}

    </div>

    
  )
}

export default Footer