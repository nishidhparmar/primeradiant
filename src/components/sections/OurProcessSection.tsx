"use client"
import React from 'react'
import Container from '../layouts/Container'
import Heading from '../headings/Heading'
import Description from '../headings/Description'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const OurProcessSection = () => {
    const timelineItems = [
        {
            title: "Discovery & Strategy",
            description: "Understanding your goals, challenges, and vision."
        },
        {
            title: "Design & Prototyping",
            description: "Crafting wireframes, UI kits, and interactive prototypes."
        },
        {
            title: "Development",
            description: "Building your product with clean, maintainable code."
        },
        {
            title: "Testing & Optimization",
            description: "Ensuring performance, security, and smooth user experience."
        },
        {
            title: "Launch & Support",
            description: "Deploying your product and providing continuous improvements."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <Container className='py-20 flex flex-col gap-10'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Heading>How We Work</Heading>
            </motion.div>
            <div className='flex w-full'>
                <div className='w-1/2'>
                    <motion.ol
                        className="relative border-s border-primary"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        {timelineItems.map((item, index) => (
                            <motion.li
                                key={index}
                                className="mb-10 ms-4"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.1 + index * 0.2,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                />
                                <motion.h3
                                    className="text-lg font-semibold text-gray-900 dark:text-white"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + index * 0.2
                                    }}
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.2
                                    }}
                                >
                                    <Description>{item.description}</Description>
                                </motion.div>
                            </motion.li>
                        ))}
                    </motion.ol>
                </div>
                <motion.div
                    className='w-1/2'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <DotLottieReact
                        src="/globe.lottie"
                        loop
                        autoplay
                    />
                </motion.div>
            </div>
        </Container>
    )
}

export default OurProcessSection