'use client'
import Image from 'next/image';
import logo from '@/public/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react'
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";

function Navbar() {

  const [isClick, setIsClick] = useState(false)
  const toggleNavbar = ():void => {
    setIsClick (!isClick)
  }

  return (
    <div>

        <nav className='navbarSection'>

            <div>

                <Image  src={logo} height={1000} width={1000} alt='logo' className='navLogo'/>

            </div>

            <div>

                <ul className='navButtonsWrapper'>
                    <Link href={'/'}><li className='navButton'>MAIN</li></Link>
                    <Link href={'/gallery'}><li className='navButton'>GALLERY</li></Link>
                    <Link href={'projects'}><li className='navButton'>PROJECTS</li></Link>
                    <Link href={'/certifications'}><li className='navButton'>CERTIFICATION</li></Link>
                    <Link href={'/contacts'}><li className='navButton'>CONTACTS</li></Link>
                </ul>


            </div>

            <div onClick={toggleNavbar} className='onClick'>

                {isClick?(<div><RxCross2 size={40}  color='black'/></div>):(<div><GiHamburgerMenu size={40} color='black' /></div>)}

            </div>

        </nav>

        {isClick &&  (
            <div className='smallNabar'>
            <ul className='smallNavButtonsWrapper'>
                <Link href={'/'}><li className='smallNavButton' >MAIN</li></Link>
                <Link href={'/gallery'}><li className='smallNavButton' >GALLERY</li></Link>
                <Link href={'/projects'}><li className='smallNavButton' >PROJECTS</li></Link>
                <Link href={'/certifications'}><li className='smallNavButton' >CERTIFICATIONS</li></Link>
                <Link href={'/contacts'}><li className='smallNavButton' >CONTACTS</li></Link>
                </ul>
            </div>

            )}


    </div>
  )
}

export default Navbar