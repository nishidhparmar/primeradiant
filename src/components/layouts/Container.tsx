import { cn } from '@/utils/cn'
import React from 'react'

const Container = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
    return (
        <div className={cn("container mx-auto w-full h-full px-4 md:px-0", className)} id={id}>
            {children}
        </div>
    )
}

export default Container