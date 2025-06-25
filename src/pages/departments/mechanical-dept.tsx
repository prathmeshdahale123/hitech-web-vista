import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MechDept = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Department of Mechanical Engineering</h1>
        <p className="text-gray-700 mt-4 text-lg">Innovating for a Sustainable and Efficient Future</p>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12 space-y-16">
        {/* Overview + HOD */}
        <section className="md:flex md:items-center md:gap-10 py-0 my-0">
          <div className="md:flex-1">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Overview</h2>
            <p className="text-gray-700 mb-1">
              The Mechanical Engineering Department provides quality education and training in core areas such as thermal engineering, manufacturing, and design. It emphasizes practical learning and research to develop competent engineers who can contribute effectively to industry and technology.
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
                src="../src/web-img/HOD_Mech.jpg"
                alt="Prof. A. S. Adkine"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <div className="text-center">
                <p className="font-semibold text-blue-800">Prof. A. S. Adkine</p>
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
                To excel as a center of excellence in Mechanical Engineering education and research, contributing to sustainable technological development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-700">Mission</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Provide quality education in core and emerging areas of mechanical engineering.</li>
                <li>Promote research, innovation, and industrial collaboration.</li>
                <li>Develop ethical, competent, and skilled mechanical engineers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Programs Offered</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>B.Tech in Mechanical Engineering (Intake: 60)</li>
          </ul>
        </section>

        {/* Laboratories */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Thermal Engineering Lab",
              "CAD/CAM Lab",
              "Manufacturing Processes Lab",
              "Metrology and Measurements Lab",
              "Fluid Mechanics Lab",
              "Robotics and Automation Lab"
            ].map((lab, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{lab}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Equipped with advanced instruments and software to provide practical exposure.
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
            <li>Active participation in ASME and SAE student competitions.</li>
            <li>Research publications in reputed international journals.</li>
            <li>Industry collaborations for internships and live projects.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MechDept;
