import React from "react";
import FounderCard from "./FounderCard";
import imgUrl from "../assets/founders/nandan-singh.png"

const Founder = () => {
  
    const founders = [
        {
            name: "Nandan Singh",
            role: "Co-Founder, Omorfos Infrastructure Pvt. Ltd.",
            image: `${imgUrl}`,
            description: "Nandan Singh, aged 30, is the co-founder of Omorfos Infrastructure Pvt. Ltd. He is a graduate in Computer Science and Engineering from the prestigious Jadavpur University, one of India’s leading technical institutions. His early education was completed in the serene and academically rich environment of Darjeeling, which laid the foundation for his disciplined and visionary approach to life and work. With a diverse background and extensive exposure to various parts of India and the world, Nandan brings a unique perspective to real estate development. His travels and experiences across different cultures and architectural styles have deeply influenced his understanding of modern design, efficient space planning, and customer-centric construction. Nandan combines technical expertise with creative insight, playing a key role in shaping the design philosophy and quality standards at Omorfos Infrastructure. His passion lies in building homes that are not just structurally sound but also thoughtfully designed to improve the quality of life for families. Under his leadership, Omorfos continues to grow as a trusted name in Durgapur’s real estate landscape, known for its commitment to excellence, transparency, and innovation.",
        },
        {
            name: "Avinash Aggarwal",
            role: "Co-Founder, Omorfos Infrastructure Pvt. Ltd.",
            description: "Avinash Aggarwal, aged 37, is the co-founder of Omorfos Infrastructure Pvt. Ltd. A graduate of NIT Durgapur, one of India’s premier engineering institutes, Avinash developed a deep connection with the city during his academic years and has called Durgapur home ever since. After gaining valuable experience working with several multinational companies, Avinash chose to follow his passion for teaching. He dedicated several years to education, inspiring and mentoring hundreds of students in mathematics across Durgapur. His ability to simplify complex concepts and connect with young minds earned him a respected place in the local academic community. For the past five years, Avinash has channeled his skills and vision into the real estate sector, successfully leading the development of multiple residential projects known for their quality, functionality, and customer satisfaction. His keen eye for detail and understanding of urban needs have contributed significantly to the success of Omorfos Infrastructure. Together with co-founder Nandan Singh, Avinash shares a common vision: to build thoughtfully designed, high-quality homes that elevate the living standards of families in Durgapur. His blend of technical expertise, teaching experience, and real estate insight continues to drive the company's growth and reputation.",
        },
    ];
    

   return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 gap-1 bg-gray-100 md:bg-gray-200">
        <h2 className="text-3xl md:text-4xl font-semibold text-red-600">
          Our Founders
        </h2>
        <FounderCard data={founders[0]} />
        <FounderCard data={founders[1]} />
      </div>
    </div>
  );
};

export default Founder;
