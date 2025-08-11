"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
    text: string
    speed?: number
    delay?: number
    className?: string
    onComplete?: () => void
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
    text,
    speed = 50,
    delay = 0,
    className = '',
    onComplete
}) => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTyping, setIsTyping] = useState(false)

    useEffect(() => {
        if (delay > 0) {
            const timer = setTimeout(() => {
                setIsTyping(true)
            }, delay)
            return () => clearTimeout(timer)
        } else {
            setIsTyping(true)
        }
    }, [delay])

    useEffect(() => {
        if (!isTyping) return

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, speed)

            return () => clearTimeout(timer)
        } else {
            setIsTyping(false)
            onComplete?.()
        }
    }, [currentIndex, text, speed, isTyping, onComplete])

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={className}
        >
            {displayedText}
            {isTyping && currentIndex < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-current ml-1"
                />
            )}
        </motion.span>
    )
}

export default TypingAnimation
