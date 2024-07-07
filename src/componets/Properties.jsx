import React from 'react'
import { VscSettings } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import { PROPERTIES } from '../constants/data'
import Item from "./Item"

const Properties = () => {
  return (
    <section className='max-padd-container'>
        <div className='max-padd-container bg-primary py-16 xl:py-28 rounded-3xl'>
            <span className='mediun-18'>Your Own Home Awaits!!</span>
            <h2 className='h2'>Live Your Dream Here</h2>
            <div className='flexBetween mt-8 mb-6'>
                <h5>
                    <span className='font-bold'>Showing 1-9</span>out of 3k properties
                </h5>
                <Link to={'/'} 
                className='bg-white text-3xl rounded-md h-10 w-10 p-2 border'>
                <VscSettings/></Link>
            </div>
                {/* container */}
                <Swiper
                    autoplay={{
                        delay:4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        600:{
                            slidesPerView:2,
                            spaceBetween:30,
                        },1124:{
                            slidesPerView:2,
                            spaceBetween:30,
                        },1300:{
                            slidesPerView:3,
                            spaceBetween:30,
                        },
                    }}
                    modules={[Autoplay]}
                    className='h-[488px] md:h-[533px] xl:h-[422px] mt-5'>
                        {
                    PROPERTIES.map((property)=>(
                            <SwiperSlide key={property.title}>
                                <Item property={property}/>
                            </SwiperSlide>

                ))
                        }
                </Swiper>
        </div>
    </section>
  )
}

export default Properties
