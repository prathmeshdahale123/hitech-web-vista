import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AimlDept = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Department of Artificial Intelligence & Machine Learning</h1>
        <p className="text-gray-700 mt-4 text-lg">Empowering the Future with Intelligent Systems</p>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12 space-y-16">
        {/* Overview + HOD */}
        <section className="md:flex md:items-center md:gap-10 py-0 my-0">
          <div className="md:flex-1">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Overview</h2>
            <p className="text-gray-700 mb-1">
              The AI & ML Department provides specialized education in artificial intelligence, machine learning, and data science. It emphasizes hands-on learning and innovation to equip students with skills to solve complex real-world problems using advanced technologies.
            </p>
            <p className="text-gray-700 mb-0">
              <strong>Established:</strong> 2022
            </p>
          </div>

          {/* HOD Card */}
          <Card className="md:w-72 mt-8 md:mt-0">
            <CardHeader className="text-center">
              <CardTitle>HOD</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <img
                src="/images/hod_aiml.jpg"
                alt="Prof. Sandip Eknathrao Ingle"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <div className="text-center">
                <p className="font-semibold text-blue-800">Prof. Sandip Eknathrao Ingle</p>
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
                To become a center of excellence in Artificial Intelligence and Machine Learning education, fostering innovation and societal transformation through intelligent technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-700">Mission</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>To impart quality education in AI and ML with hands-on experience in industry-standard tools.</li>
                <li>To promote research and innovation in emerging AI domains.</li>
                <li>To nurture ethical and socially responsible AI professionals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Programs Offered</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>B.Tech in Artificial Intelligence & Machine Learning (Intake: 60)</li>
          </ul>
        </section>

        {/* Labs */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "AI Programming Lab",
              "Machine Learning Lab",
              "Deep Learning & Computer Vision Lab",
              "Natural Language Processing Lab"
            ].map((lab, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{lab}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Equipped with state-of-the-art tools such as Python, TensorFlow, Keras, and cloud platforms to facilitate real-world AI applications.
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
            <li>Students have participated in top AI & ML hackathons and competitions.</li>
            <li>Research papers published in international journals and conferences.</li>
            <li>Strong collaboration with industry partners for internships and projects.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AimlDept;
