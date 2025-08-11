"use client"
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import React from 'react'

const Heading = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.p
            className={cn('text-white text-4xl font-semibold text-center w-full', className)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

        >
            {children}
        </motion.p>
    )
}

export default Heading