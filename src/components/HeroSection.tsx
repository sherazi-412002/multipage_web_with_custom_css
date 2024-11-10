import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Rectangle 6.png';
import Imag02 from '@/public/Frame 8.png';
import Img03  from '@/public/Frame 9.png';
import Img04 from '@/public/slide-numbers.png';
import Img05 from '@/public/Frame 10.png';

function HeroSection() {
  return (
    <div className='heroSction'>

        <div className='contentWrapper'>

            <div className='mainContent'>

              <p className='mainHeading1'>PROJECT</p>
              <p className='mainHeading2'>LORUM</p>

            </div>

            <div className='arrowImgWrapper'>

                <Image src={Img03} alt='arrow' height={1000} width={1000} className='arrowImg'/>
                <Image src={Imag02} alt='arrow' height={1000} width={1000} className='arrowImg'/>

            </div>

            <div>

              <Image src={Img04} alt='number-line' height={1000} width={1000} className='numberImg'/>

            </div>

        </div>

        <div className='largeImgWrapper'>

            <Image src={Img01} height={1000} width={1000} alt='mainImg' className='largeImg'/>
            <Image src={Img05} alt='button' height={1000} width={1000} className='arrowBtnImg'/>
            
         </div>


    </div>
  )
}

export default HeroSection