import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AimlDept = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Department of CSE (AI & ML)</h1>
        <p className="text-gray-700 mt-4 text-lg">Artificial Intelligence and Machine Learning specialization focuses on intelligent systems, data science, and advanced computing.</p>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12 space-y-16">
        {/* Overview + HOD */}
        <section className="md:flex md:items-center md:gap-10 py-0 my-0">
          <div className="md:flex-1">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Department Overview</h2>
            <p className="text-gray-700 mb-1">
              The AI & ML Department provides specialized education in artificial intelligence, machine learning, and data science. It emphasizes hands-on learning and innovation to equip students with skills to solve complex real-world problems using advanced technologies.
            </p>
            <p className="text-gray-700 mb-0">
              <strong>Established:</strong> 2022
            </p>
            <p className="text-gray-700 mb-0">
              <strong>Faculty Members:</strong> 6
            </p>
            <p className="text-gray-700 mb-0">
              <strong>Laboratories:</strong> 4
            </p>
          </div>

          {/* HOD Card */}
          <Card className="md:w-72 mt-8 md:mt-0">
            <CardHeader className="text-center">
              <CardTitle>HOD</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <img
                src="../src/web-img/HOD_AIML.jpg"
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
            <li>B.Tech in CSE (AI & ML) (Intake: 60)</li>
          </ul>
        </section>

        {/* Laboratories */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "CSE (AI & ML) Lab 1",
              "CSE (AI & ML) Lab 2",
              "CSE (AI & ML) Lab 3",
              "CSE (AI & ML) Lab 4"
            ].map((lab, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{lab}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Advanced equipment and tools for practical learning.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Faculty */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Faculty</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="py-2 px-4 border-b text-left text-blue-800">#</th>
                  <th className="py-2 px-4 border-b text-left text-blue-800">Name Of Faculty</th>
                  <th className="py-2 px-4 border-b text-left text-blue-800">Designation</th>
                  <th className="py-2 px-4 border-b text-left text-blue-800">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "PSEI", name: "Prof. Sandip Eknathrao Ingle", designation: "HOD & Assistant Professor", qualification: "" },
                  { id: "PSK", name: "Prof. Smitha Khajekar", designation: "Assistant Professor", qualification: "" },
                  { id: "PWS", name: "Prof. Waseem Siddiqui", designation: "Assistant Professor", qualification: "" },
                  { id: "PSN", name: "Prof. Samiksha Nikam", designation: "Assistant Professor", qualification: "" },
                  { id: "PSI", name: "Prof. Syed Irfan", designation: "Assistant Professor", qualification: "" },
                  { id: "PPS", name: "Prof. Pooja Sable", designation: "Assistant Professor", qualification: "" }
                ].map((faculty, index) => (
                  <tr key={faculty.id} className="hover:bg-blue-50">
                    <td className="py-2 px-4 border-b text-gray-700">{index + 1}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{faculty.name}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{faculty.designation}</td>
                    <td className="py-2 px-4 border-b text-gray-700">{faculty.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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