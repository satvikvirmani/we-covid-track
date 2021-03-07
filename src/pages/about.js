import React from "react"
import "./index.scss"
import AboutApp from "../components/AboutApp";
import SEO from '../components/seo'

export default function About() {
  return ( 
    <React.Fragment>
      <SEO />
      <AboutApp />
    </React.Fragment>
  )
}