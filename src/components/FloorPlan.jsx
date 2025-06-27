import React, { useState } from "react";

const FloorPlan = () => {
  const images = import.meta.glob("../assets/floor-plan/*.jpg", {
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
      <div className="bg-white py-7 md:py-10">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-red-600">
            Floor Plans
          </h1>
          <p className="text-gray-700 mt-3 md:text-lg">
            Explore our detailed floor plans to find the perfect layout for your
            needs.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4 max-w-7xl">
            {imageUrls.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-gray-600  duration-300 cursor-pointer gallery-item transition-transform hover:scale-105"
                onClick={() => openImage(img)}
              >
                <img
                  src={img}
                  alt={`floor-${idx}`}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="text-gray-800 text-xs font-semibold mt-4 text-justify md:text-center max-w-7xl">
            Each unit is crafted with space optimization, natural light flow,
            and family comfort in mind. Choose from 3 BHK or 4 BHK layouts, each
            with a terrace or balcony, modular kitchen, and vastu-compliant
            design.
          </p>
        </div>
      </div>

      {/* Modal with smooth fade-in/out */}
      {isOpen && selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300"
          style={{ animation: "fadeIn 0.3s" }}
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
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl transition-transform duration-300 scale-100 modal-img-animate"
          />
        </div>
      )}
    </>
  );
};

export default FloorPlan;
