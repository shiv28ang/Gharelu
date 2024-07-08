import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='max-padd-container pt-[99px]'>
      <div className='max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3x1'>
        <div className='relative top-32 xs:top-52'>
          <span className='medium-18'>Welcome To GHARelu</span>
          <h1 className='h1 capitalize max-w-[40rem]'>Discover Your Dream Home in India</h1>
          <p className='my-10 max-w-[33rem]'>
          At Gharelu, we believe that finding the perfect home should be a delightful and seamless experience. Our platform is dedicated to helping you discover and purchase beautiful homes across India, tailored to meet your unique preferences and needs.
          </p>
          {/* buttons */}
          <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-x1'>
            <div className='text-center regular-14 leading-tight pl-5'>
              <h5 className='uppercase font-bold'>10% Off</h5>
              <p className='regular-14'>On All Properties</p>
            </div>
            <Link to={"/listing"} className='btn-secondary rounded-xl flexCenter !py-5'>
            Shop Now</Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
