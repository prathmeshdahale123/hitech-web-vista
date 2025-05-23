
import { BookOpen, Settings, Coffee, Home, Bus, Wifi } from "lucide-react";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Library",
      description: "Well-equipped library with vast collection of books and digital resources"
    },
    {
      icon: Settings,
      title: "Workshop",
      description: "Modern workshops with latest equipment for practical learning"
    },
    {
      icon: Coffee,
      title: "Canteen",
      description: "Hygienic canteen serving nutritious and affordable meals"
    },
    {
      icon: Home,
      title: "Hostel",
      description: "Comfortable hostel accommodation for boys and girls"
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "Safe and reliable bus service covering major routes"
    },
    {
      icon: Wifi,
      title: "Wi-Fi Campus",
      description: "High-speed internet connectivity throughout the campus"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            College Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our campus is equipped with modern facilities to ensure the best learning environment for our students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-900" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
