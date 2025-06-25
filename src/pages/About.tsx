import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, BookOpen } from "lucide-react";

const About = () => {
  const [showFullPrincipal, setShowFullPrincipal] = useState(false);
  const [showFullSecretary, setShowFullSecretary] = useState(false);

  const principalMessage = `
   Hi-Tech Institute of Technology (HIT) in Chh. Sambhajinagar, Maharashtra, welcomes students to its esteemed engineering programs affiliated with Dr. Babasaheb Ambedkar Marathwada University. Offering B.E. degrees in Civil, Computer Science & Engineering, and Mechanical disciplines, HIT boasts a serene campus with top-tier infrastructure and advanced laboratories. The institute has a strong academic record, with students frequently ranking in the university’s top 10, including first ranks. Located near a major industrial estate, HIT fosters close industry ties through workshops, seminars, and conferences, enhancing students’ practical knowledge and professional confidence. With a dedicated, qualified faculty and an active Industry-Institute Interaction Cell, HIT supports students’ career growth, producing successful engineers for industry, government, and global careers. The institute promises a memorable and transformative experience, equipping students to achieve their engineering dreams with full support from its management and staff.`;

  const secretaryMessage = `
   Dear Students,B.G.P.S. has played a pioneering role in profession and technical education in Marathwada region .The campus comprises of engineering, pharmacy and management college.
The mission of Bhartiya Gramin Punarracha Sanstha (BGPS) is to help region and other developing state to improve their engineering practices both in the private and in the public sectors, and superior public policies. It seeks to do this through producing effective engineers who will pioneer new engineering practices and set new standards; through producing teachers and researchers who will generate new ideas of International significance
That is, we have to produce engineers who can worl efficiently across the globe, who can excel in a multi culture environment, and who can negotiate confidently across culture. Further, we have to benchmark ourselves on a global scale with the best engineering education institutions and become the institution –of-choice for the best students residing all over country. This is a big challenge indeed, knowing the potential of faculty we have no doubt that this objective will be achieved and exceeded.
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Hi-Tech Institute Of Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2001, Hi-Tech Institute of Technology has been a pioneer in technical education,
              shaping global technocrats and contributing to technological advancement.
            </p>
          </div>

          {/* Principal & Secretary Desk */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Principal's Message */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="../src/web-img/Principal_img.jpg"
                  alt="Principal"
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow"
                />
                <h3 className="text-2xl font-bold text-blue-900">Principal's Message</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {showFullPrincipal
                  ? principalMessage
                  : principalMessage.slice(0, 200) + "..."}
              </p>
              <button
                onClick={() => setShowFullPrincipal(!showFullPrincipal)}
                className="mt-4 text-blue-600 hover:underline font-semibold"
              >
                {showFullPrincipal ? "View Less" : "View More"}
              </button>
              <p className="mt-4 text-gray-600 font-semibold text-center">
                Prof. Govind Dhage<br />
                Principal, Hi-Tech Institute Of Technology
              </p>
            </div>

            {/* Secretary's Desk */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://th.bing.com/th/id/OIP.PLd70PktdaNH9FLyXqm6WwHaHP?cb=iwp2&rs=1&pid=ImgDetMain"
                  alt="Secretary"
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow"
                />
                <h3 className="text-2xl font-bold text-blue-900">Secretary's Desk</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {showFullSecretary
                  ? secretaryMessage
                  : secretaryMessage.slice(0, 200) + "..."}
              </p>
              <button
                onClick={() => setShowFullSecretary(!showFullSecretary)}
                className="mt-4 text-blue-600 hover:underline font-semibold"
              >
                {showFullSecretary ? "View Less" : "View More"}
              </button>
              <p className="mt-4 text-gray-600 font-semibold text-center">
                Shri. Eknath Jadhav<br />
                Secretary, B.G.P.S Chh. Sambhajinagar
              </p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">1000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <BookOpen className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">4</div>
              <div className="text-gray-600">Departments</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Award className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-900 mb-2">80%</div>
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
