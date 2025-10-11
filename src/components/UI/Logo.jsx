import React from 'react'

export default function Logo({ colorClass = 'text-white' }) {
  return (
    <div>
      <h1
        className={`font-great-vibes text-xl lg:text-3xl leading-[1.2] text-center ${colorClass}`}
      >
        The Concourse Oxford <br /> Luxury Collection
      </h1>
    </div>
  )
}
