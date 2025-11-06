"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInTop = ({children}:{children: React.ReactNode}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return(
        <div ref={ref} className={`${inView ? 'fade-in-top' : 'opacity-0'}`}>
            {children}
        </div>
    );
}

export default FadeInTop;