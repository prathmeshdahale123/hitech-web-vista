import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  BarChart, 
  Users, 
  Building, 
  Phone 
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Placement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 const partners = [
      {
        name: "Tudip learning",
        logo: "https://tudiplearning.com/wp-content/uploads/2024/07/Tudip_Learning_Logo.webp",
      },
      {
        name: "Persistent Systems",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Persistent_Systems_Logo.svg",
      },
      {
        name: "Quick Heal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Quick-Heal-Logo.png/250px-Quick-Heal-Logo.png",
      },
    {
      name: "Bentley Systems",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bentley_Systems_wordmark.svg/250px-Bentley_Systems_wordmark.svg.png",
    },
    {
      name: "Winjit Technologies",
      logo: "https://winjit.com/themes/custom/winjit_subtheme/images/logo/logo.svg",
    },
    {
      name: "Infosys",
      logo: "https://imgs.search.brave.com/ub6igt8xl2B8ypkP8h91JVhAUG_UBccUb32iQExvrn8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/Zm9zeXNfbG9nby5z/dmcvMjUwcHgtSW5m/b3N5c19sb2dvLnN2/Zy5wbmc",
    },
  
    {
      name: "Wipro",
      logo: "https://imgs.search.brave.com/yM-c0JUqXyf4Em09vki34-UH2zU3L3sWEWsqWR21DC4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84Lzg5L1dp/cHJvX25ld19sb2dv/LnN2Zy81MTJweC1X/aXByb19uZXdfbG9n/by5zdmcucG5n",
    },
     {
      name: "Techno Vision",
      logo: "https://www.technovision.tech/wp-content/uploads/2023/11/cropped-283740202_1339521356542826_5989151994353489062_n-removebg-preview.png",
    }, 
     {
      name: "TCS",
      logo: "https://imgs.search.brave.com/3_hZ2a0aPUvZz7Qd9muqtxdvNN2RxlCqOrong0oUCW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2F5dXAuY29tL2Nk/bi9jb21wYW55X2xv/Z28vcFY1YzZxQUM2/eF8yMDIxMDMxMi5q/cGc",
    },
  ];

  const placementStats = [
    { year: "2022-23", eligibleStudents: 280, placed: 241, highestPackage: 24, averagePackage: 6.8 },
    { year: "2021-22", eligibleStudents: 265, placed: 220, highestPackage: 22, averagePackage: 6.5 },
    { year: "2020-21", eligibleStudents: 255, placed: 205, highestPackage: 20, averagePackage: 6.2 },
    { year: "2019-20", eligibleStudents: 240, placed: 190, highestPackage: 18, averagePackage: 5.8 },
  ];

  const trainingPrograms = [
    {
      title: "Technical Skill Enhancement",
      description: "Core technical skills training in programming, networking, database management, and cloud computing.",
      duration: "60 hours",
      target: "3rd Year Students"
    },
    {
      title: "Aptitude Development",
      description: "Comprehensive aptitude training covering quantitative, logical reasoning, and verbal ability.",
      duration: "40 hours",
      target: "All Students"
    },
    {
      title: "Soft Skills & Communication",
      description: "Training in effective communication, interview skills, group discussion, and personality development.",
      duration: "30 hours",
      target: "Pre-final & Final Year"
    },
    {
      title: "Mock Interviews",
      description: "Practice interviews with industry experts and alumni to prepare for actual placement interviews.",
      duration: "20 hours",
      target: "Final Year Students"
    },
    {
      title: "Industry Project Experience",
      description: "Real-world project experience through industry collaborations and internships.",
      duration: "3-6 months",
      target: "Pre-final Year"
    },
    {
      title: "Career Counseling",
      description: "One-on-one mentoring and guidance for career planning and higher education options.",
      duration: "Ongoing",
      target: "All Students"
    }
  ];

  // Sample MoU data (replace with actual data as needed)

  const mouData = [
    { id: 1, description: "MoU between H.I.T. and Mahapaivesh Environment Research & Consultancy Private Ltd" },
    { id: 2, description: "MoU between H.I.T. and Sara Electromechanical Engineering" },
    { id: 3, description: "MoU between H.I.T. and Mauli refrigeration & AC Services" },
    { id: 4, description: "MoU between H.I.T. and R.K. IT Solution" },
    { id: 5, description: "MoU between H.I.T. and DNR INDIA AUTO TECH PVT. LTD" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 3 >= partners.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="Training & Placement Cell" 
        subtitle="Bridging the gap between academia and industry" 
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">About T&P Cell</h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              The Training and Placement Cell at Hi-Tech Institute of Technology plays a pivotal role in bridging the gap between academia and industry. It focuses on enhancing student employability through comprehensive training programs and facilitating campus recruitment drives.
            </p>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Our dedicated team works tirelessly to prepare students for the competitive job market by organizing various skill development programs, mock interviews, group discussions, and personality development sessions. The cell also maintains strong relationships with leading companies across industries to ensure maximum placement opportunities for our students.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Briefcase className="h-6 sm:h-8 w-6 sm:w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900 text-base sm:text-lg">%80+</p>
                <p className="text-xs sm:text-sm text-gray-600">Placement Rate</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Building className="h-6 sm:h-8 w-6 sm:w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900 text-base sm:text-lg">20+</p>
                <p className="text-xs sm:text-sm text-gray-600">Recruiting Companies</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <BarChart className="h-6 sm:h-8 w-6 sm:w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900 text-base sm:text-lg">8 LPA</p>
                <p className="text-xs sm:text-sm text-gray-600">Highest Package</p>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader className="bg-blue-900 text-white">
                <CardTitle className="text-center text-base sm:text-lg">T&P Cell Contact</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 sm:h-6 w-5 sm:w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Prof. Janardhan Bhor</p>
                      <p className="text-xs sm:text-sm text-gray-600">Training & Placement Officer</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2 text-sm sm:text-base">
                      <Phone className="h-4 w-4" />
                      <span>+91 9876543210</span>
                    </p>
                    <p className="flex items-center gap-2 text-sm sm:text-base">
                      <Mail className="h-4 w-4" />
                      <span>placement@hitech.edu.in</span>
                    </p>
                    <p className="flex items-start gap-2 text-sm sm:text-base">
                      <MapPin className="h-4 w-4 mt-1" />
                      <span>Training & Placement Cell, Administrative Block, Ground Floor</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <section className="py-8 sm:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                Our Recruiters
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Our students are placed in top companies across various industries
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 sm:px-4"
                  >
                    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-28 sm:h-32 flex items-center justify-center group">
                      <div className="text-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 sm:h-12 mx-auto object-contain"
                        />
                        <div className="text-xs sm:text-sm text-gray-600 mt-2">
                          {partner.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MoU Table */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Memorandums of Understanding (MoUs) with Colleges
          </h3>
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-6 font-semibold text-sm sm:text-base">S.No.</th>
                  <th className="py-3 px-6 font-semibold text-sm sm:text-base">MoU with College</th>
                </tr>
              </thead>
              <tbody>
                {mouData.map((mou) => (
                  <tr key={mou.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-600 text-sm sm:text-base">{mou.id}</td>
                    <td className="py-4 px-6 text-gray-600 text-sm sm:text-base">{mou.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Training Programs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trainingPrograms.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">{program.title}</CardTitle>
                  <CardDescription>
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      {program.target}
                    </span>
                    <span className="inline-flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full ml-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {program.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm sm:text-base">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Placement Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-8 h-1 w-full bg-blue-200 hidden md:block"></div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative z-10">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm sm:text-base">1</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2 text-sm sm:text-base">Registration</h3>
                <p className="text-center text-xs sm:text-sm text-gray-600">Students register for placement through the T&P portal</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-8 h-1 w-full bg-blue-200 hidden md:block"></div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative z-10">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm sm:text-base">2</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2 text-sm sm:text-base">Pre-placement Training</h3>
                <p className="text-center text-xs sm:text-sm text-gray-600">Technical and soft skills training sessions</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-8 h-1 w-full bg-blue-200 hidden md:block"></div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative z-10">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm sm:text-base">3</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2 text-sm sm:text-base">Campus Drives</h3>
                <p className="text-center text-xs sm:text-sm text-gray-600">Companies visit campus for recruitment</p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative z-10">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm sm:text-base">4</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2 text-sm sm:text-base">Placement</h3>
                <p className="text-center text-xs sm:text-sm text-gray-600">Job offers and acceptance by students</p>
              </div>
            </div>
          </div>
          
          {/* <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">For Recruiters</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Companies interested in recruiting our students can contact the Training & Placement Cell. We provide excellent infrastructure for conducting recruitment drives, including seminar halls, computer labs, and interview rooms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="text-xs sm:text-sm">Request Campus Recruitment</Button>
              <Button variant="outline" className="text-xs sm:text-sm">Download Placement Brochure</Button>
            </div>
          </div> */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Placement;

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}