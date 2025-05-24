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
  // Sample placement data
  const placementStats = [
    { year: "2022-23", eligibleStudents: 280, placed: 241, highestPackage: 24, averagePackage: 6.8 },
    { year: "2021-22", eligibleStudents: 265, placed: 220, highestPackage: 22, averagePackage: 6.5 },
    { year: "2020-21", eligibleStudents: 255, placed: 205, highestPackage: 20, averagePackage: 6.2 },
    { year: "2019-20", eligibleStudents: 240, placed: 190, highestPackage: 18, averagePackage: 5.8 },
  ];
  
  // Sample recruiting companies (major recruiters)
  const recruiters = [
    { name: "Persistent Systems", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "TCS", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "Infosys", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "Wipro", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "Tech Mahindra", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "Capgemini", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "Cognizant", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "HCL Technologies", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "L&T Infotech", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "Accenture", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "IBM", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "IT" },
    { name: "Bajaj Auto", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "Manufacturing" },
    { name: "Mahindra & Mahindra", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "Manufacturing" },
    { name: "Tata Motors", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "Manufacturing" },
    { name: "Bharat Forge", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "Manufacturing" },
    { name: "Godrej & Boyce", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=100&auto=format&fit=crop&q=80", category: "Manufacturing" },
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="Training & Placement Cell" 
        subtitle="Bridging the gap between academia and industry" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">About T&P Cell</h2>
            <p className="text-gray-700 mb-4">
              The Training and Placement Cell at Hi-Tech Institute of Technology plays a pivotal role in bridging the gap between academia and industry. It focuses on enhancing student employability through comprehensive training programs and facilitating campus recruitment drives.
            </p>
            <p className="text-gray-700 mb-4">
              Our dedicated team works tirelessly to prepare students for the competitive job market by organizing various skill development programs, mock interviews, group discussions, and personality development sessions. The cell also maintains strong relationships with leading companies across industries to ensure maximum placement opportunities for our students.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Briefcase className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900">85%+</p>
                <p className="text-sm text-gray-600">Placement Rate</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Building className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900">100+</p>
                <p className="text-sm text-gray-600">Recruiting Companies</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <BarChart className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900">24 LPA</p>
                <p className="text-sm text-gray-600">Highest Package</p>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardHeader className="bg-blue-900 text-white">
                <CardTitle className="text-center">T&P Cell Contact</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium">Prof. Janardhan Bhor</p>
                      <p className="text-sm text-gray-600">Training & Placement Officer</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+91 9876543210</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>placement@hitech.edu.in</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1" />
                      <span>Training & Placement Cell, Administrative Block, Ground Floor</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Placement Statistics</h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-900 text-white">
                  <TableHead>Academic Year</TableHead>
                  <TableHead>Eligible Students</TableHead>
                  <TableHead>Placed Students</TableHead>
                  <TableHead>Placement %</TableHead>
                  <TableHead>Highest Package (LPA)</TableHead>
                  <TableHead>Average Package (LPA)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {placementStats.map((stat, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <TableCell className="font-medium">{stat.year}</TableCell>
                    <TableCell>{stat.eligibleStudents}</TableCell>
                    <TableCell>{stat.placed}</TableCell>
                    <TableCell>{Math.round((stat.placed / stat.eligibleStudents) * 100)}%</TableCell>
                    <TableCell>₹ {stat.highestPackage} LPA</TableCell>
                    <TableCell>₹ {stat.averagePackage} LPA</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {/* Branch-wise statistics visualization - this would be a chart in a real implementation */}
          <div className="mt-8 p-8 bg-gray-100 rounded-lg flex items-center justify-center h-64">
            <p className="text-gray-500">[Branch-wise Placement Statistics Chart]</p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Recruiters</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {recruiters.map((recruiter, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  {/* This would be actual company logos in production */}
                  <Building className="h-8 w-8 text-gray-600" />
                </div>
                <p className="text-center text-sm font-medium">{recruiter.name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Training Programs</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
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
                  <p className="text-gray-700">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Placement Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-8 h-1 w-full bg-blue-200 hidden md:block"></div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">1</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2">Registration</h3>
                <p className="text-center text-sm text-gray-600">Students register for placement through the T&P portal</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-8 h-1 w-full bg-blue-200 hidden md:block"></div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">2</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2">Pre-placement Training</h3>
                <p className="text-center text-sm text-gray-600">Technical and soft skills training sessions</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-8 h-1 w-full bg-blue-200 hidden md:block"></div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">3</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2">Campus Drives</h3>
                <p className="text-center text-sm text-gray-600">Companies visit campus for recruitment</p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-3">4</div>
                <h3 className="text-center font-semibold text-blue-800 mb-2">Placement</h3>
                <p className="text-center text-sm text-gray-600">Job offers and acceptance by students</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">For Recruiters</h3>
            <p className="text-gray-700 mb-4">
              Companies interested in recruiting our students can contact the Training & Placement Cell. We provide excellent infrastructure for conducting recruitment drives, including seminar halls, computer labs, and interview rooms.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Button>Request Campus Recruitment</Button>
              <Button variant="outline">Download Placement Brochure</Button>
            </div>
          </div>
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
