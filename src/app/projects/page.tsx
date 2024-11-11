import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/image 30.png';
import Img02 from '@/public/image 33.png';
import Img03 from '@/public/image 32.png';
import Img04 from '@/public/Frame 11 (5).png';

import Img05 from '@/public/slide-numbers (1).png';
import Img06 from '@/public/Frame 9.png';
import Img07 from '@/public/Frame 8.png'; 

function page() {
  return (
    <div className='routProjectSection'>

      <div className='headingWrapper'>

        <h2 className='routProjectHeading1'>Our</h2>
        <h2 className='routProjectHeading1'>Projects</h2>

      </div>

      <div className='routProjectWraper'>
        <div> <Image src={Img01} alt='1stProject' width={1000} height={1000} className='routProjectImg1'/></div>
        <div className='routProjectContent'>
          <h3 className='routProjectHeading'>Sample Project 1</h3>
          <p className='routProjectText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
          <Image src={Img04} alt='1stProject' width={1000} height={1000} className='routProjectImg2'/>

        </div>
      </div>



      <div className='routProjectWraper'>
        <div> <Image src={Img02} alt='2ndProject' width={1000} height={1000} className='routProjectImg1'/></div>
        <div className='routProjectContent'>
          <h3 className='routProjectHeading'>Sample Project 2</h3>
          <p className='routProjectText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
          <Image src={Img04} alt='1stProject' width={1000} height={1000} className='routProjectImg2'/>

        </div>
      </div>



      <div className='routProjectWraper'>
        <div> <Image src={Img03} alt='3rdProject' width={1000} height={1000} className='routProjectImg1'/></div>
        <div className='routProjectContent'>
          <h3 className='routProjectHeading'>Sample Project 3</h3>
          <p className='routProjectText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book.</p>
          <Image src={Img04} alt='1stProject' width={1000} height={1000} className='routProjectImg2'/>

        </div>
      </div>


      <div className='flex gap-9'>

        <Image src={Img05} alt='number-slider' height={1000} width={1000} className='h-[52px] w-[140px]'/>
        
        <Image src={Img06} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>
        <Image src={Img07} alt='arrow' height={1000} width={1000} className='h-[53px] w-[53px]'/>


      </div>


     <br /> <br />



      
    </div>
  )
}

export default page