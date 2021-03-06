// Hero section with static content

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "../styles/components-styles/hero.scss"

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="heroImageWrapper">
          <div className="heroImage">
            <StaticImage
              src="../images/hero-img.jpg"
              alt="hero-img"
              objectFit="cover"
              width={600}
              height={420}
            />
          </div>

          <div className="square"></div>
        </div>

        <div className="container">
          <div className="square sm"></div>

          <div className="heroText">
            <h1 className="font-normal">Hi, Welcome!</h1>
            <h1>Grade is good at explaining what I'm doing</h1>
            <Link to="/">
              <button className="primary">Book an Appointment</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
