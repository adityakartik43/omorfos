import React from "react";
import CardFullDetails from "./CardFullDetails";
import image from "../assets/gallery/kv-1.jpg"

const Projects = () => {
  const projectInfo = 
    {
      title: "Kailash Vihar: Premium Duplex Living in Durgapur",
      description:
        "📌 Kailash Vihar is an exclusive residential enclave developed by Omorfos Infrastructure Pvt. Ltd., offering only 9 premium duplex homes in the vibrant heart of Durgapur. Designed for families seeking an upscale yet harmonious lifestyle, each duplex in Kailash Vihar features modern architecture, well-planned spaces, and luxurious finishes — all crafted to ensure comfort, elegance, and connectivity.",
      locationHighlights: {
        title: "📍 Key Location Highlights",
        points: [
          "🌆 Prime Location: Situated in the popular Link Park-1 area of Durgapur.",
          "🛣️ Excellent Connectivity:",
          "🧭 600 meters from Link Road.",
          "🛤️ 1.5 km from GT Road.",
          "✈️ 15 minutes’ drive to Durgapur Airport.",
        ],
        nearbyLandmarks: [
          "🗺️ Nearby Landmarks:",
          "🏫 Just 2 km from Hem Sheela Model School.",
          "🏥 Close proximity to shopping centers, hospitals, and daily conveniences.",
        ],
      },
      duplexFeatures: {
        title: "🏠 Duplex Features",
        features: [
          "🛏️ Choice of spacious 3 BHK and 4 BHK homes.",
          "🌄 Modern architectural design with terraces and balconies for refreshing views.",
          "🧘 Vastu-compliant homes enhancing harmony and positivity.",
          "🍽️ Elegant modular kitchens with contemporary fittings.",
          "🌬️ Well-ventilated interiors filled with natural light.",
          "📐 Smart layout planning for maximum comfort and utility.",
        ],
      },
      whyChoose: {
        title: "✨ Why Choose Kailash Vihar?",
        content:
          "At Kailash Vihar, Omorfos Infrastructure ensures an elevated living experience through thoughtful design, premium finishes, and a focus on family-friendly comfort. With only 9 exclusive duplex homes available, residents can enjoy a peaceful, community-driven lifestyle in a rapidly developing neighborhood. This project not only offers the perfect setting for your dream home but also presents a smart investment opportunity in Durgapur’s promising real estate landscape.",
      },
      "image": `${image}`,
    }

  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 gap-1 bg-gray-100 md:bg-gray-200">
        <h2 className="text-3xl md:text-4xl font-semibold text-red-600">OUR PROJECTS</h2>
        <CardFullDetails data={projectInfo} />
      </div>
    </>
  );
};

export default Projects;
