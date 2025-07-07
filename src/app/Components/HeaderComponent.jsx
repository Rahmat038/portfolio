import Link from 'next/link'
import React from 'react'



const HeaderComponent = () => {
  // const [togglemobileNav, setToggleMobileNav] = useState(false);

  // const handleTogglemobileNav = () => {
  //   setToggleMobileNav(!togglemobileNav)
  // }
  return (
    <header className='w-full flex items-center justify-end h-[86px]'>
      {/* <div>
        <button type='button'
        onClick={handleTogglemobileNav} >
         <RxHamburgerMenu size='30px' height='18px' /></button>
         {
          toggleMobileNav && (
            <div className='w-[360px] p-6 mx-auto absolute top-7 right-6 z-10 bg-white shadow-lg'>
              <nav className='w-full gap-6 flex flex-col items-center justify-between '>
            <Link className='text [#00000] text-1 font-medium cursor-pointer' href='works' >works</Link >
            <Link className='text [#00000] text-1 font-medium cursor-pointer' href='Blogs'>Blogs</Link >
            <Link className='text [#00000] text-1 font-medium cursor-pointer' href='contacts'>contacts</Link >
        </nav>
        </div>
      )
         }
         </div> */}
        <nav className='w-[236px] flex items-center justify-between'>
            <Link className='text [#00000] text-1 font-medium cursor-pointer' href='works' >works</Link >
            <Link className='text [#00000] text-1 font-medium cursor-pointer' href='blog'>Blogs</Link >
            <Link className='text [#00000] text-1 font-medium cursor-pointer' href='contacts'>contacts</Link >
        </nav>
    </header>
  )
}
export default HeaderComponent