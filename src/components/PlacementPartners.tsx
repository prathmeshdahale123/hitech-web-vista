
import { useEffect, useState } from "react";

const PlacementPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder company logos (using text for demo)
  const partners = [
    { name: "Persistent Systems", logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Persistent_Systems_Logo.svg" },
    { name: "Quick Heal", logo: "QUICK HEAL" },
    { name: "Bentley Systems", logo: "BENTLEY" },
    { name: "Winjit Technologies", logo: "WINJIT" },
    { name: "Techno Vision", logo: "TECHNO VISION" },
    { name: "Infosys", logo: "INFOSYS" },
    { name: "TCS", logo: "TCS" },
    { name: "Wipro", logo: "WIPRO" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 3 >= partners.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Training & Placement Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students are placed in top companies across various industries
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-32 flex items-center justify-center group">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-900 group-hover:text-yellow-500 transition-colors">
                      {partner.logo}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-900 mb-2">120+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-900 mb-2">₹8.5L</div>
            <div className="text-gray-600">Highest Package</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-900 mb-2">₹4.2L</div>
            <div className="text-gray-600">Average Package</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;
