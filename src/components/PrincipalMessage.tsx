import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PrincipalMessage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    data: notices = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['notices'],
    queryFn: async () => {
      const res = await axios.get("https://hi-tech-backend-626g.onrender.com/api/notices", {
        withCredentials: true,
      });

      // Ensure valid structure
      if (res.data?.data?.notices && Array.isArray(res.data.data.notices)) {
        return res.data.data.notices;
      }
      return [];
    },
  });

  const content = {
    principal: {
      title: "Principal's Message",
      text: "Welcome to Hi-Tech Institute of Technology. Our institution stands as a beacon of excellence in technical education, committed to nurturing innovative minds and shaping the next generation of technocrats. With state-of-the-art facilities and experienced faculty, we provide an environment that fosters creativity, critical thinking, and professional growth."
    },
    secretary: {
      title: "Secretary's Desk",
      text: "From the Secretary's desk, I extend a warm welcome to all stakeholders of our esteemed institution. Our commitment to quality education and holistic development remains unwavering. We continue to invest in infrastructure, faculty development, and industry partnerships to ensure our students receive world-class education."
    },
    vision: {
      title: "Our Vision",
      text: "To be a globally recognized center of excellence in technical education, research, and innovation, producing competent engineers who contribute significantly to technological advancement and societal development."
    },
    mission: {
      title: "Our Mission",
      text: "To provide quality technical education through innovative teaching methodologies, cutting-edge research, and industry collaboration, while fostering ethical values and entrepreneurial spirit among students to meet the evolving needs of society and industry."
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left Column - About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-900">About</h2>
            <div className="w-10 h-1 bg-yellow-400 mb-4" />
            <p className="text-gray-700 leading-relaxed mb-4">{content.principal.text}</p>
            <Link to="/About" className="mt-4 px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-yellow-400 hover:text-white transition-colors">
              Know More →
            </Link>
          </div>

          {/* Middle Column - Vision & Mission */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-blue-900">Our Vision</h2>
              <div className="w-10 h-1 bg-yellow-400 mb-4" />
              <p className="text-gray-700 leading-relaxed">{content.vision.text}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 text-blue-900">Our Mission</h2>
              <div className="w-10 h-1 bg-yellow-400 mb-4" />
              <p className="text-gray-700 leading-relaxed">{content.mission.text}</p>
            </div>
          </div>

          {/* Right Column - Notice Board */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-900">Notice Board</h2>
            <div className="w-10 h-1 bg-yellow-400 mb-6" />

            {isLoading ? (
              <p>Loading notices...</p>
            ) : isError ? (
              <p className="text-red-500">Failed to load notices. Please try again later.</p>
            ) : (
              <div
                className="h-64 overflow-hidden relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className="animate-marquee flex flex-col gap-4"
                  style={{ animationPlayState: isHovered ? "paused" : "running" }}
                >
                  {[...notices, ...notices].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 border border-blue-900 p-4 bg-blue-50 rounded"
                    >
                      <div className="flex gap-4 items-start">
                        <div className="bg-yellow-400 text-blue-900 px-4 py-2 text-center rounded">
                          <div className="text-sm font-bold uppercase">
                            {item.date?.split("T")[0] || "N/A"}
                          </div>
                        </div>
                        <div className="text-sm text-blue-900">
                          <span className="font-semibold">{item.title}</span>
                          <p className="text-xs text-gray-500 mt-1">{item.description || "No description."}</p>
                        </div>
                      </div>

                      {item.attachment?.url && (
                        <a
                          href={item.attachment.url}
                          download={item.attachment.originalName || "notice-file"}
                          className="self-start mt-2 px-3 py-1 bg-blue-900 text-white text-xs rounded hover:bg-blue-700 transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Marquee Animation Style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PrincipalMessage;
