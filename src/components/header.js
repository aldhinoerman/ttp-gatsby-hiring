// Header component with static content

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { OutsideClick } from "./outsideClick"

import "../styles/components-styles/header.scss"

function Header() {
  const toggleRef = React.useRef(null) // Toggle Ref
  const [isActive, setIsActive] = OutsideClick(toggleRef, false) // outsideClick useState define
  const onClick = () => setIsActive(!isActive) // OutsideClick when Clicked

  return (
    <header className="container">
      <nav className="navbar f-center">
        <div className="nav-brand">
          <Link to="/">
            <StaticImage
              src="../images/Logo.png"
              alt="logo"
              placeholder="blurred"
              width={150}
              height={75}
            />
          </Link>
        </div>

        <ul
          className={`menu f-center ${isActive ? "show" : ""}`}
          ref={toggleRef}
        >
          <li className="item">
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li className="item">
            <Link to="/about" activeClassName="active">
              About Me
            </Link>
          </li>
          <li className="item">
            <Link to="/freebies" activeClassName="active">
              Freebies
            </Link>
          </li>
          <li className="item">
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
          </li>
          <li className="item">
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          role="button"
          tabIndex="0"
          onClick={onClick}
          onKeyDown={onClick}
          ref={toggleRef}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  )
}

export default Header
