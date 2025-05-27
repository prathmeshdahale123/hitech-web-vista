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
      { name: "B. N. Vispute", title: "Assistant Professor", post: "Chairman (Presiding Officer)", email: "b.n.vispute@hitech.edu.in" },
      { name: "Mrs. Harshala E Jadhav", title: "Social Worker", post: "Member", email: "harshala.jadhav@hitech.edu.in" },
      { name: "Dr. Krupal Pawar", title: "Principal", post: "Member", email: "krupal.pawar@hitech.edu.in" },
      { name: "Prof. Kalyani Kondekar", title: "Assistant Professor", post: "Member", email: "kalyani.kondekar@hitech.edu.in" },
      { name: "Prof. Lata Jadhav", title: "Assistant Professor", post: "Member", email: "lata.jadhav@hitech.edu.in" },
      { name: "K. R. Ghule", title: "Assistant Professor", post: "Member", email: "k.r.ghule@hitech.edu.in" },
      { name: "Supriya Kolekar", title: "FE, Student", post: "Student Representative", email: "supriya.kolekar@hitech.edu.in" }
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
      { name: "Dr. N. S. Sirdeshpande", role: "Principal", email: "n.s.sirdeshpande@hitech.edu.in" },
      { name: "Adv. Dipali Jape", role: "Advocate", email: "dipali.jape@hitech.edu.in" },
      { name: "Prof. R. F. Siddiqui", role: "Education", email: "r.f.siddiqui@hitech.edu.in" },
      { name: "Mr. Umbare Sir", role: "Police Representative", email: "umbare.sir@police.gov.in" },
      { name: "Mr. R. K. Bharat", role: "Media Representative", email: "r.k.bharat@hitech.edu.in" },
      { name: "Dr. Sarika Kotgire", role: "Health Representative", email: "sarika.kotgire@hitech.edu.in" },
      { name: "Prof. Amol S. Adkine", role: "Education", email: "amol.s.adkine@hitech.edu.in" },
      { name: "Mr. Prashant Kadam", role: "Non-Govt. Organization Representative", email: "prashant.kadam@hitech.edu.in" },
      { name: "Mr. Sahebrao Shelke", role: "Parent Representative", email: "sahebrao.shelke@hitech.edu.in" },
      { name: "Miss. Mayuri Hiwale", role: "Student Representative", email: "mayuri.hiwale@hitech.edu.in" },
      { name: "Mr. Bhagchand B Jadhav", role: "Non-Teaching Representative", email: "bhagchand.jadhav@hitech.edu.in" },
      { name: "Mr. Aftab Shaikh", role: "Student Representative", email: "aftab.shaikh@hitech.edu.in" }
    ]
  },
  {
    id: "internal-complaint",
    name: "Internal Complaint Committee",
    icon: <BadgeAlert className="h-12 w-12 text-blue-700" />,
    description: "Focused on addressing complaints related to harassment and ensuring a safe and inclusive environment for all members of the institute.",
    objectives: [
      "To prevent and address issues of harassment and discrimination",
      "To ensure a safe and respectful workplace for all",
      "To conduct inquiries into complaints in a fair and confidential manner",
      "To promote gender sensitization and awareness programs",
      "To comply with legal and regulatory frameworks"
    ],
    committee: [
      { name: "Prof. K. S. Pinnalwar", title: "Teaching Faculty", post: "Member", email: "k.s.pinnalwar@hitech.edu.in" },
      { name: "Dr. B. P. Pingle", title: "Professor", post: "Chair Person", email: "b.p.pingle@hitech.edu.in" },
      { name: "Prof. Kalyani Kondekar", title: "Teaching Faculty", post: "Member", email: "kalyani.kondekar@hitech.edu.in" },
      { name: "P. B. Jogas", title: "Non-Teaching Faculty", post: "Member", email: "p.b.jogas@hitech.edu.in" },
      { name: "B. R. Nikam", title: "Non-Teaching Faculty", post: "Member", email: "b.r.nikam@hitech.edu.in" },
      { name: "Miss. Radha Giri", title: "Student", post: "Student", email: "radha.giri@hitech.edu.in" },
      { name: "Priyanka Khamgaonkar", title: "Student", post: "Student", email: "priyanka.khamgaonkar@hitech.edu.in" },
      { name: "Mangal Kivansara", title: "Non-Teaching Faculty", post: "Member", email: "mangal.kivansara@hitech.edu.in" },
      { name: "Miss. Aarti Shinde", title: "Student", post: "Student", email: "aarti.shinde@hitech.edu.in" }
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
    id: "grievance-redressal",
    name: "Grievance Redressal Committee",
    icon: <BookMarked className="h-12 w-12 text-blue-700" />,
    description: "Dedicated to addressing and resolving grievances of students, faculty, and staff to ensure a fair and conducive environment.",
    objectives: [
      "To provide a platform for addressing grievances in a transparent manner",
      "To ensure timely resolution of issues raised by stakeholders",
      "To maintain fairness and impartiality in grievance handling",
      "To promote a harmonious academic and administrative environment",
      "To comply with regulatory guidelines for grievance redressal"
    ],
    committee: [
      { name: "Dr. N. S. Sirdeshpande", role: "Principal", post: "Chairman", contact: "8459404542", email: "n.s.sirdeshpande@hitech.edu.in" },
      { name: "Prof. Amol S. Adkine", role: "H.O.D MECH", post: "Member", contact: "9545333318", email: "amol.s.adkine@hitech.edu.in" },
      { name: "Prof. Pratap M. Mohite", role: "H.O.D. CSE", post: "Member", contact: "7276120805", email: "pratap.mohite@hitech.edu.in" },
      { name: "Prof. R. F. Siddiqui", role: "H.O.D. CIVIL", post: "Member", contact: "9860617213", email: "r.f.siddiqui@hitech.edu.in" },
      { name: "Prof. Bhavana P. Pingle", role: "H.O.D. FE", post: "Member", contact: "8805020507", email: "bhavana.pingle@hitech.edu.in" },
      { name: "Prof. S. L. Sonawane", role: "Teaching Representative", post: "Member", contact: "8007113636", email: "s.l.sonawane@hitech.edu.in" },
      { name: "Rushikesh Prembhare", role: "Student Representative", post: "Member", contact: "8378864100", email: "rushikesh.prembhare@hitech.edu.in" },
      { name: "University Nominee", role: "Ombudsman", post: "Member", contact: "Waiting From University", email: "ombudsman@hitech.edu.in" }
    ]
  },
  {
    id: "sc-st",
    name: "SC/ST Committee",
    icon: <BookMarked className="h-12 w-12 text-blue-700" />,
    description: "Committed to promoting the welfare of SC/ST students and staff, addressing their grievances, and ensuring equal opportunities.",
    objectives: [
      "To ensure equal opportunities for SC/ST students and staff",
      "To address grievances specific to SC/ST communities",
      "To promote awareness about SC/ST welfare schemes and policies",
      "To facilitate scholarships and support programs",
      "To foster an inclusive environment free from discrimination"
    ],
    committee: [
      { name: "Dr. N. S. Sirdeshpande", title: "Chairman", post: "Chairman", email: "n.s.sirdeshpande@hitech.edu.in" },
      { name: "Prof. Govind Dhage", title: "Member", post: "Member", email: "govind.dhage@hitech.edu.in" },
      { name: "Prof. Sujata Sonawane", title: "Member", post: "Member", email: "sujata.sonawane@hitech.edu.in" },
      { name: "Prof. A. D. Yetalkar", title: "Member", post: "Member", email: "a.d.yetalkar@hitech.edu.in" },
      { name: "Prof. Sanjay Sambhalkar", title: "Member (Social Worker)", post: "Member", email: "sanjay.sambhalkar@hitech.edu.in" }
    ]
  },
  {
    id: "industry-institute-interaction",
    name: "Industry Institute Interaction Cell (IIIC)",
    icon: <BookMarked className="h-12 w-12 text-blue-700" />,
    description: "Bridging the gap between industry and academia by fostering collaborations, internships, and industry-oriented projects.",
    objectives: [
      "To strengthen ties between the institute and industry",
      "To facilitate internships and industry exposure for students",
      "To organize workshops and guest lectures by industry experts",
      "To promote industry-sponsored research and projects",
      "To enhance employability through skill development programs"
    ],
    committee: [
      { name: "Dr. N. S. Sirdeshpande", role: "Chairperson", email: "n.s.sirdeshpande@hitech.edu.in" },
      { name: "Prof. Janardhan Bhor", role: "Member", email: "janardhan.bhor@hitech.edu.in" },
      { name: "Prof. Sohel Shaikh", role: "Member", email: "sohel.shaikh@hitech.edu.in" },
      { name: "Prof. Rishikesh Aher", role: "Member", email: "rishikesh.aher@hitech.edu.in" },
      { name: "Prof. Sujata L. Sonawane", role: "Member", email: "sujata.l.sonawane@hitech.edu.in" }
    ]
  },
  {
    id: "institute-innovation",
    name: "Institute Innovation Cell (IIC)",
    icon: <BookMarked className="h-12 w-12 text-blue-700" />,
    description: "Fostering innovation and entrepreneurship among students and faculty through structured programs and activities.",
    objectives: [
      "To promote a culture of innovation and entrepreneurship",
      "To support startup initiatives and intellectual property rights",
      "To organize innovation-driven workshops and competitions",
      "To facilitate internships and industry collaborations",
      "To contribute to national innovation rankings like ARIIA and NIRF"
    ],
    committee: [
      { name: "Prof. Janardhan Bhor", role: "Teaching", post: "President", email: "janardhan.bhor@hitech.edu.in" },
      { name: "Prof. C. P. Jadhav", role: "Teaching", post: "Social Media", email: "c.p.jadhav@hitech.edu.in" },
      { name: "Prof. K. S. Gore", role: "Teaching", post: "Convener", email: "k.s.gore@hitech.edu.in" },
      { name: "Prof. S. L. Sonawane", role: "Teacher", post: "Innovation Activity Coordinator", email: "s.l.sonawane@hitech.edu.in" },
      { name: "Prof. S. T. Khajekar", role: "Teacher", post: "Internship Activity Coordinator", email: "s.t.khajekar@hitech.edu.in" },
      { name: "Prof. K. S. Kondekar", role: "Teacher", post: "IPR Activity Coordinator", email: "k.s.kondekar@hitech.edu.in" },
      { name: "Prof. A. D. Yetalkar", role: "Teacher", post: "Member", email: "a.d.yetalkar@hitech.edu.in" },
      { name: "Prof. P. R. Muley", role: "Teacher", post: "ARIIA Coordinator", email: "p.r.muley@hitech.edu.in" },
      { name: "Prof. R. S. Aher", role: "Teacher", post: "NIRF Coordinator", email: "r.s.aher@hitech.edu.in" },
      { name: "Prof. S. K. Shaikh", role: "Teaching", post: "Start-up Coordinator", email: "s.k.shaikh@hitech.edu.in" },
      { name: "Prof. G. Kaushik", role: "Teaching", post: "Member", email: "g.kaushik@hitech.edu.in" },
      { name: "Mr. S. Borde", role: "Librarian", post: "Member", email: "s.borde@hitech.edu.in" },
      { name: "Mr. Jyotiba Patil", role: "External Expert", post: "Member", email: "jyotiba.patil@hitech.edu.in" }
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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="women-grievance">Women Grievance</TabsTrigger>
            <TabsTrigger value="anti-ragging">Anti-ragging</TabsTrigger>
            <TabsTrigger value="internal-complaint">ICC</TabsTrigger>
            <TabsTrigger value="entrepreneurship">E-Cell</TabsTrigger>
            <TabsTrigger value="grievance-redressal">Grievance Redressal</TabsTrigger>
            <TabsTrigger value="sc-st">SC/ST Committee</TabsTrigger>
            <TabsTrigger value="industry-institute-interaction">IIIC</TabsTrigger>
            <TabsTrigger value="institute-innovation">IIC</TabsTrigger>
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
                            {member.role && <p className="text-gray-600 text-sm">{member.role}</p>}
                            {member.title && <p className="text-gray-600 text-sm">{member.title}</p>}
                            {member.post && <p className="text-gray-600 text-sm">{member.post}</p>}
                            {member.contact && <p className="text-gray-600 text-sm">{member.contact}</p>}
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