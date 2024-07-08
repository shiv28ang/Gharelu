import React from 'react'
import { Link } from 'react-router-dom'
import { FOOTER_LINKS } from '../constants/data'

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Explore real estates opportunity with us?</h3>
        <p >
          Discover a wide range of properties tailored
          to your needs. Whether you're looking for your
          dream home, an investment property, or commercial
          real estate, our team of experts is here to guide
          you through every step of the process. Join us and
          unlock the potential of your real estate journey today!
        </p>
        <hr/>
        {/* Container */}
        <div>
          <div>
            <Link to={'/'}>
            <span className="font-[900] text-[24px]">
                  GHAR<span className="font-[600] medium-20">elu
                  </span>
                </span>
            </Link>
            <p>
                At Gharelu, we provide you with the best real 
                estate options to fit your lifestyle and budget.
                From finding the perfect home to making smart investments in 
                commercial properties, our dedicated team is here to assist you.
                Start your journey with Gharelu and discover the perfect place to call home.
            </p>
            <div className="flexBetween p1-6 h-[3.3rem]
            bg-white w-full max-w-[366px] rounded-full
            ring-1 ring-slate-500/5">
              <input type="email" placeholder="Enter Your Email-Id"
              className="bg-transparent border-none outline-none"/>
              <button className="btn-secondary rounded-full relative right-[0.33rem]">
                Subscribe
                </button>
            </div>
          </div>
          <div>
              {
              FOOTER_LINKS.map((col)=>(
                <FooterColumn key={col.title } title={col.title}>
                  <ul>
                    {col.links.map((link)=>(
                      <Link to={'/'} key={link}>{link}</Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const FooterColumn=({title,children})=>
{
  return (
    <div>
    <h4>{title}</h4>
    {children}
    </div>
  )
}