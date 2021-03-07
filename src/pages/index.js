import React from "react"
import "./index.scss"
import HomeApp from "../components/HomeApp";
import SEO from '../components/seo'

export default function Home() {
  return (
    <React.Fragment>
      <SEO />
      <HomeApp />
    </React.Fragment>
  )
}