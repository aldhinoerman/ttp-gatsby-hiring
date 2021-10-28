// Hero section for desktop view

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "../styles/components-styles/hero.scss"
import "../styles/components-styles/heroDesktop.scss"

const HeroDesktop = () => {
  return (
    <section id="heroDesktop">
      <div className="container">
        <div className="heroText">
          <h1 className="font-normal">Hi, Welcome!</h1>
          <h1>Grade is good at explaining what I'm doing</h1>
          <Link to="/">
            <button className="primary">Book an Appointment</button>
          </Link>
        </div>
      </div>

      <div className="heroWrapperDesktop">
        <div className="heroImageDesktop">
          <StaticImage
            src="../images/hero-img.jpg"
            alt="hero-img"
            objectFit="cover"
            width={680}
            height={420}
          />
        </div>
      </div>

      <div className="square"></div>
    </section>
  )
}

export default HeroDesktop
