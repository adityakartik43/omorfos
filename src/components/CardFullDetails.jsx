import React, { useState } from "react";
import { X } from "lucide-react"; // Optional: Lucide close icon

const CardFullDetails = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openImage = () => {
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Card */}
      <div className="justify-center gap-5 max-w-7xl px-4 md:px-10 md:py-10 mt-2 bg-gray-100 rounded-lg md:shadow-lg md:mb-0 mb-2">
        <div className="flex justify-center">
          <h1 className="group relative text-center inline-block text-xl md:text-3xl font-semibold text-gray-800">
            <span className="relative z-10">{data.title}</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full group-hover:left-0 rounded"></span>
          </h1>
        </div>

        {/* Image + Description */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-5 md:p-3 bg-gray-100 mt-3">
          <img
            src={data.image}
            alt="Project image"
            onClick={openImage}
            className="rounded-xl md:h-80 h-auto w-auto shadow-lg shadow-gray-500 hover:shadow-gray-700 transition-shadow duration-300 cursor-pointer"
          />
          <div className="flex flex-col">
            <p className="text-gray-700 text-xs md:text-sm text-justify max-w-3xl md:mt-1">
              {data.description}
            </p>

            {/* Location Highlights */}
            <p className="text-gray-800 text-lg font-semibold mt-4">
              {data.locationHighlights.title}
            </p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700 mt-1">
              {data.locationHighlights.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* Nearby Landmarks */}
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700 mt-2">
              {data.locationHighlights.nearbyLandmarks.map((landmark, index) => (
                <li key={index}>{landmark}</li>
              ))}
            </ul>

            {/* Duplex Features */}
            <p className="text-gray-800 text-lg font-semibold mt-4">
              {data.duplexFeatures.title}
            </p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700 mt-1">
              {data.duplexFeatures.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Why Choose Section */}
            <p className="text-gray-800 text-lg font-semibold mt-4">
              {data.whyChoose.title}
            </p>
            <p className="text-gray-700 text-xs md:text-sm text-justify max-w-3xl mt-1">
              {data.whyChoose.content}
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal with Animation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300 animate-fadeIn">
          <button
            onClick={closeImage}
            className="absolute top-5 right-5 text-white text-3xl font-bold z-50 hover:text-red-500 duration:300 hover:cursor-pointer"
            aria-label="Close"
          >
            &times;
            {/* Or use Lucide icon: <X size={32} /> */}
          </button>
          <img
            src={data.uri}
            alt="Full View"
            className="max-w-full max-h-full rounded-xl shadow-2xl transform transition-all duration-300 scale-100 animate-zoomIn"
          />
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s;
          }
          @keyframes zoomIn {
            from { transform: scale(0.95); opacity: 0 }
            to { transform: scale(1); opacity: 1 }
          }
          .animate-zoomIn {
            animation: zoomIn 0.3s;
          }
        `}
      </style>
    </>
  );
};

export default CardFullDetails;
