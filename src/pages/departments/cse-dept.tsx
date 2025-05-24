import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CseDept = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Department of Computer Science & Engineering</h1>
        <p className="text-gray-700 mt-4 text-lg">Empowering Innovation through Technology and Research</p>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12 space-y-16">
        {/* Overview + HOD */}
        <section className="md:flex md:items-center md:gap-10 py-0 my-0">
          <div className="md:flex-1">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Overview</h2>
            <p className="text-gray-700 mb-1">
              The Department of Computer Science & Engineering offers a comprehensive program focused on software development, algorithms, systems, and data science. It aims to prepare students with strong technical skills and practical experience to meet industry demands and innovate in emerging technologies.
            </p>
            <p className="text-gray-700 mb-0">
              <strong>Established:</strong> 2001
            </p>
          </div>

          {/* HOD Card */}
          <Card className="md:w-72 mt-8 md:mt-0">
            <CardHeader className="text-center">
              <CardTitle>HOD</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <img
                src="/images/hod_p_m_mohite.jpg"
                alt="Prof. P. M. Mohite"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <div className="text-center">
                <p className="font-semibold text-blue-800">Prof. P. M. Mohite</p>
                <p className="text-gray-600 text-sm">Head of Department</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Vision and Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Vision & Mission</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-blue-700">Vision</h3>
              <p className="text-gray-700">
                To emerge as a centre of excellence in the field of computer science by nurturing innovative minds and fostering world-class education and research.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-700">Mission</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>To impart quality education with practical and industrial exposure.</li>
                <li>To foster innovation and research in emerging technologies.</li>
                <li>To instill ethical and professional values in students.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Programs Offered</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>B.Tech in Computer Science & Engineering (Intake: 180)</li>
          </ul>
        </section>

        {/* Labs */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Programming Lab",
              "Data Structure & Algorithms Lab",
              "Operating Systems Lab",
              "Database Lab",
              "Web & App Development Lab",
              "AI & ML Research Lab"
            ].map((lab, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{lab}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Equipped with modern systems and software for hands-on learning.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Department Achievements</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Annual participation in Smart India Hackathon and IEEE conferences.</li>
            <li>Students placed in top MNCs: TCS, Infosys, Wipro, Cognizant, etc.</li>
            <li>Regular workshops and seminars on AI, Blockchain, and Cloud Computing.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CseDept;
