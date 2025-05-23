
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  ShieldAlert, 
  BadgeAlert, 
  Lightbulb, 
  BookMarked 
} from "lucide-react";

const cells = [
  {
    id: "women-grievance",
    name: "Women Grievance Cell",
    icon: <Users className="h-12 w-12 text-blue-700" />,
    description: "Dedicated to ensuring a safe and supportive environment for female students and staff members by addressing grievances and promoting gender equality.",
    objectives: [
      "To create a safe and secure environment for all female students and staff",
      "To address complaints related to sexual harassment and gender discrimination",
      "To organize awareness programs on women's rights and gender sensitivity",
      "To ensure compliance with AICTE norms regarding prevention of sexual harassment",
      "To provide counseling services for victims of harassment or discrimination"
    ],
    committee: [
      { name: "Dr. Anjali Sharma", role: "Chairperson", email: "anjali.sharma@hitech.edu.in" },
      { name: "Prof. Priya Patil", role: "Member Secretary", email: "priya.patil@hitech.edu.in" },
      { name: "Ms. Sunita Jadhav", role: "External Member", email: "sunita.jadhav@gmail.com" },
      { name: "Dr. Radhika Gokhale", role: "Faculty Representative", email: "radhika.gokhale@hitech.edu.in" },
      { name: "Ms. Sneha Patel", role: "Student Representative", email: "sneha.p@hitech.edu.in" }
    ]
  },
  {
    id: "anti-ragging",
    name: "Anti-ragging Committee",
    icon: <ShieldAlert className="h-12 w-12 text-blue-700" />,
    description: "Committed to preventing ragging in any form within the campus and ensuring a ragging-free environment for all students.",
    objectives: [
      "To ensure strict implementation of anti-ragging measures as per AICTE and UGC guidelines",
      "To monitor student activities to prevent incidents of ragging",
      "To take prompt and stringent action against reported ragging cases",
      "To organize anti-ragging awareness programs for new students",
      "To establish easy reporting mechanisms for ragging incidents"
    ],
    committee: [
      { name: "Dr. Rajesh Kumar", role: "Chairperson", email: "rajesh.kumar@hitech.edu.in" },
      { name: "Prof. Mahesh Singh", role: "Member Secretary", email: "mahesh.singh@hitech.edu.in" },
      { name: "Mr. Sanjay Deshmukh", role: "Police Representative", email: "sanjay.deshmukh@police.gov.in" },
      { name: "Dr. Anand Joshi", role: "Faculty Member", email: "anand.joshi@hitech.edu.in" },
      { name: "Mr. Rahul Patil", role: "Student Representative", email: "rahul.p@hitech.edu.in" }
    ]
  },
  {
    id: "internal-complaint",
    name: "Internal Complaint Committee",
    icon: <BadgeAlert className="h-12 w-12 text-blue-700" />,
    description: "Established as per the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, to address complaints of sexual harassment.",
    objectives: [
      "To create and maintain a safe working environment for all employees and students",
      "To implement the Sexual Harassment of Women at Workplace Act, 2013",
      "To provide a fair and timely mechanism for addressing sexual harassment complaints",
      "To recommend appropriate action against the guilty as per institutional rules",
      "To organize awareness programs on workplace harassment"
    ],
    committee: [
      { name: "Dr. Sarita Verma", role: "Presiding Officer", email: "sarita.verma@hitech.edu.in" },
      { name: "Prof. Deepika Sharma", role: "Member", email: "deepika.sharma@hitech.edu.in" },
      { name: "Adv. Meera Kulkarni", role: "External Legal Expert", email: "meera.kulkarni@legal.com" },
      { name: "Mr. Prakash Patil", role: "Administrative Staff", email: "prakash.patil@hitech.edu.in" },
      { name: "Ms. Vidya Mohan", role: "NGO Representative", email: "vidya.mohan@ngo.org" }
    ]
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship Cell",
    icon: <Lightbulb className="h-12 w-12 text-blue-700" />,
    description: "Fostering the spirit of entrepreneurship among students by providing resources, mentorship, and platforms for converting innovative ideas into successful ventures.",
    objectives: [
      "To promote entrepreneurial mindset among students",
      "To organize workshops, seminars, and interactive sessions with successful entrepreneurs",
      "To provide incubation support for student startups",
      "To facilitate industry-academia collaboration for entrepreneurial initiatives",
      "To connect student entrepreneurs with investors and funding opportunities"
    ],
    committee: [
      { name: "Prof. Vivek Mehta", role: "Coordinator", email: "vivek.mehta@hitech.edu.in" },
      { name: "Dr. Ravi Sharma", role: "Faculty Mentor", email: "ravi.sharma@hitech.edu.in" },
      { name: "Mr. Anil Khandelwal", role: "Industry Expert", email: "anil.khandelwal@industry.com" },
      { name: "Ms. Swati Desai", role: "Startup Mentor", email: "swati.desai@startup.com" },
      { name: "Mr. Kartik Sharma", role: "Student Coordinator", email: "kartik.s@hitech.edu.in" }
    ]
  },
  {
    id: "research",
    name: "Research & Innovation Cell",
    icon: <BookMarked className="h-12 w-12 text-blue-700" />,
    description: "Promoting research culture among faculty and students by facilitating research projects, publications, and innovations in various engineering domains.",
    objectives: [
      "To enhance research capabilities of faculty and students",
      "To promote publication of research papers in reputed journals",
      "To facilitate participation in conferences and seminars",
      "To secure research grants from funding agencies",
      "To encourage patenting of innovative ideas and products"
    ],
    committee: [
      { name: "Dr. Manish Tiwari", role: "Research Director", email: "manish.tiwari@hitech.edu.in" },
      { name: "Dr. Pradeep Kumar", role: "Coordinator", email: "pradeep.kumar@hitech.edu.in" },
      { name: "Prof. Sunita Gupta", role: "Faculty Member", email: "sunita.gupta@hitech.edu.in" },
      { name: "Dr. Rajiv Mishra", role: "External Research Advisor", email: "rajiv.mishra@research.org" },
      { name: "Ms. Priyanka Singh", role: "Research Assistant", email: "priyanka.singh@hitech.edu.in" }
    ]
  }
];

