import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/button'

const Hero = () => {
  return (
    <section className='relative pt-36 pb-40 max-lg:pt-28 max-lg:pb-36 max-md:pt-24 max-md:pb-32'>
        <Element name="hero">
            <div className='container'>
                <div className='relative z-2 max-w-512 max-lg:max-w-388 flex flex-col'>
                    <div className='caption uppercase max-md:text-sm text-p3 max-2xl:text-xl'>
                        The taste of Madurai
                    </div>
                    <h1 className='mb-6 h1 text-p3 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-10 max-md:text-5xl max-md;leading-12'>
                        MADURAI BUN PAROTTA
                    </h1>
                    <LinkScroll className="mb-5" to="features" offset={-100} spy smooth>
                        <Button icon="/images/zap.svg">menu</Button>
                    </LinkScroll>
                    <LinkScroll to="order" offset={-100} spy smooth>
                        <Button icon="/images/zap.svg">Location</Button>
                    </LinkScroll>
                    
                </div>

                <div className='absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res'>
                    <img
                        src="/clover.jpg"
                        className='size-1230 max-lg:h-auto'
                        alt='hero'
                    />
                </div>

            </div>
        </Element>
    </section>
  )
}

export default Hero