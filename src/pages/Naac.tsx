
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Calendar, 
  Download, 
  CheckCircle, 
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Naac = () => {
  const ssrReports = [
    { id: 1, title: "SSR Report 2022-23", size: "12.5 MB", date: "June 15, 2023" },
    { id: 2, title: "SSR Report 2021-22", size: "10.8 MB", date: "May 28, 2022" },
    { id: 3, title: "SSR Report 2020-21", size: "9.6 MB", date: "June 3, 2021" },
    { id: 4, title: "SSR Report 2019-20", size: "8.7 MB", date: "May 22, 2020" },
  ];
  
  const aqarReports = [
    { id: 1, title: "AQAR Report 2022-23", size: "8.2 MB", date: "July 20, 2023" },
    { id: 2, title: "AQAR Report 2021-22", size: "7.5 MB", date: "July 15, 2022" },
    { id: 3, title: "AQAR Report 2020-21", size: "7.1 MB", date: "July 12, 2021" },
    { id: 4, title: "AQAR Report 2019-20", size: "6.8 MB", date: "July 10, 2020" },
  ];
  
  const academicCalendars = [
    { id: 1, title: "Academic Calendar 2023-24", size: "2.1 MB", date: "August 5, 2023" },
    { id: 2, title: "Academic Calendar 2022-23", size: "1.9 MB", date: "August 1, 2022" },
    { id: 3, title: "Academic Calendar 2021-22", size: "1.8 MB", date: "July 28, 2021" },
    { id: 4, title: "Academic Calendar 2020-21", size: "1.7 MB", date: "August 2, 2020" },
  ];
  
  const criteriaPoints = [
    {
      title: "Curricular Aspects",
      items: [
        "Curriculum design and development",
        "Academic flexibility",
        "Curriculum enrichment",
        "Feedback system"
      ]
    },
    {
      title: "Teaching-Learning and Evaluation",
      items: [
        "Student enrollment and profile",
        "Catering to student diversity",
        "Teaching-learning process",
        "Teacher profile and quality",
        "Evaluation process and reforms",
        "Student performance and learning outcomes"
      ]
    },
    {
      title: "Research, Innovations and Extension",
      items: [
        "Resource mobilization for research",
        "Innovation ecosystem",
        "Research publications and awards",
        "Extension activities",
        "Collaboration"
      ]
    },
    {
      title: "Infrastructure and Learning Resources",
      items: [
        "Physical facilities",
        "Library as a learning resource",
        "IT infrastructure",
        "Campus infrastructure maintenance"
      ]
    },
    {
      title: "Student Support and Progression",
      items: [
        "Student support",
        "Student progression",
        "Student participation and activities",
        "Alumni engagement"
      ]
    },
    {
      title: "Governance, Leadership and Management",
      items: [
        "Institutional vision and leadership",
        "Strategy development and deployment",
        "Faculty empowerment strategies",
        "Financial management",
        "Internal quality assurance system"
      ]
    },
    {
      title: "Institutional Values and Best Practices",
      items: [
        "Institutional values and social responsibilities",
        "Best practices",
        "Institutional distinctiveness"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="NAAC" 
        subtitle="National Assessment and Accreditation Council" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">About NAAC</h2>
            <p className="text-gray-700 mb-4">
              The National Assessment and Accreditation Council (NAAC) is an organization that assesses and accredits higher education Institutions in India. NAAC is an autonomous body funded by the University Grants Commission of Government of India.
            </p>
            <p className="text-gray-700 mb-4">
              Hi-Tech Institute of Technology is proud to be accredited by NAAC, which reflects our commitment to maintaining quality standards in education, research, and overall institutional performance.
            </p>
            <p className="text-gray-700">
              The NAAC accreditation process involves detailed self-assessment and peer evaluation of the institution's performance in various criteria such as curricular aspects, teaching-learning, research, infrastructure, student support, governance, and institutional values.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">NAAC Status</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Accreditation Grade</p>
                  <p className="text-3xl font-bold text-blue-900">B++</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">CGPA</p>
                  <p className="text-xl font-bold text-blue-900">2.92</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Validity Period</p>
                  <p>May 15, 2022 to May 14, 2027</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Cycle</p>
                  <p>2nd Cycle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">NAAC Assessment Criteria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteriaPoints.map((criterion, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="bg-blue-900 text-white">
                  <CardTitle className="text-lg">Criterion {index + 1}: {criterion.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {criterion.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Tabs defaultValue="ssr">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ssr">SSR Reports</TabsTrigger>
            <TabsTrigger value="aqar">AQAR Reports</TabsTrigger>
            <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ssr" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Self Study Report (SSR)</h3>
                <p className="text-gray-700 mb-6">
                  The Self Study Report (SSR) is a comprehensive document that provides information on institutional aspects as part of the NAAC accreditation process. It contains detailed information about the seven criteria of assessment.
                </p>
                
                <div className="space-y-4">
                  {ssrReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-700 mt-1" />
                        <div>
                          <p className="font-medium">{report.title}</p>
                          <p className="text-sm text-gray-500">Size: {report.size} | Uploaded: {report.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">SSR Preparation Process</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700">1. Data Collection</h4>
                    <p className="text-gray-600 text-sm mt-1">Gathering data from all departments and sections of the institution.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700">2. Criterion Analysis</h4>
                    <p className="text-gray-600 text-sm mt-1">Detailed analysis of the institution's performance in each criterion.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700">3. Documentation</h4>
                    <p className="text-gray-600 text-sm mt-1">Comprehensive documentation of all activities, achievements, and initiatives.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700">4. Review and Submission</h4>
                    <p className="text-gray-600 text-sm mt-1">Multiple reviews by IQAC and final submission to NAAC.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700">5. Peer Team Visit</h4>
                    <p className="text-gray-600 text-sm mt-1">Hosting NAAC peer team for physical verification and assessment.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="aqar" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Annual Quality Assurance Report (AQAR)</h3>
                <p className="text-gray-700 mb-6">
                  The Annual Quality Assurance Report (AQAR) is a yearly report submitted by accredited institutions to NAAC. It reflects the quality initiatives and achievements of the institution for each academic year.
                </p>
                
                <div className="space-y-4">
                  {aqarReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-700 mt-1" />
                        <div>
                          <p className="font-medium">{report.title}</p>
                          <p className="text-sm text-gray-500">Size: {report.size} | Uploaded: {report.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Quality Initiatives</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-700" />
                      <h4 className="font-medium text-blue-700">Faculty Development Programs</h4>
                    </div>
                    <p className="text-gray-600 text-sm">12 FDPs conducted in the academic year 2022-23 covering various technical and pedagogical aspects.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-700" />
                      <h4 className="font-medium text-blue-700">Research Publications</h4>
                    </div>
                    <p className="text-gray-600 text-sm">68 research papers published in Scopus/Web of Science indexed journals in 2022-23.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-700" />
                      <h4 className="font-medium text-blue-700">Industry Collaborations</h4>
                    </div>
                    <p className="text-gray-600 text-sm">8 new MoUs signed with industries for internships, training, and research projects.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-700" />
                      <h4 className="font-medium text-blue-700">Student Achievements</h4>
                    </div>
                    <p className="text-gray-600 text-sm">42 students received awards in various national-level technical competitions and cultural events.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Academic Calendar</h3>
                <p className="text-gray-700 mb-6">
                  The Academic Calendar serves as a comprehensive schedule for all academic activities throughout the year, including class commencement, examinations, holidays, and important events.
                </p>
                
                <div className="space-y-4">
                  {academicCalendars.map((calendar) => (
                    <div key={calendar.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-blue-700 mt-1" />
                        <div>
                          <p className="font-medium">{calendar.title}</p>
                          <p className="text-sm text-gray-500">Size: {calendar.size} | Uploaded: {calendar.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Current Academic Year: 2023-24</h3>
                
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-blue-900 text-white p-3">
                    <h4 className="font-medium">Important Dates</h4>
                  </div>
                  <div className="p-4">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Odd Semester Begins</td>
                          <td className="py-2">July 15, 2023</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Mid-term Examinations</td>
                          <td className="py-2">September 18-23, 2023</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Diwali Vacation</td>
                          <td className="py-2">October 20-30, 2023</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">End Semester Examinations</td>
                          <td className="py-2">November 25-December 10, 2023</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Winter Vacation</td>
                          <td className="py-2">December 15-31, 2023</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Even Semester Begins</td>
                          <td className="py-2">January 2, 2024</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Annual Technical Festival</td>
                          <td className="py-2">February 15-17, 2024</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Mid-term Examinations</td>
                          <td className="py-2">March 4-9, 2024</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">End Semester Examinations</td>
                          <td className="py-2">May 2-18, 2024</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">NAAC Coordinator Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">IQAC Cell</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
                    SK
                  </div>
                  <div>
                    <p className="font-medium">Dr. Sanjay Kumar</p>
                    <p className="text-gray-600">IQAC Coordinator</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-700"><strong>Email:</strong> iqac@hitech.edu.in</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +91 9876543210</p>
                  <p className="text-gray-700"><strong>Office:</strong> Administrative Block, First Floor, Room No. 105</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">NAAC Helpdesk</h3>
              <p className="text-gray-700 mb-4">
                For any queries related to NAAC accreditation, documentation, or information, please contact our NAAC helpdesk.
              </p>
              <Button className="w-full">Contact NAAC Helpdesk</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Naac;
