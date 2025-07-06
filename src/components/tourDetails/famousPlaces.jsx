import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
const famousPlaces = ({ places }) => {
  return (
    <div className="w-full md:w-1/2 px-10 py-6 bg-blue-200 rounded-lg shadow-md">
      <h3 className="font-bold mb-2">Famous Places</h3>
      <ul className="space-y-2">
        {places.map((place, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-800">
            <FaMapMarkerAlt className="text-red-600" />
            {place}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default famousPlaces