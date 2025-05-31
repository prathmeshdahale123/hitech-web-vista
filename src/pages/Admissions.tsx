
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, FileDown } from "lucide-react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  course: z.string().min(1, { message: "Please select a course." }),
  message: z.string().optional(),
});

const Admissions = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Inquiry Submitted",
      description: "We will get back to you soon!",
    });
    console.log(values);
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="Admissions" 
        subtitle="Join our prestigious institution for quality education" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="process">Admission Process</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="dates">Important Dates</TabsTrigger>
            <TabsTrigger value="inquiry">Admission Inquiry</TabsTrigger>
          </TabsList>
          
          <TabsContent value="process" className="mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Admission Process</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Step 1: Entrance Examination</h3>
                    <p className="text-gray-700">Candidates must appear for state-level entrance examinations like MHT-CET or JEE for admission to engineering programs.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Step 2: Counseling Process</h3>
                    <p className="text-gray-700">Based on entrance exam scores, candidates will be called for centralized admission process (CAP) rounds conducted by DTE Maharashtra.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Step 3: Institute Level Admissions</h3>
                    <p className="text-gray-700">After CAP rounds, remaining seats are filled through institute level counseling. Contact the admission cell for details.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Step 4: Document Verification & Fee Payment</h3>
                    <p className="text-gray-700">Submit required documents and complete fee payment to confirm your admission.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="bg-blue-50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Download Prospectus</h3>
                    <Button className="w-full flex items-center justify-center gap-2">
                      <FileDown className="w-4 h-4" />
                      <span>Prospectus 2023-24</span>
                    </Button>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Admission Cell</h3>
                      <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 9876543210</p>
                      <p className="text-gray-700 mb-4"><strong>Email:</strong> admissions@hitech.edu.in</p>
                      <p className="text-gray-700"><strong>Timings:</strong> 10:00 AM to 5:00 PM (Mon-Sat)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="eligibility" className="mt-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Eligibility Criteria</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">B.Tech Programs</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Passed HSC (10+2) examination with Physics, Chemistry and Mathematics</li>
                    <li>Minimum 50% marks in PCM (45% for reserved categories)</li>
                    <li>Valid MHT-CET or JEE (Main) score</li>
                    <li>Qualified in the merit list declared by competent authority</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Lateral Entry (Direct Second Year)</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Passed Diploma in relevant branch of Engineering with minimum 50% marks</li>
                    <li>Valid score in the entrance test conducted by competent authority</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Required Documents</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>HSC Mark Sheet and Passing Certificate</li>
                    <li>SSC Mark Sheet and Passing Certificate</li>
                    <li>MHT-CET / JEE Score Card</li>
                    <li>Domicile Certificate / Birth Certificate</li>
                    <li>Caste Certificate and Validity (if applicable)</li>
                    <li>Income Certificate (if applicable)</li>
                    <li>Aadhar Card</li>
                    <li>Migration Certificate (if applicable)</li>
                    <li>Gap Certificate (if applicable)</li>
                    <li>Recent Passport Size Photographs</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Reservation Policy</h3>
                  <p className="text-gray-700 mb-3">Admissions are conducted as per the reservation policy of Maharashtra Government and AICTE norms.</p>
                  <Button variant="outline" className="w-full">View Detailed Reservation Policy</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dates" className="mt-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Important Dates</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="border p-3 text-left">Event</th>
                    <th className="border p-3 text-left">Start Date</th>
                    <th className="border p-3 text-left">End Date</th>
                    <th className="border p-3 text-left">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">MHT-CET Registration</td>
                    <td className="border p-3">January 15, 2024</td>
                    <td className="border p-3">March 20, 2024</td>
                    <td className="border p-3">Online registration at cetcell.mahacet.org</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">MHT-CET Examination</td>
                    <td className="border p-3">April 15, 2024</td>
                    <td className="border p-3">May 10, 2024</td>
                    <td className="border p-3">Computer-based test at designated centers</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">Result Declaration</td>
                    <td className="border p-3">June 10, 2024</td>
                    <td className="border p-3">-</td>
                    <td className="border p-3">Available online</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">CAP Round 1 Registration</td>
                    <td className="border p-3">June 20, 2024</td>
                    <td className="border p-3">July 5, 2024</td>
                    <td className="border p-3">Document verification & form filling</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">CAP Round 1 Allotment</td>
                    <td className="border p-3">July 12, 2024</td>
                    <td className="border p-3">-</td>
                    <td className="border p-3">Result publication</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">CAP Round 2 Registration</td>
                    <td className="border p-3">July 18, 2024</td>
                    <td className="border p-3">July 25, 2024</td>
                    <td className="border p-3">For eligible candidates</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">CAP Round 2 Allotment</td>
                    <td className="border p-3">August 1, 2024</td>
                    <td className="border p-3">-</td>
                    <td className="border p-3">Result publication</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">Institute Level Admissions</td>
                    <td className="border p-3">August 10, 2024</td>
                    <td className="border p-3">August 25, 2024</td>
                    <td className="border p-3">For vacant seats after CAP rounds</td>
                  </tr>
                  <tr className="bg-white hover:bg-blue-50">
                    <td className="border p-3 font-medium">Commencement of Classes</td>
                    <td className="border p-3">September 1, 2024</td>
                    <td className="border p-3">-</td>
                    <td className="border p-3">For First Year students</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="flex items-center gap-2 text-yellow-700">
                <Calendar className="h-5 w-5" />
                <span>Dates are tentative and subject to change as per DTE Maharashtra announcements.</span>
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="inquiry" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Admission Inquiry</h2>
                <p className="text-gray-700 mb-6">Fill the form below to get more information about admissions. Our team will get back to you within 24 hours.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Interested In</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                              {...field}
                            >
                              <option value="">Select a course</option>
                              <option value="computer">Computer Science & Engineering</option>
                              <option value="aiml">CSE (AI & ML)</option>
                              <option value="mechanical">Mechanical Engineering</option>
                              <option value="civil">Civil Engineering</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any specific questions you have..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Submit Inquiry</Button>
                  </form>
                </Form>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Admission FAQs</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-blue-800">What is the admission process for first year?</h4>
                    <p className="text-gray-700 mt-1">Admissions are through MHT-CET or JEE scores followed by centralized counseling.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-blue-800">Is there any direct admission quota?</h4>
                    <p className="text-gray-700 mt-1">Yes, there is an institute level quota for a limited number of seats after CAP rounds.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-blue-800">What is the fee structure?</h4>
                    <p className="text-gray-700 mt-1">Fees are as per the structure approved by the Fee Regulating Authority of Maharashtra. Exact fee details are available in the prospectus.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-blue-800">Are hostel facilities available?</h4>
                    <p className="text-gray-700 mt-1">Yes, separate hostel facilities for boys and girls are available within the campus.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-blue-800">What scholarships are available?</h4>
                    <p className="text-gray-700 mt-1">Government scholarships for SC/ST/OBC and various merit-based institutional scholarships are available.</p>
                  </div>
                  
                  <Button variant="outline" className="w-full">View All FAQs</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admissions;
