
import { useState } from "react";
import { User, Calendar, FileText, Users, Award } from "lucide-react";

const PrincipalMessage = () => {
  const [activeTab, setActiveTab] = useState("principal");

  const news = [
    { title: "Admission Open 2024-25", date: "Dec 15, 2024", type: "admission" },
    { title: "Faculty Meeting Scheduled", date: "Dec 18, 2024", type: "meeting" },
    { title: "Fee Payment Notice", date: "Dec 20, 2024", type: "fee" },
    { title: "Merit List Published", date: "Dec 22, 2024", type: "result" },
    { title: "Workshop on AI & ML", date: "Dec 25, 2024", type: "event" }
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Principal's Message */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-6 border-b">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
                        activeTab === tab.id
                          ? "text-blue-900 border-b-2 border-blue-900"
                          : "text-gray-600 hover:text-blue-900"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {content[activeTab as keyof typeof content].title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {content[activeTab as keyof typeof content].text}
                </p>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Latest News Timeline */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Latest News
            </h3>
            <div className="space-y-4">
              {news.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-red-500">
                  <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-2 top-1"></div>
                  <div className="pb-4">
                    <h4 className="font-semibold text-gray-800 hover:text-blue-900 cursor-pointer transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-blue-900 font-medium hover:text-yellow-500 transition-colors">
              View All News →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
