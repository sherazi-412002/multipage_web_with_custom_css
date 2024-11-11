import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/image 12.png';
import Img02 from '@/public/Frame 11 (4).png'


function Contact() {
  return (
    <div className='contactSection'>


        <h2 className='contactHeading'>Contact Us</h2>

        <div className='contactContentWrapper'>
            <form className='contactForm'>

              <input type="text" placeholder='Name'/>

              <div className='fieldWrapper'>
              <input type="phone" placeholder='Phone Number'required/>
              <span>*</span>
              </div>

              <div className='fieldWrapper'>
              <input type="email" placeholder='E-mail' required />
              <span >*</span>
              </div>

              <input type="text" placeholder='Interested In' />
             
              <div className='fieldWrapper'>
              <textarea placeholder='Message' required></textarea>
              <span >*</span>
              </div>

            </form>
       

            <Image src={Img01} alt='contactImg' height={1000} width={1000} className='contactImg1'/>

        </div>

        <br /> <br /> <br />

        <div>

          <Image src={Img02} alt='button' className='contactImg2'/>

              
        </div>




    </div>
  )
}

export default Contact