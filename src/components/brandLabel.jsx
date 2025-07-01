import React from 'react'

const brands = [
  'MakeMyTrip_Logo.png',
  'Booking-Logo.png',
  'airiq-logo.png',
  'EASEMYTRIP.png',
  'seatseller.png',
  'zingbus-name-logo.webp',
];
const brandLabel = () => {
  return (
     <div className="w-full overflow-hidden bg-white py-4 mt-12">
      <div className="slider-track flex animate-loop-scroll">
        {[...brands, ...brands, ...brands].map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex-shrink-0 grayscale opacity-60 hover:opacity-100 transition duration-300"
          >
            <img src={logo} alt="brand" className="h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default brandLabel