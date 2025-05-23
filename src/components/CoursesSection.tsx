
import { Cpu, Wrench, Building, Brain } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: Building,
      title: "Civil Engineering",
      description: "Comprehensive program covering structural design, construction management, and infrastructure development"
    },
    {
      icon: Wrench,
      title: "Mechanical Engineering",
      description: "Advanced curriculum in manufacturing, thermal systems, and mechanical design"
    },
    {
      icon: Cpu,
      title: "Computer Science & Engineering",
      description: "Cutting-edge program in software development, algorithms, and system design"
    },
    {
      icon: Brain,
      title: "CSE (AI & ML)",
      description: "Specialized program focusing on artificial intelligence and machine learning technologies"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of engineering programs designed to meet industry demands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:from-blue-100 transition-all duration-300 group border border-blue-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 ml-4">
                    {course.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {course.description}
                </p>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
