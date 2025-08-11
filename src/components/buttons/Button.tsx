import { cn } from '@/utils/cn'
import React from 'react'

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
    return (
        <button
            className={cn(
                'before:ease relative overflow-hidden border border-primary bg-primary text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40 px-4 py-2 rounded-md cursor-pointer',
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </button>
    )
}

export default Button