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

        <footer className='footerSection'>

            <div className='footerContentWrapper'>

              <div>

                <Image src={Img01} alt='logo' width={1000} height={1000} className='footerImg1'/>

              </div>

              <div className='footerInfo'>

                <div>

                   <h3>Information</h3>
                   <ul className='infoList'>
                      <li>Main</li>
                      <li>Gallery</li>
                      <li>Projects</li>
                      <li>Certifications</li>
                      <li>Contacts</li>
                   </ul>

                </div>


                <div>

                    <h3>Contacts</h3>
                    <ul className='contactList'>
                        <li>
                            <Image src={Img02} alt='location' width={1000} height={1000} className='footerImg2'/>
                            <div>
                                <p>1234 Sample Street</p>
                                <p>Austin Texas 78704</p>
                            </div>
                        </li>
                        <li>
                            <Image src={Img03} alt='contact' width={1000} height={1000} className='footerImg3'/>
                            <p>512.333.2222</p>
                        </li>
                        <li>
                            <Image src={Img04} alt='email' width={1000} height={1000} className='footerImg4'/>
                            <p>sampleemail@gmail.com</p>
                        </li>
                    </ul>

                </div>

            </div>

            <div className='footerMedia'>

                <h3>Social Media</h3>

                <ul className='mediaList'>
                    <li>
                        <Image src={Img05} alt='facebook' width={1000} height={1000} className='footerImg5'/>
                    </li>
                    <li>
                        <Image src={Img06} alt='twitter' width={1000} height={1000} className='footerImg6'/>
                    </li>
                    <li>
                        <Image src={Img07} alt='linkedIn' width={1000} height={1000} className='footerImg7'/>
                    </li>
                    <li>
                        <Image src={Img08} alt='pixel' width={1000} height={1000} className='footerImg8'/>
                    </li>
                </ul>

            </div>

            </div>

            <div className='copyRightSection'>
                <p className='copyRightText'>© 2021 All Rights Reserved</p>
            </div>

        </footer>


    </div>
  )
}

export default Footer