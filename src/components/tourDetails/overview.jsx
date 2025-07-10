import React from 'react'

const overview = ({ description, intro }) => {
    return (
        <div className="mt-2 p-4 h-fit   flex flex-col items-center bg-white text-black px-15">
            <h2 className="text-2xl text-[#1A2B48] font-bold mb-2">Welcome to {intro} </h2>
            {description.map((paragraph, index) => (
                <p key={index} className="text-wrap px-10 py-2  leading-normal">
                    {paragraph}
                </p>
            ))}
        </div>
    )
}

export default overview