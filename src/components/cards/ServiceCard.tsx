import React from 'react'
import Description from '../headings/Description'

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon?: React.ReactNode }) => {
    return (
        <div className='h-[350px]  flex flex-col gap-10 border-[1px] border-white/10 rounded-xl shadow-2xl p-5 transition-all  group cursor-pointer'>
            <div>
                {icon}
            </div>
            <div className='flex flex-col gap-2 '>
                <p className='text-white text-xl font-semibold transition-colors duration-300 group-hover:text-white/90'>{title}</p>
                <Description>{description}</Description>
            </div>
        </div>
    )
}

export default ServiceCard