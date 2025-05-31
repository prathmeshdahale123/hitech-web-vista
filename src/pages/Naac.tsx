import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  FileText, 
  Calendar, 
  Download, 
  CheckCircle, 
  BarChart3,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Naac = () => {
  const ssrReports = [
    { id: 1, title: "SSR Report 2022-23", size: "12.5 MB", date: "June 15, 2023", pdfUrl: "/public/NAAC-pdf/ssr-2022-23.pdf" },
    { id: 2, title: "SSR Report 2021-22", size: "10.8 MB", date: "May 28, 2022", pdfUrl: "/public/NAAC-pdf/ssr-2021-22.pdf" },
    { id: 3, title: "SSR Report 2020-21", size: "9.6 MB", date: "June 3, 2021", pdfUrl: "/public/NAAC-pdf/ssr-2020-21.pdf" },
    { id: 4, title: "SSR Report 2019-20", size: "8.7 MB", date: "May 22, 2020", pdfUrl: "/public/NAAC-pdf/ssr-2019-20.pdf" },
  ];
  
  const aqarReports = [
    { id: 1, title: "AQAR Report 2022-23", size: "8.2 MB", date: "July 20, 2023", pdfUrl: "/public/NAAC-pdf/aqar-2022-23.pdf" },
    { id: 2, title: "AQAR Report 2021-22", size: "7.5 MB", date: "July 15, 2022", pdfUrl: "/public/NAAC-pdf/aqar-2021-22.pdf" },
    { id: 3, title: "AQAR Report 2020-21", size: "7.1 MB", date: "July 12, 2021", pdfUrl: "/public/NAAC-pdf/aqar-2020-21.pdf" },
    { id: 4, title: "AQAR Report 2019-20", size: "6.8 MB", date: "July 10, 2020", pdfUrl: "/public/NAAC-pdf/aqar-2019-20.pdf" },
  ];
  
  const academicCalendars = [
    { id: 1, title: "Academic Calendar 2023-24", size: "2.1 MB", date: "August 5, 2023", pdfUrl: "/public/NAAC-pdf/calendar-2023-24.pdf" },
    { id: 2, title: "Academic Calendar 2022-23", size: "1.9 MB", date: "August 1, 2022", pdfUrl: "/public/NAAC-pdf/calendar-2022-23.pdf" },
    { id: 3, title: "Academic Calendar 2021-22", size: "1.8 MB", date: "July 28, 2021", pdfUrl: "/public/NAAC-pdf/calendar-2021-22.pdf" },
    { id: 4, title: "Academic Calendar 2020-21", size: "1.7 MB", date: "August 2, 2020", pdfUrl: "/public/NAAC-pdf/calendar-2020-21.pdf" },
  ];
  
  const iqacDocuments = [
    { id: 1, title: "IQAC Guidelines", pdfUrl: "/public/NAAC-pdf/IQAC_Guidelines.pdf" },
    { id: 2, title: "Minutes of First Meeting (2019-20)", pdfUrl: "public/NAAC-pdf/Minutes of First meetine.pdf" },
    { id: 3, title: "Minutes of Second Meeting (2019-20)", pdfUrl: "public/NAAC-pdf/Minutes of Second meetine.pdf" },
    { id: 4, title: "Minutes of First Meeting (2022-23)", pdfUrl: "public/NAAC-pdf/Minutes of First meetine 22-23.pdf" },
    { id: 5, title: "Minutes of Second Meeting (2022-23)", pdfUrl: "public/NAAC-pdf/Minutes of Second meetine 22-23.pdf" },
    { id: 6, title: "Minutes of Third Meeting (2022-23)", pdfUrl: "public/NAAC-pdf/Minutes of third meetine 22-23.pdf" },
    { id: 7, title: "Minutes of Fourth Meeting (2022-23)", pdfUrl: "public/NAAC-pdf/Minutes of fourth meetine 22-23.pdf" },
    { id: 8, title: "IIQA Document", pdfUrl: "" },
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

  const iqacMembers = [
    { sr: 1, name: "Prof. Govind S. Dhage", designation: "Principal", position: "Chairperson" },
    { sr: 2, name: "Mr. Aman E. Jadhav", designation: "Joint Secretary, BGPS", position: "Member" },
    { sr: 3, name: "Prof. R. F. Siddiqui", designation: "Assistant Professor and HOD (Civil Engineering)", position: "Member" },
    { sr: 4, name: "Prof. P. M. Mohite", designation: "Assistant Professor and HOD (Computer Science and Engineering)", position: "Member" },
    { sr: 5, name: "Prof. B. P. Pingle", designation: "Assistant Professor and HOD (First Year Department)", position: "Member" },
    { sr: 6, name: "Prof. S. E. Ingale", designation: "Assistant Professor (Computer Science and Engineering)", position: "Member" },
    { sr: 7, name: "Prof. C. P. Jadhav", designation: "Assistant Professor (First Year Department)", position: "Member" },
    { sr: 8, name: "Prof. R. S. Aher", designation: "Assistant Professor (Civil Engineering)", position: "Member" },
    { sr: 9, name: "Prof. J. K. Bhor", designation: "Assistant Professor and in-charge T&P", position: "Member" },
    { sr: 10, name: "Prof. S. T. Khajekar", designation: "Assistant Professor (Computer Science and Engineering)", position: "Member" },
    { sr: 11, name: "Mr. B. B. Jadhav", designation: "Administrative Officer", position: "Member" },
    { sr: 12, name: "Mrs. Vimal Bodkhe", designation: "Nominee from Local Society", position: "Member" },
    { sr: 13, name: "Mr. Suyash Yadav", designation: "Nominee from Students", position: "Member" },
    { sr: 14, name: "Mr. Mahendra Walunjkar", designation: "Nominee from Alumni", position: "Member" },
    { sr: 15, name: "Mr. Navnath Dhesale", designation: "Nominee from Employers", position: "Member" },
    { sr: 16, name: "Mr. Jotiba Patil", designation: "Nominee from Industrialists", position: "Member" },
    { sr: 17, name: "Mr. Shankar Pawar", designation: "Parent Representative - Nominee from Stakeholders", position: "Member" },
    { sr: 18, name: "Prof. Amol S. Adkine", designation: "Assistant Professor and HOD (Mechanical Engineering)", position: "Coordinator" },
  ];

  const dvvData = [
    { id: 1, title: "Number of Courses Offered (Last 5 Years)", value: "Data not provided", pdfUrl: "/public/NAAC-pdf/dvv-courses-offered.pdf" },
    { id: 2, title: "Number of Self-Financed Programs", value: "Data not provided", pdfUrl: "/public/NAAC-pdf/dvv-self-financed-programs.pdf" },
    { id: 3, title: "Total Number of Classrooms and Seminar Halls", value: "Data not provided", pdfUrl: "/public/NAAC-pdf/dvv-classrooms-seminar-halls.pdf" },
    { id: 4, title: "Total Expenditure Excluding Salary (INR in Lakhs)", value: "Data not provided", pdfUrl: "/public/NAAC-pdf/dvv-expenditure.pdf" },
    { id: 5, title: "Number of Computers", value: "Data not provided", pdfUrl: "/public/NAAC-pdf/dvv-computers.pdf" },
    { id: 6, title: "Unit Cost of Education (Including Salary, INR in Lakhs)", value: "Data not provided", pdfUrl: "/public/NAAC-pdf/dvv-unit-cost-including-salary.pdf" },
    { id: 7, title: "Unit Cost of Education (Excluding Salary, INR in Lakhs)", value: "Data not provided", pdfUrl: "/public/NAAC-pdf/dvv-unit-cost-excluding-salary.pdf" },
  ];

  const handleDownload = (url, title) => {
    try {
      console.log(`Downloading ${title} from ${url}`);
    } catch (error) {
      console.error(`Error downloading ${title}:`, error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="NAAC" 
        subtitle="National Assessment and Accreditation Council" 
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 flex-grow">
        <div className=" gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">About NAAC</h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              The National Assessment and Accreditation Council (NAAC) is an organization that assesses and accredits higher education institutions in India. NAAC is an autonomous body funded by the University Grants Commission of Government of India. Hi-Tech Institute of Technology is proud to be accredited by NAAC, which reflects our commitment to maintaining quality standards in education, research, and overall institutional performance. The NAAC accreditation process involves detailed self-assessment and peer evaluation of the institution's performance in various criteria such as curricular aspects, teaching-learning, research, infrastructure, student support, governance, and institutional values.
            </p>
          </div>
        </div>
        
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">NAAC Assessment Criteria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {criteriaPoints.map((criterion, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="bg-blue-900 text-white">
                  <CardTitle className="text-base sm:text-lg">Criterion {index + 1}: {criterion.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
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
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0">
            <TabsTrigger value="ssr" className="text-xs sm:text-sm">SSR Reports</TabsTrigger>
            {/* <TabsTrigger value="aqar" className="text-xs sm:text-sm">AQAR Reports</TabsTrigger> */}
            <TabsTrigger value="calendar" className="text-xs sm:text-sm">Academic Calendar</TabsTrigger>
            <TabsTrigger value="dvv" className="text-xs sm:text-sm">DVV Data</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ssr" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Self Study Report (SSR)</h3>
                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                  The Self Study Report (SSR) is a comprehensive document that provides information on institutional aspects as part of the NAAC accreditation process. It contains detailed information about the seven criteria of assessment.
                </p>
                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 text-xs sm:text-sm"
                    asChild
                  >
                    <a
                      href="https://www.youtube.com/watch?v=8lgD2KZ05sE"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Watch NAAC peer visit video on YouTube"
                    >
                      <Youtube className="h-4 w-4" />
                      <span>Watch NAAC Peer Visit</span>
                    </a>
                  </Button>
                </div>
                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 text-xs sm:text-sm"
                    asChild
                  >
                    <a
                      href="/public/NAAC-pdf/IIQA.pdf"
                      download
                      aria-label="Download IIQA document"
                      onClick={() => handleDownload("/public/NAAC-pdf/IIQA.pdf", "IIQA Document")}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download IIQA</span>
                    </a>
                  </Button>
                </div>

                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 text-xs sm:text-sm"
                    asChild
                  >
                    <a
                      href="/public/NAAC-pdf/FINAL SSR report.pdf"
                      download
                      aria-label="Download SSR Report"
                      onClick={() => handleDownload("/public/NAAC-pdf/FINAL SSR report.pdf", "SSR Report 2022-23")}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download S.S.R Report</span>
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">SSR Preparation Process</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">1. Data Collection</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Gathering data from all departments and sections of the institution.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">2. Criterion Analysis</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Detailed analysis of the institution's performance in each criterion.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">3. Documentation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Comprehensive documentation of all activities, achievements, and initiatives.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">4. Review and Submission</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Multiple reviews by IQAC and final submission to NAAC.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">5. Peer Team Visit</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Hosting NAAC peer team for physical verification and assessment.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          

          
          <TabsContent value="calendar" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Academic Calendar</h3>
                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                  The Academic Calendar serves as a comprehensive schedule for all academic activities throughout the year, including class commencement, examinations, holidays, and important events.
                </p>
                
                <div className="space-y-4">
                  {academicCalendars.map((calendar) => (
                    <div key={calendar.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-blue-700 mt-1" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">{calendar.title}</p>
                          <p className="text-xs sm:text-sm text-gray-500">Size: {calendar.size} | Uploaded: {calendar.date}</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-xs sm:text-sm mt-2 sm:mt-0"
                        asChild
                      >
                        <a
                          href={calendar.pdfUrl}
                          download
                          aria-label={`Download ${calendar.title}`}
                          onClick={() => handleDownload(calendar.pdfUrl, calendar.title)}
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Current Academic Year: 2023-24</h3>
                
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-blue-900 text-white p-3">
                    <h4 className="font-medium text-sm sm:text-base">Important Dates</h4>
                  </div>
                  <div className="p-4">
                    <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b bg-gray-50">
                          <th scope="col" className="py-2 text-left font-medium">Event</th>
                          <th scope="col" className="py-2 text-left font-medium">Date</th>
                        </tr>
                      </thead>
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

          <TabsContent value="dvv" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">Data Validation and Verification (DVV)</h3>
                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                  The Data Validation and Verification (DVV) section provides key institutional metrics submitted as part of the NAAC accreditation process. These metrics include details about courses, programs, infrastructure, expenditure, and educational costs.
                </p>
                
                <div className="space-y-4">
                  {dvvData.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-700 mt-1" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">{item.title}</p>
                          <p className="text-xs sm:text-sm text-gray-500">Value: {item.value}</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-1 text-xs sm:text-sm mt-2 sm:mt-0"
                        asChild
                      >
                        <a
                          href={item.pdfUrl}
                          download
                          aria-label={`Download ${item.title}`}
                          onClick={() => handleDownload(item.pdfUrl, item.title)}
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">DVV Overview</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  The DVV process ensures the accuracy and authenticity of the data submitted to NAAC. It involves verifying institutional data against supporting documents to maintain transparency and credibility.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">Data Submission</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Institutions submit quantitative and qualitative data for NAAC evaluation.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">Document Verification</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">NAAC verifies submitted data with supporting documents like financial records and academic reports.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base">Clarifications</h4>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Institutions provide clarifications for any discrepancies found during the DVV process.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>



        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Internal Quality Assurance Cell (IQAC)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">About IQAC</h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                IQAC was constituted in the institute with a view to initiate, plan, and supervise different activities which are important to maintain and improve the quality of education imparted.
              </p>
              <h4 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Objectives and Functions of IQAC</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base">
                <li>Ensuring timely, efficient, and progressive performance of academic, administrative, and financial tasks.</li>
                <li>Improving the academic and administrative performance of the institution.</li>
                <li>Organization of inter and intra institutional workshops, seminars on quality related themes, and promotion of quality circles.</li>
                <li>Recording and monitoring of quality measures of the institution.</li>
                <li>Acting as a nodal agency of the institute for coordinating quality-related activities, including adoption and dissemination of good practices.</li>
                <li>Creating quality consciousness among stakeholders, especially students and both teaching and non-teaching faculty.</li>
                <li>Creating a student-centric teaching environment conducive to imparting quality education.</li>
                <li>Developing quality parameters for the activities of the institution.</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">IQAC Documents</h3>
              <div className="space-y-4">
                {iqacDocuments.map((doc) => (
                  <div key={doc.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-blue-700 mt-1" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{doc.title}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1 text-xs sm:text-sm mt-2 sm:mt-0"
                      asChild
                    >
                      <a
                        href={doc.pdfUrl}
                        download
                        aria-label={`Download ${doc.title}`}
                        onClick={() => handleDownload(doc.pdfUrl, doc.title)}
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-4">IQAC Committee Members</h3>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="bg-blue-900 text-white p-3">
                <h4 className="font-medium text-sm sm:text-base">Committee Composition</h4>
              </div>
              <div className="p-4">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th scope="col" className="py-2 text-left font-medium">Sr. No.</th>
                      <th scope="col" className="py-2 text-left font-medium">Name</th>
                      <th scope="col" className="py-2 text-left font-medium">Designation</th>
                      <th scope="col" className="py-2 text-left font-medium">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {iqacMembers.map((member) => (
                      <tr key={member.sr} className="border-b">
                        <td className="py-2">{member.sr}</td>
                        <td className="py-2">{member.name}</td>
                        <td className="py-2">{member.designation}</td>
                        <td className="py-2">{member.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Naac;