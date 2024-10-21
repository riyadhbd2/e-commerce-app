import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img className='w-36' src={assets.logo} alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            
        </ul>
    </div>
  )
}

export default Navbar