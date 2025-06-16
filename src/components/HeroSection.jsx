import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const images = [
    "https://png.pngtree.com/background/20210714/original/pngtree-city-night-view-picture-image_1198276.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-city-greenbelt-modern-buildings-28274729.jpg",
    "https://cdn.wallpapersafari.com/13/26/KWnsxM.jpg",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const allFilled =
      formData.name.trim() != "" &&
      formData.email.trim() != "" &&
      formData.phone.trim() != "" &&
      formData.message.trim() != "";

    setIsFormComplete(allFilled);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  return (
    <div className="relative w-full h-screen">
      {/* Background Carousel */}
      <Slider {...settings} className="h-screen">
        {images.map((img, index) => (
          <div key={index} className="h-screen">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
        <div className="py-10 md:py-20 flex flex-col items-center">
          <div className="text-white max-w-3xl select-none">
            <h1 className="text-4xl md:text-6xl font-bold hover:drop-shadow-[2px_2px_15px_#ff7878] duration-500">OMORFOS GROUP</h1>
            <p className="mt-2 text-lg md:text-xl">📍 Durgapur</p>
            <p className="text-lg md:text-2xl mt-3">
              2, 3, 4 & 4.5 BHK Apartments
            </p>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white/90 mt-10 p-4 md:p-6 rounded-lg shadow-lg w-full max-w-5xl flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700 text-left">
              Contact Us For More Information
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4 text-gray-700 w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 rounded text-sm"
                required
              />
              <div className="md:col-span-1 flex items-end">
                <button
                  type="submit"
                  className={`w-full text-white py-2 rounded text-sm md:text-base transition-colors duration-200 ${
                    isFormComplete
                      ? "bg-green-600 hover:bg-blue-700 cursor-pointer duration-300"
                      : `bg-red-600 cursor-none`
                  }`}
                  disabled={!isFormComplete}
                >
                  Enquire Now
                </button>
              </div>
              <div className="md:col-span-5 flex items-start gap-2 text-left">
                <input type="checkbox" className="mt-1" checked disabled />
                <span className="text-xs text-gray-600">
                  I authorize company representatives to Call, SMS, Email or
                  WhatsApp me about its products and offers. This consent
                  overrides any registration for DNC/NDNC.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
