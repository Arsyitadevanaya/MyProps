import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Bits = () => {
    return (
        <ul className='flex flex-row justify-between space-x-6'>
            <li>
                <Link href="https://github.com/Arsyitadevanaya" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <button >
                            <div><Image src="/assets/github.svg" alt={""} width={40} height={40} /></div>
                        </button>
                    </a>
                </Link>

            </li>
            <li>
                <Link href="https://www.instagram.com/arsyita_d/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <button >
                            <div><Image src="/assets/instagram.svg" alt={""} width={40} height={40} /></div>
                        </button>
                    </a>
                </Link>

            </li>
            <li>
                <Link href="https://wa.me/6285171620044" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <button >
                            <div><Image src="/assets/whatsapp.svg" alt={""} width={40} height={40} /></div>
                        </button>
                    </a>
                </Link>

            </li>
            <li>
                <Link href="https://www.linkedin.com/in/arsyita-devanaya/" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <button >
                            <div><Image src="/assets/linkedin.svg" alt={""} width={40} height={40} /></div>
                        </button>
                    </a>
                </Link>
            </li>
        </ul >
    )
}

export default Bits