
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Hi-Tech Institute
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2001, Hi-Tech Institute of Technology has been a pioneer in technical education, 
              shaping global technocrats and contributing to technological advancement.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Address & Map */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Location
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Hi-Tech Institute of Technology</strong><br />
                    Waluj MIDC, Aurangabad<br />
                    Maharashtra, India - 431136
                  </p>
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links & College Cells */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Quick Links</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Regulatory Bodies</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">AICTE</a></li>
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">DTE Maharashtra</a></li>
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">BAMU</a></li>
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">BATU</a></li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Government</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">MHRD</a></li>
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">Scholarships</a></li>
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">NIRF</a></li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Resources</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">Library</a></li>
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">E-Learning</a></li>
                      <li><a href="#" className="text-blue-600 hover:text-yellow-500 transition-colors">Research</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* College Cells */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">College Cells</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#" className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <h4 className="font-semibold text-gray-800 hover:text-yellow-500">Women Grievance Cell</h4>
                    <p className="text-sm text-gray-600 mt-1">Support and guidance for female students</p>
                  </a>
                  <a href="#" className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <h4 className="font-semibold text-gray-800 hover:text-yellow-500">Student Grievance Cell</h4>
                    <p className="text-sm text-gray-600 mt-1">Resolution of student concerns and issues</p>
                  </a>
                  <a href="#" className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <h4 className="font-semibold text-gray-800 hover:text-yellow-500">Anti-Ragging Cell</h4>
                    <p className="text-sm text-gray-600 mt-1">Ensuring a safe campus environment</p>
                  </a>
                  <a href="#" className="p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors">
                    <h4 className="font-semibold text-gray-800 hover:text-yellow-500">Training & Placement Cell</h4>
                    <p className="text-sm text-gray-600 mt-1">Career guidance and placement support</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">2000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <BookOpen className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">4</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Award className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">23</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
