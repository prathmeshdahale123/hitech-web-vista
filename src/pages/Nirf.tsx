
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
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">About NIRF</h2>
            <p className="text-gray-700 mb-4">
              The National Institutional Ranking Framework (NIRF) is a methodology adopted by the Ministry of Education, Government of India, to rank institutions of higher education in India. The framework was approved by the MHRD and launched in 2015.
            </p>
            <p className="text-gray-700 mb-4">
              NIRF outlines a methodology to rank institutions across the country based on parameters such as Teaching, Learning and Resources, Research and Professional Practices, Graduation Outcomes, Outreach and Inclusivity, and Perception.
            </p>
            <p className="text-gray-700">
              Hi-Tech Institute of Technology actively participates in the NIRF ranking process as part of our commitment to transparency and continuous quality improvement. Our participation helps us benchmark our performance against other institutions and identify areas for improvement.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-center">
              <Award className="h-16 w-16 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">NIRF Ranking</h3>
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <p className="text-gray-600">Latest Ranking (2023)</p>
                <p className="text-3xl font-bold text-blue-900">178</p>
                <p className="text-sm text-gray-500">Engineering Category</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">2022 Ranking:</span>
                  <span className="font-medium">185</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">2021 Ranking:</span>
                  <span className="font-medium">196</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">2020 Ranking:</span>
                  <span className="font-medium">201-250 Band</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="parameters">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
            <TabsTrigger value="parameters">Ranking Parameters</TabsTrigger>
            <TabsTrigger value="stats">Institute Statistics</TabsTrigger>
            <TabsTrigger value="documents">NIRF Documents</TabsTrigger>
          </TabsList>
          
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
          
          <TabsContent value="stats" className="mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Institute Statistics for NIRF 2023</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-gray-600">Student Strength</p>
                      <p className="text-2xl font-bold text-blue-900">1,250</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-gray-600">Faculty Count</p>
                      <p className="text-2xl font-bold text-blue-900">85</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FileText className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-gray-600">Publications</p>
                      <p className="text-2xl font-bold text-blue-900">210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Library className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-gray-600">Research Projects</p>
                      <p className="text-2xl font-bold text-blue-900">32</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              {/* These would be actual charts in a real implementation */}
              <div>
                <h4 className="font-medium text-blue-800 mb-3">Faculty-Student Ratio</h4>
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <p className="text-gray-500">[Faculty-Student Ratio Chart]</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-800 mb-3">Research Output Trend</h4>
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <p className="text-gray-500">[Research Output Trend Chart]</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-blue-800 mb-3">Placement Statistics</h4>
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <p className="text-gray-500">[Placement Statistics Chart]</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">NIRF Documents</h3>
                <p className="text-gray-700 mb-6">
                  Below are the documents submitted by Hi-Tech Institute of Technology for NIRF ranking process. These documents contain detailed information about various parameters as per NIRF guidelines.
                </p>
                
                <div className="space-y-4">
                  {nirfDocs.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-700 mt-1" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-500">Size: {doc.size} | Uploaded: {doc.date}</p>
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
              
              <div>
                <Card>
                  <CardHeader className="bg-blue-900 text-white">
                    <CardTitle>NIRF Preparation Process</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">Data Collection</h4>
                        <p className="text-sm text-gray-600">Comprehensive data collection from all departments regarding faculty, students, research, finances, etc.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">Data Verification</h4>
                        <p className="text-sm text-gray-600">Thorough verification and validation of collected data by the NIRF committee.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">Documentation</h4>
                        <p className="text-sm text-gray-600">Preparation of required documents as per NIRF format and guidelines.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">Online Submission</h4>
                        <p className="text-sm text-gray-600">Submission of data on the NIRF portal within the stipulated timeframe.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">Analysis & Improvement</h4>
                        <p className="text-sm text-gray-600">Analysis of ranking results and planning for continuous improvement.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">NIRF Coordinator</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
                        PK
                      </div>
                      <div>
                        <p className="font-medium">Dr. Prakash Kumar</p>
                        <p className="text-gray-600">NIRF Coordinator</p>
                      </div>
                    </div>
                    <p className="text-gray-700"><strong>Email:</strong> nirf@hitech.edu.in</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +91 9876543211</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">NIRF Rankings Over the Years</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">NIRF 2023</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Rank 178</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">NIRF 2022</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Rank 185</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">NIRF 2021</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Rank 196</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">NIRF 2020</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Band 201-250</span>
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
                    <Button variant="link" className="p-0 h-auto text-blue-700 mt-1">Visit Website</Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <FileText className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <p className="font-medium">NIRF Parameters & Methodology</p>
                    <p className="text-sm text-gray-600">Understand the NIRF ranking methodology and parameters.</p>
                    <Button variant="link" className="p-0 h-auto text-blue-700 mt-1">Learn More</Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <p className="font-medium">Engineering Institutions Ranking</p>
                    <p className="text-sm text-gray-600">Check the complete list of engineering institutions ranking.</p>
                    <Button variant="link" className="p-0 h-auto text-blue-700 mt-1">View Rankings</Button>
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
