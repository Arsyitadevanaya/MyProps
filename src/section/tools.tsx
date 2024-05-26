import { SquareCard } from '@/components'
import React from 'react'
import Image from "next/image";

const Tools = () => {
    return (
        <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 place-items-center ' data-aos="zoom-out-up">
            <SquareCard isBig={false} ><Image className="rounded-t-lg" src='/assets/reactjs.svg' width={100} height={100} alt="" /></SquareCard>
            <SquareCard isBig={false} ><Image className="rounded-t-lg" src='/assets/laravel.svg' width={100} height={100} alt="" /></SquareCard>
            <SquareCard isBig={false} ><Image className="rounded-t-lg" src='/assets/flutter.svg' width={100} height={100} alt="" /></SquareCard>
            <SquareCard isBig={false} ><Image className="rounded-t-lg" src='/assets/git.svg' width={100} height={100} alt="" /></SquareCard>
            <SquareCard isBig={false} ><Image className="rounded-t-lg" src='/assets/tailwind.svg' width={100} height={100} alt="" /></SquareCard>
        </div>
    )
}

export default Tools