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
    <div className=''>

        <h2 className=''>Our Projects</h2> <br />

        <div className=''>

            <div className=''>


                <Link href={'/sample-project'}>
                <div className=''>
                  <Image src={Img03} alt='bgImg' height={1000} width={1000} className=''/>
                  <Image src={Img02} alt='bgImg' height={1000} width={1000} className=''/>
                  <Image src={Img01} alt='bgImg' height={1000} width={1000} className=''/>
                </div>
                </Link>

                <div>

                  <Image src={Img04} alt='bgImg' height={1000} width={1000} className=''/>
                  
                </div>

            </div>

            <div className=''>

              <Image src={Img05} alt='bgImg' height={1000} width={1000} className=''/>
              <Image src={Img06} alt='bgImg' height={1000} width={1000} className=''/>
              <Image src={Img07} alt='bgImg' height={1000} width={1000} className=''/>


            </div>

            <div className=''>
              <Image src={Img08} alt='bgImg' height={1000} width={1000} className=''/>
            </div>
        </div>

    </div>
  )
}

export default Projects