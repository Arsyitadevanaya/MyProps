import { ProjectCard } from '@/components'
import React from 'react'
import Image from "next/image";

const Project = () => {
  return (
    <div data-aos="zoom-out-up">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 place-items-center'>
        <ProjectCard onClick={() => window.open('https://repairlectric.com/', '_blank')} banner='/assets/banner1.svg' title='RepairLectric Web Apps' >
          <div className='flex flex-row space-x-5'>
            <Image className="rounded-t-lg" src='/assets/php.svg' width={50} height={40} alt="" />
            <Image className="rounded-t-lg" src='/assets/bootstrap.svg' width={50} height={40} alt="" />
            <Image className="rounded-t-lg" src='/assets/mysql.svg' width={50} height={40} alt="" />
          </div>
        </ProjectCard>
        <ProjectCard onClick={() => window.open('https://play.google.com/store/apps/details?id=com.awan.budgetin','_blank')} banner='/assets/banner2.svg' title='BudgetIn Mobile Apps' ><div className='flex flex-row space-x-5'>
        
          <Image className="rounded-t-lg" src='/assets/flutter.svg' width={50} height={30} alt="" />
          <Image className="rounded-t-lg" src='/assets/git.svg' width={50} height={30} alt="" />
          <Image className="rounded-t-lg" src='/assets/scrum.svg' width={50} height={30} alt="" />
        </div></ProjectCard>
        <ProjectCard onClick={() => window.open('https://budgetin-1feiko5ln-arsyitas-projects.vercel.app/','_blank')} banner='/assets/banner3.svg' title='BudgetIn Web Information' >
          <div className='flex flex-row space-x-5'>
            <Image className="rounded-t-lg" src='/assets/nextjs.svg' width={50} height={30} alt="" />
            <Image className="rounded-t-lg" src='/assets/typescript.svg' width={50} height={30} alt="" />
            <Image className="rounded-t-lg" src='/assets/tailwind.svg' width={50} height={30} alt="" />
          </div>
        </ProjectCard>

      </div>
    </div>
  )
}

export default Project