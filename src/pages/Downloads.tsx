import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  const admissionDocs = [
    { id: 1, name: "Admission Form 2023-24", size: "1.2 MB", type: "PDF", lastUpdated: "May 15, 2023", downloadUrl: "/downloads/admission-form-2023-24.pdf" },
    { id: 2, name: "Prospectus 2023-24", size: "4.8 MB", type: "PDF", lastUpdated: "April 30, 2023", downloadUrl: "/downloads/prospectus-2023-24.pdf" },
    { id: 3, name: "Fee Structure", size: "820 KB", type: "PDF", lastUpdated: "May 5, 2023", downloadUrl: "/downloads/fee-structure.pdf" },
    { id: 4, name: "Admission Guidelines", size: "1.5 MB", type: "PDF", lastUpdated: "May 2, 2023", downloadUrl: "/downloads/admission-guidelines.pdf" },
    { id: 5, name: "Required Documents Checklist", size: "650 KB", type: "PDF", lastUpdated: "May 10, 2023", downloadUrl: "/downloads/required-documents-checklist.pdf" },
    { id: 6, name: "Hostel Application Form", size: "780 KB", type: "PDF", lastUpdated: "May 12, 2023", downloadUrl: "/downloads/hostel-application-form.pdf" },
    { id: 7, name: "Transport Request Form", size: "540 KB", type: "PDF", lastUpdated: "May 8, 2023", downloadUrl: "/downloads/transport-request-form.pdf" },
  ];

  const academicDocs = [
    { id: 1, name: "Academic Calender EVEN Semester", size: "1.6 MB", type: "PDF", lastUpdated: "(2022-23)", downloadUrl: "public/Academic-Calender-pdf/ACAD CALENDAR 2022-23 SEM-II Even Sem.pdf" },
    { id: 2, name: "Academic Calender ODD Semester", size: "820 KB", type: "PDF", lastUpdated: "(2022-23)", downloadUrl: "public/Academic-Calender-pdf/ACADEMIC CALENDAR 22-23 ODD SEM.pdf" },
    { id: 3, name: "Academic Calender Semister", size: "3.2 MB", type: "PDF", lastUpdated: "(2019-20)", downloadUrl: "public/Academic-Calender-pdf/AC_BAMU_2019_20_odd_sem-4.pdf" },
    { id: 4, name: "Academic Calender Semister", size: "2.8 MB", type: "PDF", lastUpdated: "(2018-19)", downloadUrl: "public/Academic-Calender-pdf/2018-19_ACDEMIC_CALENDER.pdf" },
    { id: 5, name: "Academic Calender Semister", size: "3.1 MB", type: "PDF", lastUpdated: "(2017-18)", downloadUrl: "public/Academic-Calender-pdf/2017-18_ACADEMIC_CALENDER.pdf" },
  ];

  const scholarshipDocs = [
    { id: 1, name: "Government Scholarship Form", size: "1.1 MB", type: "PDF", lastUpdated: "July 10, 2023", downloadUrl: "/downloads/govt-scholarship-form.pdf" },
    { id: 2, name: "Scholarship Schemes Information", size: "1.8 MB", type: "PDF", lastUpdated: "July 5, 2023", downloadUrl: "/downloads/scholarship-schemes-info.pdf" },
    { id: 3, name: "Merit Scholarship Application", size: "950 KB", type: "PDF", lastUpdated: "July 12, 2023", downloadUrl: "/downloads/merit-scholarship-application.pdf" },
    { id: 4, name: "SC/ST Scholarship Guidelines", size: "1.3 MB", type: "PDF", lastUpdated: "July 8, 2023", downloadUrl: "/downloads/scst-scholarship-guidelines.pdf" },
    { id: 5, name: "EBC Scholarship Form", size: "980 KB", type: "PDF", lastUpdated: "July 15, 2023", downloadUrl: "/downloads/ebc-scholarship-form.pdf" },
  ];


  const projectDocs = [
    { id: 1, name: "Project Proposal Template", size: "1.0 MB", type: "PDF", lastUpdated: "August 1, 2023", downloadUrl: "/downloads/project-proposal-template.pdf" },
    { id: 2, name: "Project Guidelines 2023-24", size: "1.4 MB", type: "PDF", lastUpdated: "July 20, 2023", downloadUrl: "/downloads/project-guidelines-2023-24.pdf" },
    { id: 3, name: "Project Submission Form", size: "750 KB", type: "PDF", lastUpdated: "August 5, 2023", downloadUrl: "/downloads/project-submission-form.pdf" },
    { id: 4, name: "Project Evaluation Criteria", size: "900 KB", type: "PDF", lastUpdated: "July 25, 2023", downloadUrl: "/downloads/project-evaluation-criteria.pdf" },
    { id: 5, name: "Sample Project Report", size: "2.5 MB", type: "PDF", lastUpdated: "June 30, 2023", downloadUrl: "/downloads/sample-project-report.pdf" },
  ];

  const renderDocumentTable = (documents: typeof admissionDocs) => (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-blue-900 text-white">
            <TableHead className="w-[40%] text-xs sm:text-sm">Document Name</TableHead>
            <TableHead className="text-xs sm:text-sm">Type</TableHead>
            <TableHead className="hidden sm:table-cell text-xs sm:text-sm">Size</TableHead>
            <TableHead className="hidden md:table-cell text-xs sm:text-sm">Last Updated</TableHead>
            <TableHead className="text-right text-xs sm:text-sm">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id} className="hover:bg-blue-50">
              <TableCell className="font-medium text-xs sm:text-sm">{doc.name}</TableCell>
              <TableCell className="text-xs sm:text-sm">{doc.type}</TableCell>
              <TableCell className="hidden sm:table-cell text-xs sm:text-sm">{doc.size}</TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">{doc.lastUpdated}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1 sm:gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs sm:text-sm">
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">View</span>
                  </Button>
                  <a
                    href={doc.downloadUrl || "#"}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="flex items-center gap-1 text-xs sm:text-sm">
                      <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Download</span>
                    </Button>
                  </a>
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

      <div className="container mx-auto px-4 py-6 sm:py-12 flex-grow">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-4">Available Documents</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            This section provides access to various documents, forms, and information related to admissions, academics, and other institutional processes. Please select the appropriate category to find the required documents.
          </p>
        </div>

        <Tabs defaultValue="admission">
          <TabsList className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 w-full overflow-x-auto">
            <TabsTrigger value="admission" className="text-xs sm:text-sm">Admission</TabsTrigger>
            <TabsTrigger value="academic" className="text-xs sm:text-sm">Academic</TabsTrigger>
            <TabsTrigger value="scholarship" className="text-xs sm:text-sm">Scholarship</TabsTrigger>
            <TabsTrigger value="project" className="text-xs sm:text-sm">Project</TabsTrigger>
          </TabsList>

          <TabsContent value="admission" className="mt-4 sm:mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800">Admission Documents</h3>
              <p className="text-xs sm:text-sm text-gray-500">{admissionDocs.length} documents available</p>
            </div>
            {renderDocumentTable(admissionDocs)}
          </TabsContent>

          <TabsContent value="academic" className="mt-4 sm:mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800">Academic Documents</h3>
              <p className="text-xs sm:text-sm text-gray-500">{academicDocs.length} documents available</p>
            </div>
            {renderDocumentTable(academicDocs)}
          </TabsContent>

          <TabsContent value="scholarship" className="mt-4 sm:mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800">Scholarship Documents</h3>
              <p className="text-xs sm:text-sm text-gray-500">{scholarshipDocs.length} documents available</p>
            </div>
            {renderDocumentTable(scholarshipDocs)}
          </TabsContent>

          <TabsContent value="project" className="mt-4 sm:mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800">Project Documents</h3>
              <p className="text-xs sm:text-sm text-gray-500">{projectDocs.length} documents available</p>
            </div>
            {renderDocumentTable(projectDocs)}
          </TabsContent>
        </Tabs>

        <div className="mt-8 sm:mt-12 bg-blue-50 p-4 sm:p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Need Help?</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                If you're unable to find a specific document or facing any issues while downloading, please contact the administrative office for assistance.
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
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