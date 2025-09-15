import Logo from '@/assets/icons/Logo'
import { cn } from '@/utils/cn'
// import Link from 'next/link'
import React from 'react'
import Container from '../layouts/Container'

const Header = () => {
    return (
        <div className='top-0 left-0 sticky z-50 bg-rich-black w-full'>
            <Container>
                <div className={cn('flex items-center justify-between py-6 w-full z-50')}>
                    <p className='text-white text-xl flex items-center gap-2'><Logo className='w-10 h-10' />Hyper Cube</p>
                    {/* <div className='flex items-center gap-4 text-white'>
                        <Link className='hover:text-primary transition-all duration-300' href="/">Home</Link>
                        <Link className='hover:text-primary transition-all duration-300' href="/about">About</Link>
                        <Link className='hover:text-primary transition-all duration-300' href="/contact">Contact</Link>
                    </div> */}
                </div>
            </Container>
        </div>


    )
}

export default Header