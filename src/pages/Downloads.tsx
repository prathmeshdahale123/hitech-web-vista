
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Downloads = () => {
  // Sample documents for different categories
  const admissionDocs = [
    { id: 1, name: "Admission Form 2023-24", size: "1.2 MB", type: "PDF", lastUpdated: "May 15, 2023" },
    { id: 2, name: "Prospectus 2023-24", size: "4.8 MB", type: "PDF", lastUpdated: "April 30, 2023" },
    { id: 3, name: "Fee Structure", size: "820 KB", type: "PDF", lastUpdated: "May 5, 2023" },
    { id: 4, name: "Admission Guidelines", size: "1.5 MB", type: "PDF", lastUpdated: "May 2, 2023" },
    { id: 5, name: "Required Documents Checklist", size: "650 KB", type: "PDF", lastUpdated: "May 10, 2023" },
    { id: 6, name: "Hostel Application Form", size: "780 KB", type: "PDF", lastUpdated: "May 12, 2023" },
    { id: 7, name: "Transport Request Form", size: "540 KB", type: "PDF", lastUpdated: "May 8, 2023" },
  ];
  
  const academicDocs = [
    { id: 1, name: "Academic Calendar 2023-24", size: "1.6 MB", type: "PDF", lastUpdated: "June 5, 2023" },
    { id: 2, name: "Examination Schedule - Odd Semester", size: "820 KB", type: "PDF", lastUpdated: "September 10, 2023" },
    { id: 3, name: "Syllabus - Computer Engineering", size: "3.2 MB", type: "PDF", lastUpdated: "July 15, 2023" },
    { id: 4, name: "Syllabus - Civil Engineering", size: "2.8 MB", type: "PDF", lastUpdated: "July 15, 2023" },
    { id: 5, name: "Syllabus - Mechanical Engineering", size: "3.1 MB", type: "PDF", lastUpdated: "July 15, 2023" },
    { id: 6, name: "Syllabus - AI & ML", size: "2.5 MB", type: "PDF", lastUpdated: "July 15, 2023" },
    { id: 7, name: "Laboratory Manual - Basic Engineering", size: "4.2 MB", type: "PDF", lastUpdated: "August 2, 2023" },
    { id: 8, name: "Student Attendance Format", size: "620 KB", type: "XLSX", lastUpdated: "July 20, 2023" },
  ];
  
  const scholarshipDocs = [
    { id: 1, name: "Government Scholarship Form", size: "1.1 MB", type: "PDF", lastUpdated: "July 10, 2023" },
    { id: 2, name: "Scholarship Schemes Information", size: "1.8 MB", type: "PDF", lastUpdated: "July 5, 2023" },
    { id: 3, name: "Merit Scholarship Application", size: "950 KB", type: "PDF", lastUpdated: "July 12, 2023" },
    { id: 4, name: "SC/ST Scholarship Guidelines", size: "1.3 MB", type: "PDF", lastUpdated: "July 8, 2023" },
    { id: 5, name: "EBC Scholarship Form", size: "980 KB", type: "PDF", lastUpdated: "July 15, 2023" },
  ];
  
  const formsDocs = [
    { id: 1, name: "No Objection Certificate Request", size: "720 KB", type: "PDF", lastUpdated: "August 5, 2023" },
    { id: 2, name: "Bonafide Certificate Request", size: "680 KB", type: "PDF", lastUpdated: "August 5, 2023" },
    { id: 3, name: "Leave Application Form", size: "520 KB", type: "PDF", lastUpdated: "July 25, 2023" },
    { id: 4, name: "Character Certificate Request", size: "650 KB", type: "PDF", lastUpdated: "August 5, 2023" },
    { id: 5, name: "Industrial Visit Permission", size: "780 KB", type: "PDF", lastUpdated: "July 28, 2023" },
    { id: 6, name: "Library Membership Form", size: "620 KB", type: "PDF", lastUpdated: "July 20, 2023" },
    { id: 7, name: "Alumni Registration Form", size: "850 KB", type: "PDF", lastUpdated: "June 15, 2023" },
  ];
  
  const naacDocs = [
    { id: 1, name: "Self Study Report (SSR) 2022", size: "15.8 MB", type: "PDF", lastUpdated: "December 10, 2022" },
    { id: 2, name: "Annual Quality Assurance Report 2022-23", size: "8.2 MB", type: "PDF", lastUpdated: "June 30, 2023" },
    { id: 3, name: "NAAC Metrics Documentation", size: "12.5 MB", type: "PDF", lastUpdated: "January 15, 2023" },
    { id: 4, name: "Best Practices Documentation", size: "3.8 MB", type: "PDF", lastUpdated: "February 10, 2023" },
    { id: 5, name: "Student Satisfaction Survey Report", size: "5.2 MB", type: "PDF", lastUpdated: "March 25, 2023" },
  ];

  // Function to render document table
  const renderDocumentTable = (documents: typeof admissionDocs) => (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-blue-900 text-white">
            <TableHead className="w-[40%]">Document Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id} className="hover:bg-blue-50">
              <TableCell className="font-medium">{doc.name}</TableCell>
              <TableCell>{doc.type}</TableCell>
              <TableCell>{doc.size}</TableCell>
              <TableCell>{doc.lastUpdated}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span className="hidden sm:inline">View</span>
                  </Button>
                  <Button size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="Downloads" 
        subtitle="Access and download important documents and forms" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Available Documents</h2>
          <p className="text-gray-700">
            This section provides access to various documents, forms, and information related to admissions, academics, and other institutional processes. Please select the appropriate category to find the required documents.
          </p>
        </div>
        
        <Tabs defaultValue="admission">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="scholarship">Scholarship</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="naac">NAAC & NIRF</TabsTrigger>
          </TabsList>
          
          <TabsContent value="admission" className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-800">Admission Documents</h3>
              <p className="text-sm text-gray-500">{admissionDocs.length} documents available</p>
            </div>
            {renderDocumentTable(admissionDocs)}
          </TabsContent>
          
          <TabsContent value="academic" className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-800">Academic Documents</h3>
              <p className="text-sm text-gray-500">{academicDocs.length} documents available</p>
            </div>
            {renderDocumentTable(academicDocs)}
          </TabsContent>
          
          <TabsContent value="scholarship" className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-800">Scholarship Documents</h3>
              <p className="text-sm text-gray-500">{scholarshipDocs.length} documents available</p>
            </div>
            {renderDocumentTable(scholarshipDocs)}
          </TabsContent>
          
          <TabsContent value="forms" className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-800">Forms & Certificates</h3>
              <p className="text-sm text-gray-500">{formsDocs.length} documents available</p>
            </div>
            {renderDocumentTable(formsDocs)}
          </TabsContent>
          
          <TabsContent value="naac" className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-800">NAAC & NIRF Documents</h3>
              <p className="text-sm text-gray-500">{naacDocs.length} documents available</p>
            </div>
            {renderDocumentTable(naacDocs)}
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded">
              <FileText className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                If you're unable to find a specific document or facing any issues while downloading, please contact the administrative office for assistance.
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> admin@hitech.edu.in<br />
                <strong>Phone:</strong> (0240) 2552240
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Downloads;
