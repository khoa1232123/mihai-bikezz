import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5'>
      <div className="container mx-auto">
        <div className="flex">
            <div className="">Text</div>
            <div className="">
                <Image src={'/hero_bike.png'} alt='hero' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
