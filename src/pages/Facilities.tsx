
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Library, 
  Hammer, 
  Home, 
  BookOpen, 
  Bus, 
  Wifi, 
  MonitorPlay,
  Dumbbell
} from "lucide-react";

const facilities = [
  {
    id: "library",
    name: "Library",
    icon: <Library className="h-12 w-12 text-blue-700" />,
    description: "Our state-of-the-art library houses over 25,000 books, journals, and e-resources to support academic and research activities.",
    features: [
      "25,000+ books covering all engineering disciplines",
      "Digital library with access to IEEE, Springer, and other databases",
      "Separate reading hall with seating capacity of 150 students",
      "Online catalog system for easy book searches",
      "Journals and magazines section with latest publications",
      "Reprographic facility for students and faculty"
    ]
  },
  {
    id: "workshop",
    name: "Workshop",
    icon: <Hammer className="h-12 w-12 text-blue-700" />,
    description: "Well-equipped workshops for practical training in machine tools, fabrication, welding, carpentry, and foundry operations.",
    features: [
      "Machine shop with lathe machines, milling machines, and CNC equipment",
      "Welding shop with arc welding, gas welding, and TIG/MIG facilities",
      "Carpentry section with woodworking tools and machines",
      "Foundry with metal casting capabilities",
      "Electronics workshop with soldering stations and testing equipment",
      "Safety equipment and trained workshop instructors"
    ]
  },
  {
    id: "hostel",
    name: "Hostel",
    icon: <Home className="h-12 w-12 text-blue-700" />,
    description: "Separate hostels for boys and girls with comfortable accommodation, mess facilities, and recreation areas.",
    features: [
      "Separate wings for boys and girls with 24x7 security",
      "Furnished rooms with beds, study tables, and storage",
      "Common mess with nutritious vegetarian and non-vegetarian options",
      "Recreation rooms with indoor games and TV",
      "Wi-Fi connectivity throughout the hostel premises",
      "Regular cleaning and maintenance services",
      "Warden and supervisory staff for assistance and discipline"
    ]
  },
  {
    id: "sports",
    name: "Sports",
    icon: <Dumbbell className="h-12 w-12 text-blue-700" />,
    description: "Comprehensive sports facilities for indoor and outdoor games, along with a well-equipped fitness center.",
    features: [
      "Cricket ground with practice nets",
      "Football and hockey fields",
      "Basketball, volleyball, and badminton courts",
      "Table tennis and carrom facilities",
      "Modern gymnasium with cardio and strength training equipment",
      "Annual sports competitions and inter-college tournaments",
      "Qualified sports instructors and coaches"
    ]
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: <Bus className="h-12 w-12 text-blue-700" />,
    description: "Fleet of buses covering major routes in and around Chh. Sambhajinagar for convenient commute of students and staff.",
    features: [
      "Fleet of 15+ buses covering major areas of the city",
      "Regular schedules with multiple pickup and drop points",
      "GPS tracking system for real-time location updates",
      "Experienced drivers and conductors for safe travel",
      "Maintenance team ensuring vehicle safety and reliability",
      "Special transportation arrangements for educational visits"
    ]
  },
  {
    id: "wifi",
    name: "Wi-Fi Campus",
    icon: <Wifi className="h-12 w-12 text-blue-700" />,
    description: "High-speed internet connectivity across the campus with secure access for students and faculty.",
    features: [
      "Campus-wide high-speed internet coverage",
      "Fiber optic backbone with redundant connectivity",
      "Secure access with individual login credentials",
      "Content filtering for educational environment",
      "Technical support team for connectivity issues",
      "Regular upgrades to maintain optimal speeds"
    ]
  },
  {
    id: "classrooms",
    name: "Digital Classrooms",
    icon: <MonitorPlay className="h-12 w-12 text-blue-700" />,
    description: "Modern classrooms equipped with digital teaching aids and smart boards for interactive learning.",
    features: [
      "Projectors and interactive smart boards",
      "Audio-visual equipment for multimedia presentations",
      "Recording capabilities for lecture capture",
      "Comfortable seating with optimal viewing angles",
      "Climate-controlled environment for year-round comfort",
      "Integrated technology podiums for instructors"
    ]
  },
  {
    id: "labs",
    name: "Laboratories",
    icon: <BookOpen className="h-12 w-12 text-blue-700" />,
    description: "Specialized laboratories for each department with modern equipment and experimental setups.",
    features: [
      "Department-specific advanced laboratories",
      "Industry-standard equipment and software",
      "Qualified lab assistants for guidance",
      "Regular upgrades to match industry requirements",
      "Safety protocols and emergency equipment",
      "Project spaces for student innovations"
    ]
  }
];

