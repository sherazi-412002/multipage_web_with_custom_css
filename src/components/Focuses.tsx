import React from 'react';
import Image from 'next/image';
import Img01 from '@/public/1.png';
import Img02 from '@/public/2.png';


function Focuses() {
  return (
    <div className='focusesSection'>

        <h2 className='focusSecHeading'>Main Focus <br className='breakdownForSmall' />/Mission Statement</h2>

        <div className='focusesContentWrapper'>

            <div className='contentBox'>

                <Image src={Img01} alt='01' height={1000} width={1000} className='focusesImg'/>
                <p className='focusesPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>

            </div>

            <div className='contentBox'>

                <Image src={Img02} alt='02' height={1000} width={1000} className='focusesImg'/>
                <p className='focusesPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, 
                    magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>



        </div>




    
    </div>
  )
}

export default Focuses