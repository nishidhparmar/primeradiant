"use client"
import React from 'react'
import Container from '../layouts/Container'
import Heading from '../headings/Heading'
import ServiceCard from '../cards/ServiceCard'
import AnimatedIcon from '../AnimatedIcon'
import UIUXIcon from '@/assets/icons/animated/ui-ux.json';
import WebIcon from '@/assets/icons/animated/web.json';
import BackendIcon from '@/assets/icons/animated/backend.json';
import CloudIcon from '@/assets/icons/animated/cloud.json';
import AIAssistantIcon from '@/assets/icons/animated/ai.json';
import { motion } from 'framer-motion';
import CustomerIcon from '@/assets/icons/animated/customers.json';

const ServicesSection = () => {
    const services = [
        {
            icon: <AnimatedIcon icon={UIUXIcon} size={80} />,
            title: 'UI/UX Design',
            description: 'We create intuitive, user-focused designs that engage and delight your audience. From wireframes to high-fidelity prototypes, our designs blend aesthetics with usability.'
        },
        {
            icon: <AnimatedIcon icon={WebIcon} size={80} />,
            title: 'Frontend Development',
            description: 'Modern, responsive, and lightning-fast web applications built with the latest frameworks like React, Next.js, and Vue.js.'
        },
        {
            icon: <AnimatedIcon icon={BackendIcon} size={80} />,
            title: 'Backend Development',
            description: 'Secure, scalable, and high-performance backends powered by Node.js, Python, and cloud-native architectures.'
        },
        {
            icon: <AnimatedIcon icon={CloudIcon} size={80} />,
            title: 'Cloud Solutions',
            description: 'Deploy, scale, and manage your applications with AWS, Azure, and GCP — ensuring security and uptime at scale.'
        },
        {
            icon: <AnimatedIcon icon={AIAssistantIcon} size={80} />,
            title: 'AI-Assisted Coding',
            description: 'Leveraging AI to speed up development, optimize code, and bring innovative AI-driven features to your product.'
        },
        {
            icon: <AnimatedIcon icon={CustomerIcon} size={80} />,
            title: 'Digital Marketing & Growth',
            description: 'We help your product reach the right audience through targeted SEO, paid ads, social media campaigns, and content marketing — driving visibility, engagement, and conversions.'
        },


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

        <Container className='py-20 flex flex-col gap-10'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Heading>What We Do</Heading>
            </motion.div>
            <motion.div
                className='grid grid-cols-3 gap-4'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                    >
                        <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </Container>
    )
}

export default ServicesSection