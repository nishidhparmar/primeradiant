import { cn } from '@/utils/cn'
import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("container mx-auto w-full h-full px-4 md:px-0", className)}>
            {children}
        </div>
    )
}

export default Container