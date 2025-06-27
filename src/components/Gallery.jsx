import React, { useState } from 'react'

const Gallery = () => {
   const images = import.meta.glob("../assets/gallery/*.jpg", {
    eager: true,
    import: "default",
  });

  const imageUrls = Object.values(images);
  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
  
    const openImage = (img) => {
      setSelectedImg(img);
      setIsOpen(true);
    };
  
    const closeImage = () => {
      setIsOpen(false);
      setSelectedImg(null);
    };
  
    return (
      <>
        <div className="bg-gray-100 py-6 md:py-10">
          <div className="container mx-auto px-4 text-center flex flex-col items-center max-w-7xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-500">Gallery</h1>
            <h1 className="text-3xl md:text-4xl font-semibold hover:font-bold translate-2 text-red-600">Explore Kailash Vihar</h1>
            <p className="text-gray-600 mt-5 text-xs font-semibold text-center">
              Take a closer look at the thoughtful design and elegant architecture of Kailash Vihar. Our gallery showcases the essence of premium duplex living — from exterior elevation to spacious interiors and floor plans designed for your lifestyle.
            </p>
            <h3 className="text-red-600 text-xl md:text-2xl font-semibold mt-3">Project Elevation</h3>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4">
              {imageUrls.map((img, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-gray-600 transition-transform duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => openImage(img)}
                >
                  <img
                    src={img}
                    alt={`gallery-${idx}`}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="text-gray-800 text-xs font-semibold mt-4 text-justify md:text-center max-w-7xl">
              Get a glimpse of the beautifully designed façade and modern architectural style of the duplex homes. The elevation reflects a balance of aesthetics and functionality, combining contemporary lines with warm, welcoming finishes.
            </p>
          </div>
        </div>

        {/* Modal */}
        {isOpen && selectedImg && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300"
            style={{ animation: 'fadeIn 0.3s' }}
          >
            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                @keyframes scaleIn {
                  from { transform: scale(0.95); opacity: 0; }
                  to { transform: scale(1); opacity: 1; }
                }
                .modal-img-animate {
                  animation: scaleIn 0.3s;
                }
              `}
            </style>
            <button
              onClick={closeImage}
              className="absolute top-5 right-5 text-white text-3xl font-bold z-50 hover:text-red-500 transition duration-300"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Full View"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl modal-img-animate"
            />
          </div>
        )}
      </>
    );
}

export default Gallery
