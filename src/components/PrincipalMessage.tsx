import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Add this import
import { User, Calendar, FileText, Users, Award } from "lucide-react";

const PrincipalMessage = () => {
  const [activeTab, setActiveTab] = useState("principal");
  const [isHovered, setIsHovered] = useState(false);

  const news = [
    { title: "Admission Open 2024-25", date: "Dec 15, 2024", type: "admission", link: "/admissions" },
    { title: "Faculty Meeting Scheduled", date: "Dec 18, 2024", type: "meeting", link: "/events/faculty-meeting" },
    { title: "Fee Payment Notice", date: "Dec 20, 2024", type: "fee", link: "/notices/fee-payment" },
    { title: "Merit List Published", date: "Dec 22, 2024", type: "result", link: "/results/merit-list" },
    { title: "Workshop on AI & ML", date: "Dec 25, 2024", type: "event", link: "/events/ai-ml-workshop" }
  ];

  const tabs = [
    { id: "principal", label: "Principal's Message", icon: User },
    { id: "secretary", label: "Secretary's Desk", icon: Users },
    { id: "vision", label: "Vision", icon: Award },
    { id: "mission", label: "Mission", icon: FileText }
  ];

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
            <h2 className="text-2xl font-bold mb-2 text-blue-900">
              About 
              {/* <span className="bg-blue-900 text-white px-2">HIT</span> */}
            </h2>
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
            <div
              className="h-64 overflow-hidden relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="animate-marquee flex flex-col gap-4"
                style={{ animationPlayState: isHovered ? "paused" : "running" }}
              >
                {[...news, ...news].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start border border-blue-900 p-4 bg-blue-50 rounded"
                  >
                    <div className="bg-yellow-400 text-blue-900 px-4 py-2 text-center rounded">
                      <div className="text-sm font-bold uppercase">{item.date.split(" ")[0]}</div>
                      <div className="text-xs uppercase">{item.date.split(" ")[1]}</div>
                    </div>
                    <div className="text-sm text-blue-900">
                      <Link
                        to={item.link}
                        className="font-semibold hover:text-yellow-600 cursor-pointer transition-colors"
                      >
                        {item.title}
                      </Link>
                      <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <button className="w-full mt-4 text-blue-900 font-medium hover:text-yellow-500 transition-colors">
              View All News →
            </button> */}
          </div>
        </div>
      </div>
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
