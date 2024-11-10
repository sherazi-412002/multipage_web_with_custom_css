import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/1.png';
import Img02 from '@/public/2.png';


function Focuses() {
  return (
    <div className=''>

        <h2 className=''>Main Focus <br className='' />/Mission Statement</h2>

        <div className=''>

            <div className=''>

                <Image src={Img01} alt='01' height={1000} width={1000} className=''/>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>

            </div>

            <div className=''>

                <Image src={Img02} alt='02' height={1000} width={1000} className=''/>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, 
                    magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>



        </div>




    
    </div>
  )
}

export default Focuses