import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section id='hero'>
        <h1>BE OUR GUEST</h1>
        <p>LIVE LIKE A KING IN OUR BEST HOUSES</p>
        <p>
          SEE FROM OUR LOVELY GUESTS{' '}
          <a style={{ all: 'unset', cursor: 'pointer', color: "black" }} href='/notes'>
            HERE
          </a>
        </p>
      </section>
    </>
  )
}

export default HeroSection