const CollegeCells = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="College Cells" 
        subtitle="Committees working for student welfare and institutional development" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cells.map((cell) => (
            <Card key={cell.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {cell.icon}
                </div>
                <CardTitle>{cell.name}</CardTitle>
                <CardDescription className="line-clamp-2">{cell.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`#${cell.id}`}>View Details</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Tabs defaultValue="women-grievance">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="women-grievance">Women Grievance</TabsTrigger>
            <TabsTrigger value="anti-ragging">Anti-ragging</TabsTrigger>
            <TabsTrigger value="internal-complaint">ICC</TabsTrigger>
            <TabsTrigger value="entrepreneurship">E-Cell</TabsTrigger>
            <TabsTrigger value="research">R&I Cell</TabsTrigger>
          </TabsList>
          
          {cells.map((cell) => (
            <TabsContent key={cell.id} value={cell.id} id={cell.id} className="mt-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{cell.name}</h2>
                  <p className="text-gray-700 mb-6">{cell.description}</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Objectives</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {cell.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Activities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-blue-700">Awareness Programs</h4>
                        <p className="text-gray-600 text-sm mt-1">Regular workshops and seminars to create awareness about relevant issues.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-blue-700">Counseling Sessions</h4>
                        <p className="text-gray-600 text-sm mt-1">One-to-one and group counseling sessions for affected individuals.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-blue-700">Complaint Redressal</h4>
                        <p className="text-gray-600 text-sm mt-1">Timely and fair investigation of complaints received.</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-medium text-blue-700">Training Programs</h4>
                        <p className="text-gray-600 text-sm mt-1">Specialized training sessions for students and staff members.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                    <div className="bg-blue-900 text-white p-4">
                      <h3 className="text-xl font-semibold">Committee Members</h3>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-4">
                        {cell.committee.map((member, index) => (
                          <li key={index} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                            <p className="font-medium text-blue-800">{member.name}</p>
                            <p className="text-gray-600 text-sm">{member.role}</p>
                            <p className="text-gray-500 text-sm">{member.email}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-50">
                      <h4 className="font-medium mb-2">Contact Information</h4>
                      <p className="text-sm text-gray-600">For complaints or inquiries:</p>
                      <p className="text-sm text-gray-600 font-medium">{cell.name.toLowerCase().replace(/\s+/g, '-')}@hitech.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">How to Report an Issue</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-blue-700 mb-2">Step 1: Submit a Written Complaint</h4>
              <p className="text-gray-600 text-sm">Submit a written complaint to the respective committee either in person or via email.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-blue-700 mb-2">Step 2: Initial Assessment</h4>
              <p className="text-gray-600 text-sm">The committee will review your complaint and may schedule a meeting with you for more details.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-blue-700 mb-2">Step 3: Resolution Process</h4>
              <p className="text-gray-600 text-sm">After investigation, the committee will take appropriate action and inform you of the outcome.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CollegeCells;
