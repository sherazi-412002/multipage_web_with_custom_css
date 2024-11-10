import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/Rectangle 8.png'
import Img02 from '@/public/Rectangle 9.png';
import Img03 from '@/public/Rectangle 10.png';
import Img04 from '@/public/Frame 11.png';

function About() {
  return (
    <div className='aboutSection'>

          <div className='firstImgsWrapper'>

          <Image src={Img01} alt='arrow' height={1000} width={1000} className='aboutImg1'/>
          <Image src={Img03} alt='arrow' height={1000} width={1000} className='aboutImg2'/>


          </div>

            <div className='secondImgWrapper'>

              <Image src={Img02} alt='arrow' height={1000} width={1000} className='aboutImg3'/>

            </div>

          <div className='aboutText'>
      
            <h1 className='aboutHeading'>About</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                  essentially unchanged.
            </p> <br />

            <Image src={Img04} alt='arrow' height={1000} width={1000} className='aboutImg4'/>
            
  
          </div>


     </div>
  )
}

export default About