const Facilities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="Campus Facilities" 
        subtitle="Infrastructure that supports holistic development" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {facilities.slice(0, 8).map((facility) => (
            <Card 
              key={facility.id} 
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => document.getElementById(facility.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="font-semibold text-blue-900 text-lg">{facility.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Tabs defaultValue="library">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="workshop">Workshop</TabsTrigger>
            <TabsTrigger value="hostel">Hostel</TabsTrigger>
            <TabsTrigger value="others">Other Facilities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="library" id="library" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Central Library</h2>
                <p className="text-gray-700 mb-6">{facilities[0].description}</p>
                
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Library Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  {facilities[0].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Library Hours</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-medium">Weekdays:</p>
                      <p>8:30 AM - 8:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Weekends:</p>
                      <p>9:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">During Exams:</p>
                      <p>8:30 AM - 10:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Contact:</p>
                      <p>library@hitech.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg min-h-[400px] flex flex-col items-center justify-center">
                <img
                  src="../src/web-img/library_img.jpg"
                  alt="Library"
                  className="rounded-lg mb-4 max-h-64 object-cover shadow"
                />
                <p className="text-gray-500">Library Image Gallery</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="workshop" id="workshop" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Engineering Workshops</h2>
                <p className="text-gray-700 mb-6">{facilities[1].description}</p>
                
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Workshop Facilities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  {facilities[1].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Workshop Access</h4>
                  <p className="text-gray-700 mb-2">Workshops are accessible to students as per their academic schedule and under supervision of instructors.</p>
                  <p className="text-gray-700">Special workshop hours can be allocated for project work with prior permission from the department.</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg min-h-[400px] flex items-center justify-center">
                <p className="text-gray-500">Workshop Image Gallery</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="hostel" id="hostel" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Student Hostels</h2>
                <p className="text-gray-700 mb-6">{facilities[2].description}</p>
                
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Hostel Amenities</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  {facilities[2].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Boys Hostel</h4>
                    <p className="text-gray-700">Capacity: 250 students</p>
                    <p className="text-gray-700">Rooms: Double & Triple sharing</p>
                    <p className="text-gray-700">Contact: boyshostel@hitech.edu.in</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Girls Hostel</h4>
                    <p className="text-gray-700">Capacity: 150 students</p>
                    <p className="text-gray-700">Rooms: Double sharing</p>
                    <p className="text-gray-700">Contact: girlshostel@hitech.edu.in</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg min-h-[400px] flex items-center justify-center">
                <p className="text-gray-500">Hostel Image Gallery</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="others" className="mt-6">
            <div className="space-y-12">
              <div id="sports" className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Sports Facilities</h2>
                  <p className="text-gray-700 mb-6">{facilities[3].description}</p>
                  
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Available Sports</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {facilities[3].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-500">Sports Facilities Images</p>
                </div>
              </div>
              
              <div id="transportation" className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Transportation</h2>
                  <p className="text-gray-700 mb-6">{facilities[4].description}</p>
                  
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Transport Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {facilities[4].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-500">Transportation Fleet Images</p>
                </div>
              </div>
              
              <div id="wifi" className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Wi-Fi Campus</h2>
                  <p className="text-gray-700 mb-6">{facilities[5].description}</p>
                  
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Network Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {facilities[5].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-500">Network Infrastructure Images</p>
                </div>
              </div>
              
              <div id="classrooms" className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Digital Classrooms</h2>
                  <p className="text-gray-700 mb-6">{facilities[6].description}</p>
                  
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Classroom Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {facilities[6].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-500">Classroom Images</p>
                </div>
              </div>
              
              <div id="labs" className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Laboratories</h2>
                  <p className="text-gray-700 mb-6">{facilities[7].description}</p>
                  
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Laboratory Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {facilities[7].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg min-h-[300px] flex items-center justify-center">
                  <p className="text-gray-500">Laboratory Images</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Facilities;
