import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Group 11 1.png';

import Img02 from '@/public/Vector.png';
import Img03 from '@/public/Group (1).png';
import Img04 from '@/public/Group (2).png';

import Img05 from '@/public/Shape.png';
import Img06 from '@/public/Shape (1).png';
import Img07 from '@/public/Linked In (1).png';
import Img08 from '@/public/Shape (2).png';


function Footer() {
  return (
    <div>

        <footer className=''>

            <div className=''>

            <div>

                <Image src={Img01} alt='logo' width={1000} height={1000} className=''/>

            </div>

            <div className=''>

                <div>

                   <h3 className=''>Information</h3>
                   <ul className=''>
                      <li>Main</li>
                      <li>Gallery</li>
                      <li>Projects</li>
                      <li>Certifications</li>
                      <li>Contacts</li>
                   </ul>

                </div>


                <div>

                    <h3 className=''>Contacts</h3>
                    <ul className=''>
                        <li className=''>
                            <Image src={Img02} alt='location' width={1000} height={1000} className=''/>
                            <div>
                                <p>1234 Sample Street</p>
                                <p>Austin Texas 78704</p>
                            </div>
                        </li>
                        <li className=''>
                            <Image src={Img03} alt='contact' width={1000} height={1000} className=''/>
                            <p>512.333.2222</p>
                        </li>
                        <li className=''>
                            <Image src={Img04} alt='email' width={1000} height={1000} className=''/>
                            <p>sampleemail@gmail.com</p>
                        </li>
                    </ul>

                </div>

            </div>

            <div className=''>

                <h3 className=''>Social Media</h3>

                <ul className=''>
                    <li>
                        <Image src={Img05} alt='facebook' width={1000} height={1000} className=''/>
                    </li>
                    <li>
                        <Image src={Img06} alt='twitter' width={1000} height={1000} className=''/>
                    </li>
                    <li>
                        <Image src={Img07} alt='linkedIn' width={1000} height={1000} className=''/>
                    </li>
                    <li>
                        <Image src={Img08} alt='pixel' width={1000} height={1000} className=''/>
                    </li>
                </ul>

            </div>

            </div>

            <div className=''>
                <p className=''>© 2021 All Rights Reserved</p>
            </div>

        </footer>


    </div>
  )
}

export default Footer