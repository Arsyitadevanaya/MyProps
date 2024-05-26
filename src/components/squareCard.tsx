import React from 'react'

interface CardProps {
    children: React.ReactNode;
    isBig?: boolean;
}
const SquareCard: React.FC<CardProps> = ({ children, isBig=false }) => {
    const cardClass = isBig ? 'w-[23rem] rounded-lg p-2 border-4' :  'w-[10rem] h-[10rem] rounded-lg p-3 border-2 bg-[#FFF2D0] flex justify-center items-center'
    return (
        <div className={`border border-yellow-primary ${cardClass}`}>
            <div>{children}</div>
        </div>

    )
}

export default SquareCard