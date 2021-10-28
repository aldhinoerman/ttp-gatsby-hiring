// Kelaridis Homepage using default layout

import * as React from "react"
import Hero from "../components/hero"
import useWindowSize from "../components/useWindowSize"

import Layout from "../components/layout"
import Number from "../components/number"
import Seo from "../components/seo"

const IndexPage = () => {
  const { width } = useWindowSize() // Define screen size eventlistener

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <Hero />
        <Number />

        {width > 720 && <div className="home square sm"></div>}
      </Layout>
    </>
  )
}

export default IndexPage
