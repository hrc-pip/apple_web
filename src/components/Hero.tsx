'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '@/utils'

const Hero = () => {
        
    const [videoSrc, setvideoSrc] = useState(smallHeroVideo);

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
            setvideoSrc(smallHeroVideo)
        } else {
            setvideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        handleVideoSrcSet()

        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', {
            delay: 1,
            duration: 3,
            opacity: 1,
            y: 0,
            ease: 'power4.out'
        })
        gsap.to('#cta', {
            opacity: 1,
            y:-50,
            delay: 1
        })
    }, [])
    
    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id="hero" className='hero-title'>iPhone 15 Pro</p>
                <div className='md:w-5/6  w-3/4'>
                    <video className="pointer-events-none w-full" autoPlay muted playsInline={true} key={videoSrc} loop>
                        <source src={videoSrc} type='video/mp4'/>
                    </video>
                </div>
            </div>

            <div id='cta' className='flex flex-col opacity-0 items-center translate-y-20'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        </section>
    )
}

export default Hero