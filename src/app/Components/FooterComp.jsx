import React from 'react'
import {FacebookIcon, InstaIcon, LinkedIn, TwitterIcon} from './common/Icon'

const FooterComp = () => {
  return (
    <footer className='w-full flex items-center justify-center h-[182px]'>
        <div className='flex flex-col w-[232px] gap-4 items-center'>
            <div className='flex items-center justify-between w-full'>
               <FacebookIcon />
               <InstaIcon />
               <TwitterIcon />
               <LinkedIn />
            </div>
            <small>Copyright ©2020 All rights reserved </small>
        </div>
    </footer>
  )
}

export default FooterComp