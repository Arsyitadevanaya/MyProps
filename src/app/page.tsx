'use client'

import { Bits } from "@/components";
import { Hero, Softskill, Project, Tools, Footer } from "@/section";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex relative overflow-hidden max-w-screen-xl  flex-wrap min-h-screen flex-col items-center justify-between p-4 lg:px-16 lg:pt-8 ">
      <div className=" w-full items-center mt-20 " id="home">
        < Hero />
        <div className='flex flex-row justify-start md:justify-end items-center space-x-6 mr-10 mt-10' data-aos="fade-up-left">
          <div className='font-semibold text-xs' >Find Me On</div>
          <Bits />
        </div>
        <div className="mt-20" id="project" >
          <h1 className="absolute -z-10 lg:text-8xl md:text-7xl text-5xl font-black outline-text tracking-[.25em] -left-10" data-aos="fade-right">MY PROJECT</h1>
          <div className="z-100 lg:py-10 md:py-6 py-3 font-black text-2xl text-center outline-text2" data-aos="zoom-in-down">My Project</div>
          <Project />
        </div>
        <div className="mt-24" id="softskill">
          <h1 className="absolute -z-10 lg:text-8xl md:text-7xl text-5xl font-black outline-text tracking-[.25em] -right-10" data-aos="fade-left">Why Hire Me</h1>
          <div className="z-100 lg:py-10 md:py-6 py-3 font-black text-2xl text-center outline-text2" data-aos="zoom-in-down">Why Hire Me</div>
          <Softskill />
        </div>
        <div className="mt-20" id="tools">
          <h1 className="absolute -z-10 lg:text-8xl md:text-7xl -left-28 md:-left-10 lg:left-16  text-5xl font-black outline-text tracking-[.25em]" data-aos="zoom-in-down">Skills And Tools</h1>
          <div className="z-100 lg:py-10 md:py-6 py-3 font-black text-2xl text-center outline-text2" data-aos="zoom-in-down">Skills And Tools</div>
          <Tools />
        </div>
        <div className="mt-32">
          <div className="w-screen h-[7rem] absolute bottom-0 left-0 bg-[#fff7e1] -z-10"></div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
