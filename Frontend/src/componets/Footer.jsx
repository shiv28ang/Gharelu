import React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO, FOOTER_LINKS } from '../constants/data'


const FooterColumn=({title,children})=>
  {
    return (
      <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
      </div>
    )
  }


const Footer = () => {
  return (
    <footer className='max-padd-container mb-4'>
      <div className='max-padd-container bg-primary rounded-tr-3xl
      pt-12 xl:pt-20 pb-8'>
        <h3 className='h3'>Explore real estates opportunity with us?</h3>
        <p >
          Discover a wide range of properties tailored
          to your needs. Whether you're looking for your
          dream home, an investment property, or commercial
          real estate, our team of experts is here to guide
          you through every step of the process. Join us and
          unlock the potential of your real estate journey today!
        </p>
        <hr className='my-8 bg-slate-900/30 h-[2px]'/>
        {/* Container */}
        <div className='flex justify between flex-wrap gap-2'>
          <div className='max-w-sm'>
            <Link to={'/'} className='flex -items-center gap-x-2'>
            <span className="font-[900] text-[24px]">
                  GHAR<span className="font-[600] medium-20">elu
                  </span>
                </span>
            </Link>
            <p className='py-4'>
                At Gharelu, we provide you with the best real 
                estate options to fit your lifestyle and budget.
                From finding the perfect home to making smart investments in 
                commercial properties, our dedicated team is here to assist you.
                Start your journey with Gharelu and discover the perfect place to call home.
            </p>
            <div className="flexBetween p1-6 h-[3.3rem]
            bg-white w-full max-w-[366px] rounded-full
            ring-1 ring-slate-500/5">
              <input type="email" placeholder="  Enter Your Email-Id  "
              className="bg-transparent border-none outline-none placeholder:text-xs gap-4 "/>
              <button className="btn-secondary rounded-full relative right-[0.33rem]">
                Subscribe
                </button>
            </div>
          </div>
          <div className='flex justify-between flex-wrap gap-8'>
              {
              FOOTER_LINKS.map((col)=>(
                <FooterColumn key={col.title } title={col.title}>
                  <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                    {col.links.map((link)=>(
                      <Link to={'/'} key={link}>{link}</Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
              <div className='flex flex-col gap-5'>
                <FooterColumn title={CONTACT_INFO.title}>
                  {
                    CONTACT_INFO.links.map((link)=>(
                      <Link to={'/'} key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                        <p>{link.label}</p> <p>{link.value}</p>
                      </Link>
                    ))}
                </FooterColumn>
              </div>

            </div>
          </div>
      </div>
      <p className='text-white bg-tertiary medium-14 py-2 px-8
      rounded-b-3xl flexBetween'>
        <span>2024 Gharelu</span>All Rights Reserved</p>
    </footer>
  );
};

export default Footer

