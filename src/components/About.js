import React from 'react'

import aboutImg from '../assets/img/about.png'

function About() {
  return (
    <section className="about section container" id="about">
        <div className="about__container grid">
            <img src={aboutImg} alt="" className="about__img" />
            <div className="about__data">
            <h2 className="section__title about__title">
                Who we really are &amp; <br /> why choose us
            </h2>
            <p className="about__description">
                We have over 4000+ unbiased reviews and our customers trust our plant
                process and delivery service every time
            </p>
            <div className="about__details">
                <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                We always deliver on time.
                </p>
                <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                We give you guides to protect and care for your plants.
                </p>
                <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                We always come over for a check-up after sale.
                </p>
                <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                100% money back guaranteed.
                </p>
            </div>
            <a href="#" className="button--link button--flex">
                Shop Now <i className="ri-arrow-right-down-line button__icon" />
            </a>
            </div>
        </div>
        </section>

  )
}

export default About