import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/image 34.png';
import Img02 from '@/public/Rectangle 23.png';
import Img03 from '@/public/Rectangle 24.png';
import Img04 from '@/public/Rectangle 25.png';
import Img05 from '@/public/Rectangle 26.png';
import Img06 from '@/public/Rectangle 27.png';
import Img07 from '@/public/Rectangle 28.png';
import Img08 from '@/public/Rectangle 29.png';
import Img09 from '@/public/Rectangle 30.png';
import Img10 from '@/public/Rectangle 31.png';

import Img11 from '@/public/slide-numbers (1).png';
import Img12 from '@/public/Frame 8.png';
import Img13 from '@/public/Frame 9.png';

function page() {
  return (
    <div className='gallerySection'>

      <div className='galleryHeadingWrapper'>

      <h2 className='galleryHeading1'>Photo</h2>
      <h2 className='galleryHeading2'>Gallery</h2>

      </div>

    

      <div className='galleryImgsWrapper'>

        <Image src={Img01} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img02} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img03} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img04} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img05} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img06} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img07} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img08} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img09} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        <Image src={Img10} alt='galleryPic' height={1000} width={1000} className='galleryImges'/>
        
      </div>

      <div className='galleryExtraImgs'>

        <Image src={Img11} alt='number-slider' height={1000} width={1000} className='galleryImg1'/>
        
        <Image src={Img13} alt='arrow' height={1000} width={1000} className='galleryImg2'/>
        <Image src={Img12} alt='arrow' height={1000} width={1000} className='galleryImg3'/>


      </div>


      <br /> <br /> <br />
    </div>
  )
}

export default page