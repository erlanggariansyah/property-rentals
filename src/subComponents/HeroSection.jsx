import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <section id='hero'>
        <h1>BE OUR GUEST</h1>
        <p>LIVE LIKE A KING IN OUR BEST HOUSES</p>
        <p>
          SEE FROM OUR LOVELY GUESTS{" "}
          <Link 
            to="/notes" 
            style={{ all: 'unset', cursor: 'pointer', color: "black" }}
          >
            HERE
          </Link>
        </p>
      </section>
    </>
  )
}

export default HeroSection
