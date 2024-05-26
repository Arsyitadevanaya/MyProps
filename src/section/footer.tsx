import { Bits } from '@/components'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-transparant pb-0">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
                <div className='font-semibold text-xs mr-3'>Find Me On</div>
                <Bits />
            </div>
        </footer>
    )
}

export default Footer