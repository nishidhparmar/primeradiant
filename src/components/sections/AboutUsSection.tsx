import React from 'react'
import Container from '../layouts/Container'
import Heading from '../headings/Heading'
import Description from '../headings/Description'

const AboutUsSection = () => {
    return (
        <Container className='py-20 flex flex-col items-center gap-10 w-[900px]' >
            <Heading>Who We Are</Heading>
            <div className='flex flex-col gap-4 '>
                <Description className='text-center'>Hyper Cube is a full-stack software development company dedicated to building high-quality, future-proof digital products. Our team blends creativity, engineering excellence, and AI-powered development to deliver solutions that are not just functional but impactful.</Description>
                <Description className='text-center'>Whether it’s a sleek user interface, a robust backend, or an AI-driven innovation, we combine expertise with modern technology to help businesses grow and scale faster.
                </Description>
            </div>

        </Container>
    )
}

export default AboutUsSection