import React from 'react'
import SquareCard from './squareCard'
import Button from './button';
import Image from "next/image";

interface ProjectCardProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title?: string;
    subtitle?: string;
    banner?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ onClick, title = '', children, banner }) => {
    const firstWord = title.split(' ')[0];
    const remainingWords = title.split(' ').slice(1).join(' ');
    return (
        <SquareCard isBig={true}>
            {banner && (
                <Image
                    className="rounded-t-lg"
                    src={banner}
                    width={350}
                    height={200} // Adjusted height for a more realistic aspect ratio
                    alt={title} // Provided alt text based on the title
                />
            )}            <div className="pt-3 flex flex-col justify-between  h-[7rem]">
                <a href="#">
                    <h5 className="mb-5 font-semibold text-xl tracking-tight text-gray-900 dark:text-white">
                        <span className="text-yellow-primary">{firstWord}</span> {remainingWords}
                    </h5>
                </a>

                <div className='flex flex-col-2 justify-between items-center'>

                    <Button onClick={onClick} isFull={false} >View Details</Button>
                    <div>{children}</div>
                </div>
            </div>
        </SquareCard>
    )
}

export default ProjectCard