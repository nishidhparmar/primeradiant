"use client"
import React from 'react'
import Container from '../layouts/Container'
import Button from '../buttons/Button'
import DotVantaBackground from '../DotVantaBackground'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <DotVantaBackground className="h-screen">
            <Container className="h-screen flex flex-col relative z-10 pb-[88px]" >
                <div className='flex-1 flex flex-col items-center justify-center gap-4'>
                    <div className='flex flex-col text-white/80 text-center w-[800px] gap-4'>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-5xl font-semibold text-white'>Powering Your Ideas into Reality Smarter, Faster, Better</motion.div>
                        <p className='text-lg'>At Hyper Cube, we craft exceptional digital experiences from stunning UI/UX to scalable backend systems, cloud solutions, and AI-assisted development. We bring your vision to life with precision and speed.</p>
                        {/* <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-lg'
                        >
                            <TypingAnimation
                                text="At Hyper Cube, we craft exceptional digital experiences from stunning UI/UX to scalable backend systems, cloud solutions, and AI-assisted development. We bring your vision to life with precision and speed."
                                speed={50}
                                delay={1000}
                            />
                        </motion.p> */}
                    </div>
                    <div className='flex gap-4'>
                        <Link href='/#services'>
                            <Button>Our services</Button>
                        </Link>
                        <Button>Get in touch</Button>
                    </div>
                </div>
            </Container>
        </DotVantaBackground>
    )
}

export default HeroSection