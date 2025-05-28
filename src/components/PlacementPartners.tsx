import { useEffect, useState } from "react";

const PlacementPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder company logos (using text for demo)
  const partners = [
      {
        name: "Tudip learning",
        logo: "https://tudiplearning.com/wp-content/uploads/2024/07/Tudip_Learning_Logo.webp",
      },
      {
        name: "Persistent Systems",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Persistent_Systems_Logo.svg",
      },
      {
        name: "Quick Heal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Quick-Heal-Logo.png/250px-Quick-Heal-Logo.png",
      },
    {
      name: "Bentley Systems",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bentley_Systems_wordmark.svg/250px-Bentley_Systems_wordmark.svg.png",
    },
    {
      name: "Winjit Technologies",
      logo: "https://winjit.com/themes/custom/winjit_subtheme/images/logo/logo.svg",
    },
    {
      name: "Techno Vision",
      logo: "https://www.technovision.tech/wp-content/uploads/2023/11/cropped-283740202_1339521356542826_5989151994353489062_n-removebg-preview.png",
    },
    {
      name: "Infosys",
      logo: "https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc",
    },
    {
      name: "TCS",
      logo: "https://imgs.search.brave.com/3_hZ2a0aPUvZz7Qd9muqtxdvNN2RxlCqOrong0oUCW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2F5dXAuY29tL2Nk/bi9jb21wYW55X2xv/Z28vcFY1YzZxQUM2/eF8yMDIxMDMxMi5q/cGc",
    },
    {
      name: "Wipro",
      logo: "https://imgs.search.brave.com/yM-c0JUqXyf4Em09vki34-UH2zU3L3sWEWsqWR21DC4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84Lzg5L1dp/cHJvX25ld19sb2dv/LnN2Zy81MTJweC1X/aXByb19uZXdfbG9n/by5zdmcucG5n",
    },
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
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 mx-auto object-contain"
                    />
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
            <div className="text-3xl font-bold text-blue-900 mb-2">80%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-900 mb-2">20+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-900 mb-2">₹8 LPA</div>
            <div className="text-gray-600">Highest Package</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-900 mb-2">₹4.2 LPA</div>
            <div className="text-gray-600">Average Package</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;
