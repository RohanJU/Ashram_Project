import React from 'react'
import headerimg from "../../../public/images/pngegg.png"
import Image from 'next/image' 

function Header() {
  return (
    <nav className='nav'>
        <div className='nav-left'>
        <button className='nav-button active'>Home</button>
        <button className='nav-button'>About</button>
        <button className='nav-button'>Book</button>
      </div>
      <div>
        <Image width={100} height={100} src={headerimg} alt='LOGO'/>
      </div>
      <div className='nav-right'>
        <button className='nav-button'>Gallery</button>
        <button className='nav-button'>Donate</button>
        <button className='nav-button'>User</button>
      </div>
    </nav>
  )
}

export default Header