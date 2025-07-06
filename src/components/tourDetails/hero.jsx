import React from 'react'

function hero({ title, subtitle, bgImage }) {
    return (
        <div className='px-10'>
            <div className="mt-18  rounded-4xl relative h-[550px] w-full bg-cover bg-center" style={{ backgroundImage: `url(/${bgImage})` }}>
                <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-white rounded-4xl">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-xl">{subtitle}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 rounded">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default hero