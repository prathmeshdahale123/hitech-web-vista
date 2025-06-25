import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CivilDept = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">Department of Civil Engineering</h1>
        <p className="text-gray-700 mt-4 text-lg">
          Building Foundations for a Sustainable Future
        </p>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12 space-y-16">

        {/* Overview + HOD */}
        <section className="md:flex md:items-center md:gap-10 py-0 my-0">
          <div className="md:flex-1">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Overview</h2>
            <p className="text-gray-700 mb-1">
              The Civil Engineering Department offers quality education and training in key areas like structural engineering, construction, and infrastructure development. It focuses on practical skills and research to prepare students for careers in planning, designing, and maintaining sustainable built environments.
            </p>
            <p className="text-gray-700 mb-0"><strong>Established:</strong> 2010</p>
          </div>

          {/* HOD Card */}
          <Card className="md:w-72 mt-8 md:mt-0">
            <CardHeader className="text-center">
              <CardTitle>HOD</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <img
                src="../src/web-img/HOD_CIVIL.jpg"
                alt="Prof. R. F. Siddiquil"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <div className="text-center">
                <p className="font-semibold text-blue-800">Prof. R. F. Siddiqui</p>
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
                To be recognized as a leading Civil Engineering department imparting quality education and sustainable infrastructure development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-blue-700">Mission</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>To provide quality education with emphasis on practical learning.</li>
                <li>To promote research in sustainable construction and infrastructure.</li>
                <li>To develop socially responsible civil engineers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Programs Offered */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Programs Offered</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>B.Tech in Civil Engineering (Intake: 60)</li>
          </ul>
        </section>

        {/* Labs */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Laboratories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Concrete Technology Lab",
              "Soil Mechanics Lab",
              "Transportation Engineering Lab",
              "Surveying Lab",
              "Environmental Engineering Lab",
              "Structural Engineering Lab"
            ].map((lab, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{lab}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">
                    Equipped with modern instruments and tools for practical hands-on training.
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
            <li>Successfully completed multiple state government infrastructure projects.</li>
            <li>Faculty research published in international journals.</li>
            <li>Active student chapter of the American Society of Civil Engineers (ASCE).</li>
          </ul>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default CivilDept;
