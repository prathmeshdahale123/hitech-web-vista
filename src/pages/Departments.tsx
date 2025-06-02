import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Users,
  BookOpen,
  Award,
  GraduationCap,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Departments = () => {
  const [expandedDept, setExpandedDept] = useState(null);

  const toggleFacultyList = (deptId) => {
    setExpandedDept((prev) => (prev === deptId ? null : deptId));
  };

  const departments = [
    {
      id: "cse",
      name: "Computer Science & Engineering",
      icon: <BookOpen className="h-12 w-12 text-blue-700" />,
      description:
        "Computer Science department provides cutting-edge education in software development, algorithms, and computer systems.",
      established: "2001",
      faculty: 12,
      laboratories: 7,
      courses: ["B.Tech in Computer Science"],
      hod: "Prof. P. M. Mohite",
      facultyList: [
        { name: "Prof. P. M. Mohite", designation: "HOD" },
        { name: "Prof. Sujata Sonawane", designation: "Assistant Professor" },
        { name: "Prof. Smitha Khajekar", designation: "Assistant Professor" },
        { name: "Prof. Lata Jadhav", designation: "Assistant Professor" },
        { name: "Prof. Renuka Zalte", designation: "Assistant Professor" },
        { name: "Prof. Komal Pinnalwar", designation: "Assistant Professor" },
        { name: "Prof. V.A. Husev", designation: "Assistant Professor" },
        { name: "Prof. Keshav Mujmule", designation: "Assistant Professor" },
        { name: "Prof. Bhakti Chudiwal", designation: "Assistant Professor" },
        { name: "Prof. Ashwini Kachare", designation: "Assistant Professor" },
        { name: "Prof. S.E. Ingle", designation: "Assistant Professor" },
      ],
    },
    {
      id: "aiml",
      name: "CSE (AI & ML)",
      icon: <Award className="h-12 w-12 text-blue-700" />,
      description:
        "Artificial Intelligence and Machine Learning specialization focuses on intelligent systems, data science, and advanced computing.",
      established: "2022",
      faculty: 6,
      laboratories: 4,
      courses: ["B.Tech in CSE (AI & ML)"],
      hod: "Prof. Sandip Eknathrao Ingle",
      facultyList: [
        { name: "Prof. Sandip Eknathrao Ingle", designation: "HOD & Assistant Professor" },
        { name: "Prof. Smitha Khajekar", designation: "Assistant Professor" },
        { name: "Prof. Waseem Siddiqui", designation: "Assistant Professor" },
        { name: "Prof. Samiksha Nikam", designation: "Assistant Professor" },
        { name: "Prof. Syed Irfan", designation: "Assistant Professor" },
        { name: "Prof. Pooja Sable", designation: "Assistant Professor" },
      ],
    },
    {
      id: "mechanical",
      name: "Mechanical Engineering",
      icon: <GraduationCap className="h-12 w-12 text-blue-700" />,
      description:
        "Mechanical Engineering department offers a blend of core mechanical principles with modern automation and manufacturing techniques.",
      established: "2001",
      faculty: 14,
      laboratories: 10,
      courses: ["B.Tech in Mechanical Engineering", "M.Tech in CAD/CAM"],
      hod: "Prof. A. S. Adkine",
      facultyList: [
        { name: "Prof. A. S. Adkine", designation: "HOD" },
        { name: "Prof. Govind Dhage", designation: "Assistant Professor" },
        { name: "Prof. Ashutosh Yetalkar", designation: "Assistant Professor" },
        { name: "Prof. Babarao Kandharkar", designation: "Assistant Professor" },
        { name: "Prof. Sohel Shaikh", designation: "Assistant Professor" },
        { name: "Prof. Janardhan Bhor", designation: "Assistant Professor" },
        { name: "Prof. Subodh Pawar", designation: "Assistant Professor" },
        { name: "Prof. Mangesh Lendgule", designation: "Assistant Professor" },
        { name: "Prof. Kanishk Jawale", designation: "Assistant Professor" },
        { name: "Prof. A.S Holkar", designation: "Assistant Professor" },
        { name: "Prof. N.V. Athavale", designation: "Assistant Professor" },
        { name: "Prof. A.M. Ganeshpure", designation: "Assistant Professor" },
        { name: "Dr. Laxman Mishra", designation: "Assistant Professor" },
        { name: "Dr. T. Govardhan", designation: "Assistant Professor" },
      ],
    },
    {
      id: "civil",
      name: "Civil Engineering",
      icon: <Building2 className="h-12 w-12 text-blue-700" />,
      description:
        "Civil Engineering department focuses on design, construction and maintenance of infrastructure projects with emphasis on sustainable development.",
      established: "2010",
      faculty: 10,
      laboratories: 6,
      courses: ["B.Tech in Civil Engineering"],
      hod: "Prof. R. F. Siddiqui",
      facultyList: [
        { name: "Prof. R. F. Siddiqui", designation: "HOD" },
        { name: "Dr. Geetanjali Kaushik", designation: "Associate Professor" },
        { name: "Prof. Kalyani Kondekar", designation: "Assistant Professor" },
        { name: "Prof. Snehal Karad", designation: "Assistant Professor" },
        { name: "Prof. Shivmangal Janwar", designation: "Assistant Professor" },
        { name: "Prof. Rishikesh Aher", designation: "Assistant Professor" },
        { name: "Prof. Kailash Charkha", designation: "Assistant Professor" },
        { name: "Prof. Mohammad Afifuddin", designation: "Assistant Professor" },
        { name: "Prof. Shubhangi Shejul", designation: "Assistant Professor" },
        { name: "Prof. Ranvijay Singh", designation: "Assistant Professor" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader
        title="Academic Departments"
        subtitle="Excellence in Engineering Education"
      />

      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <Card
              key={dept.id}
              className="hover:shadow-lg transition-shadow flex flex-col min-h-[350px]"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{dept.icon}</div>
                <CardTitle>{dept.name}</CardTitle>
                <CardDescription>Established {dept.established}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">{dept.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>{dept.faculty} Faculty</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span>{dept.laboratories} Labs</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/departments/${dept.id}`}>Department Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Tabs defaultValue="civil">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {departments.map((dept) => (
                <TabsTrigger key={dept.id} value={dept.id}>
                  {dept.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {departments.map((dept) => (
              <TabsContent key={dept.id} value={dept.id} className="mt-6" id={dept.id}>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">{dept.name}</h2>
                    <p className="text-gray-600 mb-6">{dept.description}</p>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Department Overview</h3>
                      <div className="grid grid-cols-2 gap-y-4 text-gray-700">
                        <div>
                          <p className="font-medium">Established</p>
                          <p>{dept.established}</p>
                        </div>
                        <div>
                          <p className="font-medium">HOD</p>
                          <p>{dept.hod}</p>
                        </div>
                        <div>
                          <p className="font-medium">Faculty Members</p>
                          <p>{dept.faculty}</p>
                        </div>
                        <div>
                          <p className="font-medium">Laboratories</p>
                          <p>{dept.laboratories}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Programs Offered</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {dept.courses.map((course, index) => (
                            <li key={index}>{course}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-3">Laboratories</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <div
                              key={index}
                              className="bg-white p-4 rounded-lg shadow-sm"
                            >
                              <h4 className="font-medium text-blue-700">
                                {dept.name} Lab {index + 1}
                              </h4>
                              <p className="text-gray-600 text-sm mt-1">
                                Advanced equipment and tools for practical learning.
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Card className="sticky top-24">
                      <CardHeader>
                        <CardTitle className="text-center">Faculty</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {dept.facultyList
                          .slice(0, expandedDept === dept.id ? dept.facultyList.length : 4)
                          .map((faculty, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 p-3 rounded-lg"
                            >
                              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">
                                {faculty.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <div>
                                <h4 className="font-medium">{faculty.name}</h4>
                                <p className="text-sm text-gray-600">
                                  {faculty.designation}
                                </p>
                              </div>
                            </div>
                          ))}

                        {dept.facultyList.length > 4 && (
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => toggleFacultyList(dept.id)}
                          >
                            {expandedDept === dept.id
                              ? "Show Less"
                              : "View All Faculty"}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Departments;