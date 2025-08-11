"use client"
import React from 'react'
import Container from '../layouts/Container'
import Heading from '../headings/Heading'
import HorizontalCard from '../cards/HorizontalCard'
import AnimatedIcon from '../AnimatedIcon'
import ClockIcon from '@/assets/icons/animated/clock.json';
import SolutionIcon from '@/assets/icons/animated/solution.json';
import CodeIcon from '@/assets/icons/animated/code.json';
import CommunicationIcon from '@/assets/icons/animated/communication.json';
import DeploymentIcon from '@/assets/icons/animated/profit.json';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const WhyChooseUsSection = () => {
    const reasons = [
        {
            icon: <AnimatedIcon icon={ClockIcon} size={50} />,
            text: 'Faster Delivery with AI-assisted development'
        },
        {
            icon: <AnimatedIcon icon={SolutionIcon} size={50} />,
            text: 'Tailored Solutions — built around your business goals'
        },
        {
            icon: <AnimatedIcon icon={CodeIcon} size={50} />,
            text: 'Secure & Scalable architectures'
        },
        {
            icon: <AnimatedIcon icon={CommunicationIcon} size={50} />,
            text: 'Transparent Communication throughout the project'
        },
        {
            icon: <AnimatedIcon icon={DeploymentIcon} size={50} />,
            text: 'End-to-End Expertise from design to deployment'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <Container className='py-20 flex flex-col items-center gap-10'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Heading>Why Businesses Trust Primeradiant</Heading>
            </motion.div>
            <div className='flex  gap-4 w-full'>
                <div className='w-1/2'>
                    <DotLottieReact
                        src="/pyramid.lottie"
                        loop
                        autoplay
                    />

                </div>
                <div className='w-1/2'>
                    <motion.div
                        className='flex flex-col w-full gap-4'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                            >
                                <HorizontalCard icon={reason.icon}>
                                    {reason.text}
                                </HorizontalCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </Container>
    )
}

export default WhyChooseUsSection