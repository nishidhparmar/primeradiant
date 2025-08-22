import React from 'react'
import Description from '../headings/Description'

const HorizontalCard = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => {
    return (
        <div className='border-b-[1px] border-primary/20 w-full rounded-xl p-4 flex items-center gap-4'>
            {icon}
            <Description>
                {children}
            </Description>
        </div>
    )
}

export default HorizontalCard