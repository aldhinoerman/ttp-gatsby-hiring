// Number section using static content

import React from "react"
import "../styles/components-styles/number.scss"

const Number = () => {
  return (
    <section id="number">
      <div className="container">
        <div className="grid col-3 text-center">
          <div>
            <h1>20</h1>
            <p>Years of experience</p>
          </div>
          <div>
            <h1>4000+</h1>
            <p>Happy Cases</p>
          </div>
          <div>
            <h1>15</h1>
            <p>Awards achived</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Number
