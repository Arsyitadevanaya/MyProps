import React from 'react'
import Image from "next/image";

interface softskillProps {
    imageskill?: string,
    title?: string,
    subtitle?: string
}

const SoftskillCard: React.FC<softskillProps> = ({ imageskill, title, subtitle }) => {
    return (
        <div className='flex flex-col bg-white w-[16rem] rounded-lg p-5'>
            {imageskill && (
                <Image
                    className="rounded-t-lg"
                    src={imageskill}
                    width={250}
                    height={200}
                    alt={title || 'imageskill'}
                />
            )}
            <div className='text-center font-medium text-lg text-yellow-primary my-3'>{title}</div>
            <div className='font-normal text-sm text-justify'>{subtitle}</div>
        </div>
    )
}

export default SoftskillCard