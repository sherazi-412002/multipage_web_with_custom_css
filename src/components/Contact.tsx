import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/image 12.png';
import Img02 from '@/public/Frame 11 (4).png'


function Contact() {
  return (
    <div className=''>


        <h2 className=''>Contact Us</h2>

        <div className=''>
            <form className=''>

              <input type="text" placeholder='Name' className='' />

              <div className='relative'>
              <input type="phone" placeholder='Phone Number' className='' required/>
              <span className="">*</span>
              </div>

              <div className='relative'>
              <input type="email" placeholder='E-mail' className='' required />
              <span className="">*</span>
              </div>

              <input type="text" placeholder='Interested In' className='' />
             
              <div className='relative'>
              <textarea placeholder='Message' className='' required></textarea>
              <span className="">*</span>
              </div>

            </form>
       

            <Image src={Img01} alt='contactImg' height={1000} width={1000} className=''/>

        </div>

        <br /> <br /> <br />

        <div>

          <Image src={Img02} alt='button' className=''/>

              
        </div>




    </div>
  )
}

export default Contact