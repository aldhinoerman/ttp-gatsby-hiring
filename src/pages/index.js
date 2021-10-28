// Kelaridis Homepage using default layout

import * as React from "react"
import Hero from "../components/hero"
import HeroDesktop from "../components/heroDesktop"
import Media from "react-media"

import Layout from "../components/layout"
import Number from "../components/number"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Seo title="Home" />

        <Media queries={{ medium: { minWidth: 720 } }}>
          {matches => (matches.medium ? <HeroDesktop /> : <Hero />)}
        </Media>
        <Number />

        <Media
          query="(min-width: 720px"
          render={() => <div className="home square sm"></div>}
        />
      </Layout>
    </>
  )
}

export default IndexPage
