
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isFull?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isFull=false, }) => {
    const bgClass = isFull
        ? 'bg-yellow-primary text-dark hover:bg-[#C48C00] hover:text-white'
        : 'bg-transparent text-yellow-primary ring-2 ring-yellow-primary hover:bg-yellow-primary hover:text-white';
    return (
        <button type="button" onClick={onClick} className={`${bgClass} font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 $`}>{children}</button>

    );
};

export default Button;
