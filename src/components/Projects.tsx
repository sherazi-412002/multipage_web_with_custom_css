import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Group 17.png';
import Img02 from '@/public/Rectangle 17.png';
import Img03 from '@/public/Rectangle 12.png';
import Img04 from '@/public/image 15.png';

import Img05 from '@/public/image 16.png';
import Img06 from '@/public/image 17.png';
import Img07 from '@/public/image 18.png';
 
import Img08 from '@/public/Frame 11 (1).png'
import Link from 'next/link';

function Projects() {
  return (
    <div className='projectSection'>

        <h2 className='projecHeading'>Our Projects</h2> <br />

        <div className='projectMainContainer'>

            <div className='projectContainer'>


                <Link href={'/sample-project'}>
                <div className='projectSubContainer'>
                  <Image src={Img03} alt='bgImg' height={1000} width={1000} className='projectImg1'/>
                  <Image src={Img02} alt='bgImg' height={1000} width={1000} className='projectImg2 hidden'/>
                  <Image src={Img01} alt='bgImg' height={1000} width={1000} className='projectImg3 hidden'/>
                </div>
                </Link>

                <div>

                  <Image src={Img04} alt='bgImg' height={1000} width={1000} className='projectImg4'/>
                  
                </div>

            </div>

            <div className='projectContainer'>

              <Image src={Img05} alt='bgImg' height={1000} width={1000} className='projectImg5'/>
              <Image src={Img06} alt='bgImg' height={1000} width={1000} className='projectImg6'/>
              <Image src={Img07} alt='bgImg' height={1000} width={1000} className='projectImg7'/>


            </div>

            <div className='lastContainer'>
              <Image src={Img08} alt='bgImg' height={1000} width={1000} className='projectImg8'/>
            </div>
        </div>

    </div>
  )
}

export default Projects