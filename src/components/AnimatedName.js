"use client"

import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const AnimatedName = () => {
  return (
      <TypeAnimation
          sequence={[
              // Same substring at the start will only be typed out once, initially
              'Himanshu Hota',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Frontend developer',
              1000,

          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
      />
  )
}

export default AnimatedName


