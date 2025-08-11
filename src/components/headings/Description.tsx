import { cn } from '@/utils/cn'
import React from 'react'

const Description = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <p className={cn('text-white/60 text-lg text-left', className)}>{children}</p>
    )
}

export default Description