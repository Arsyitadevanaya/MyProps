import { useEffect, useState } from "react";

import React from 'react'

const ScrollDetector = () => {
    const[scrolling, setScrolling]=useState(false);
    const[scrollingDown, setScrollingDown]=useState(false);
    const[scrollingTop, setScrollingTop]=useState(0);
    useEffect(()=>{
        const handleScroll=()=>{
            const currentScrollTop=window.scrollY;
            setScrollingDown(currentScrollTop>scrollingTop);

            setScrollingTop(currentScrollTop);
            setScrolling(scrollingTop>50);
        };

        window.addEventListener('scroll', handleScroll);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        };

    },[scrollingTop])
  return {scrolling, scrollingDown, scrollingTop}
}

export default ScrollDetector