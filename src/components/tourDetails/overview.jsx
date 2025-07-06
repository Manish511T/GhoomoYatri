import React from 'react'

const overview = ({ description }) => {
    return (
        <div className="mt-2 p-4 h-fit   flex flex-col items-center bg-white text-black px-15">
            <h2 className="text-2xl font-bold mb-2">OVERVIEW</h2>
            <p className='text-wrap' >{description}</p>
        </div>
    )
}

export default overview