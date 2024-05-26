import { SoftskillCard } from '@/components'
import React from 'react'

const Softskill = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center items-start' data-aos="zoom-out-up">
            <SoftskillCard imageskill='/assets/softskill1.svg' title='Workaholic' subtitle='I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive.' />
            <SoftskillCard imageskill='/assets/softskill2.svg' title='Communicative' subtitle='I’m a kind of person who can convey a message well to the receiver. I can communicate effectively with the team.' />
            <SoftskillCard imageskill='/assets/softskill3.svg' title='Cooperative' subtitle='Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal.' />
            <SoftskillCard imageskill='/assets/softskill4.svg' title='Perfectionist' subtitle='I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.' />
        </div>
    )
}

export default Softskill