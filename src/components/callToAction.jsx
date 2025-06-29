import React from 'react'

function callToAction() {
    return (
        <>
            {/* === CTA (Call to Action) Section === */}
            <div className="mt-16 px-10 pb-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-xl max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-12 px-6 text-center md:text-left">

                    {/* Left Text Content */}
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Ready to explore your next destination?</h2>
                        <p className="text-lg text-emerald-100">Contact us for personalized domestic tour packages.</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <a href="tel:+919876543210" className="bg-white text-emerald-600 font-semibold px-6 py-2 rounded-full hover:bg-emerald-100 transition">
                            📞 +91 7065163364
                        </a>

                        <a href="https://wa.me/917065163364" target="_blank" rel="noreferrer" className="bg-white text-emerald-600 font-semibold px-6 py-2 rounded-full hover:bg-emerald-100 transition">
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default callToAction