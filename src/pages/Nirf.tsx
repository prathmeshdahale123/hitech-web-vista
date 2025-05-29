
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
  Award, 
  FileText, 
  BarChart, 
  GraduationCap, 
  Library, 
  Users,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Nirf = () => {
  // Sample NIRF documents
  const nirfDocs = [
    { id: 1, name: "NIRF Data Submission 2023", size: "8.5 MB", date: "March 10, 2023" },
    { id: 2, name: "NIRF Data Submission 2022", size: "7.8 MB", date: "March 5, 2022" },
    { id: 3, name: "NIRF Data Submission 2021", size: "7.3 MB", date: "March 2, 2021" },
    { id: 4, name: "Faculty Data Declaration", size: "3.2 MB", date: "February 15, 2023" },
    { id: 5, name: "Research Publication Details", size: "4.1 MB", date: "February 20, 2023" },
    { id: 6, name: "Financial Resources Declaration", size: "2.8 MB", date: "February 22, 2023" },
  ];
  
  // NIRF ranking parameters
  const nirfParameters = [
    {
      name: "Teaching, Learning & Resources",
      weight: "30%",
      subParams: [
        "Student Strength including Doctoral Students",
        "Faculty-student ratio with faculty quality",
        "Total Budget and its utilization",
        "Facilities for teaching-learning process"
      ]
    },
    {
      name: "Research and Professional Practice",
      weight: "30%",
      subParams: [
        "Combined metric for publications",
        "Combined metric for quality of publications",
        "IPR and Patents: Filed, Published, Granted and Licensed",
        "Footprint of projects and professional practice"
      ]
    },
    {
      name: "Graduation Outcomes",
      weight: "20%",
      subParams: [
        "Metric for university examinations",
        "Metric for number of Ph.D. students graduated",
        "Median salary of graduates",
        "Placement and higher studies metrics"
      ]
    },
    {
      name: "Outreach and Inclusivity",
      weight: "10%",
      subParams: [
        "Percentage of Students from other states/countries",
        "Percentage of Women students and faculty",
        "Economically and Socially Challenged Students",
        "Facilities for Physically Challenged Students"
      ]
    },
    {
      name: "Perception",
      weight: "10%",
      subParams: [
        "Peer Perception: Academic Peers and Employers",
        "Public Perception",
        "Competitiveness",
        "Accreditation"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="NIRF" 
        subtitle="National Institutional Ranking Framework" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">About NIRF</h2>
            <p className="text-gray-700 mb-4">
              The National Institutional Ranking Framework (NIRF) is a methodology adopted by the Ministry of Education, Government of India, to rank institutions of higher education in India. The framework was approved by the MHRD and launched in 2015.
            {/* </p>
            <p className="text-gray-700 mb-4"> */}
              NIRF outlines a methodology to rank institutions across the country based on parameters such as Teaching, Learning and Resources, Research and Professional Practices, Graduation Outcomes, Outreach and Inclusivity, and Perception.
            {/* </p>
            <p className="text-gray-700"> */}
              Hi-Tech Institute of Technology actively participates in the NIRF ranking process as part of our commitment to transparency and continuous quality improvement. Our participation helps us benchmark our performance against other institutions and identify areas for improvement.
            </p>
          </div>
          
          
        </div>
        
        <Tabs defaultValue="parameters">
        
          
          <TabsContent value="parameters" className="mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">NIRF Ranking Parameters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nirfParameters.map((param, index) => (
                <Card key={index}>
                  <CardHeader className="bg-blue-900 text-white">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>{param.name}</span>
                      <span className="text-sm bg-blue-700 px-2 py-1 rounded">{param.weight}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {param.subParams.map((subParam, idx) => (
                        <li key={idx}>{subParam}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          
        </Tabs>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
  <h3 className="text-xl font-semibold text-blue-800 mb-4">NIRF</h3>
  <div className="space-y-4">
    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
      <span className="font-medium">NIRF 2023</span>
      <a
        href="public/other-pdf's/nirf.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium hover:bg-blue-200"
      >
        View PDF
      </a>
    </div>
    
  </div>
</div>
            
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Official NIRF Resources</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <BarChart className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <p className="font-medium">NIRF Official Website</p>
                    <p className="text-sm text-gray-600">Visit the official NIRF website for complete ranking information.</p>
                    <a
                      href="https://www.nirfindia.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-0 h-auto text-blue-700 mt-1 underline font-medium"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <FileText className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                   <div>
                    <p className="font-medium">NIRF Parameters & Methodology</p>
                    <p className="text-sm text-gray-600">Understand the NIRF ranking methodology and parameters.</p>
                    <a
                      href="https://www.nirfindia.org/nirfpdfcdn/2024/framework/Engineering.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-0 h-auto text-blue-700 mt-1 underline font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Nirf;
