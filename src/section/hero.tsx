import { Button } from '@/components'
import React from 'react'
import Image from "next/image";


const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className='justify-items-start ' data-aos="fade-right" >
                <div className='font-semibold text-xl'>Hello</div>
                <div className='font-semibold text-4xl leading-loose'>I am <span className='text-yellow-primary'>Arsyita Devanaya</span></div>
                <div className='font-medium text-sm'>Frontend Enthusiast</div>
                <hr className='w-1/6 h-1 bg-black mt-7 mb-2' />
                <div className='font-normal text-sm text-justify'>I am a person who has a keen interest in building website interfaces. I believe that presenting an attractive website interface is very important in building product branding. To create a good website, I focus on the right composition and visual decoration details to make it look more professional. Currently, I am developing skills in website development as a Frontend for dynamic websites.</div>
                <div className='grid grid-cols-2 max-w-xs mt-8 '>
                    <div>
                        <Button onClick={() => { }} isFull={true}  >Download CV</Button>
                    </div>
                    <div>
                        <Button onClick={() => window.open('https://www.linkedin.com/in/arsyita-devanaya/', '_blank')} isFull={false}>
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden hidden md:block'>
                <div className='absolute bottom-0 left-48' data-aos="zoom-in-up"><Image src="/assets/decor1.svg" alt={""} width={230} height={320} /></div>
                <div className='absolute top-42 right-32' data-aos="flip-left"><Image src="/assets/decor2.svg" alt={""} width={80} height={80} /></div>
                <div className='absolute bottom-0 right-32' data-aos="fade-left"><Image src="/assets/myPic.png" alt={""} width={251} height={358} /></div>
                <div className='absolute top-42 right-32' data-aos="flip-left"><Image src="/assets/decor3.svg" alt={""} width={30} height={30} /></div>
                <div className='absolute top-24 right-16' data-aos="flip-left"><Image src="/assets/decor4.svg" alt={""} width={30} height={30} /></div>

            </div>
        </div>
    )
}

export default Hero