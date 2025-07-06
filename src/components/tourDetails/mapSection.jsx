import React from 'react'

const mapSection = ({ url }) => {
    return (
        <div className="w-full md:w-1/2  bg-blue-300 rounded-lg shadow-md">
            <iframe
                src={url}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    )
}

export default mapSection