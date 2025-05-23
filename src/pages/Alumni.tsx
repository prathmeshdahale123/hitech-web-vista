
import { useState } from "react";
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
import { 
  Users, 
  Calendar, 
  Award, 
  GraduationCap, 
  Building, 
  Linkedin
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  graduationYear: z.string().regex(/^\d{4}$/, { message: "Please enter a valid graduation year (e.g., 2015)." }),
  department: z.string().min(1, { message: "Please select your department." }),
  company: z.string().min(1, { message: "Please enter your current company/organization." }),
  designation: z.string().min(1, { message: "Please enter your current designation." }),
  message: z.string().optional(),
});

const Alumni = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      graduationYear: "",
      department: "",
      company: "",
      designation: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Registration Submitted",
      description: "Thank you for registering with our Alumni network!",
    });
    console.log(values);
    form.reset();
  };
  
  // Sample alumni testimonials
  const testimonials = [
    {
      name: "Rajesh Sharma",
      batch: "2010",
      department: "Computer Science",
      company: "Microsoft",
      designation: "Senior Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "My time at Hi-Tech Institute laid the foundation for my career in software development. The faculty's focus on both theoretical knowledge and practical implementation helped me excel in industry."
    },
    {
      name: "Priya Patil",
      batch: "2012",
      department: "Civil Engineering",
      company: "L&T Construction",
      designation: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "The industry exposure I received during my education at Hi-Tech Institute was invaluable. The technical visits, guest lectures, and internship opportunities prepared me well for the challenges of infrastructure projects."
    },
    {
      name: "Ankit Deshmukh",
      batch: "2015",
      department: "Mechanical Engineering",
      company: "Tata Motors",
      designation: "Design Engineer",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "The workshops and laboratories at Hi-Tech Institute are equipped with cutting-edge technology that gave me hands-on experience with the tools used in the industry. This practical knowledge accelerated my career growth."
    },
    {
      name: "Sneha Joshi",
      batch: "2018",
      department: "Computer Science (AI & ML)",
      company: "Google",
      designation: "Machine Learning Engineer",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      quote: "The specialized AI & ML curriculum at Hi-Tech Institute was ahead of its time. I gained in-depth knowledge of advanced algorithms and their implementations which directly translated to my work at Google."
    },
    {
      name: "Rahul Patil",
      batch: "2016",
      department: "Civil Engineering",
      company: "Self-employed",
      designation: "Founder, EcoBuilders",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      quote: "The entrepreneurship cell at Hi-Tech Institute inspired me to start my own sustainable construction company. The mentorship and guidance from faculty members helped me navigate the challenges of starting a business."
    },
    {
      name: "Neha Singh",
      batch: "2014",
      department: "Computer Science",
      company: "Amazon",
      designation: "Technical Program Manager",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
      quote: "Beyond technical skills, Hi-Tech Institute taught me leadership and team management which are crucial for my current role. The project-based learning approach helped develop problem-solving abilities that I use daily."
    }
  ];
  
  // Sample notable alumni
  const notableAlumni = [
    {
      name: "Dr. Vishwas Mehta",
      batch: "2005",
      department: "Computer Science",
      achievement: "CTO at a leading tech company, holds 12 patents in AI and machine learning",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Anjali Sharma",
      batch: "2008",
      department: "Civil Engineering",
      achievement: "Recipient of Young Engineer Award 2020, worked on critical infrastructure projects",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      name: "Prakash Jain",
      batch: "2007",
      department: "Mechanical Engineering",
      achievement: "Founded a successful manufacturing startup valued at $10M",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];
  
  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "Annual Alumni Meet 2024",
      date: "February 15, 2024",
      venue: "Institute Auditorium",
      description: "Reconnect with your batchmates and faculty at our annual gathering. The event includes networking sessions, technical talks, and cultural performances."
    },
    {
      title: "Alumni Webinar Series",
      date: "Monthly (Last Saturday)",
      venue: "Online (Zoom)",
      description: "Join our monthly webinars featuring alumni experts sharing insights on industry trends, career development, and technical innovations."
    },
    {
      title: "CSR Initiative: Campus Plantation Drive",
      date: "July 5, 2024",
      venue: "Institute Campus",
      description: "Be part of our green campus initiative. Alumni are invited to participate in the plantation drive and contribute to environmental sustainability."
    }
  ];

  const [selectedYear, setSelectedYear] = useState<string>("all");
  const graduationYears = ["all", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "Earlier"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="Alumni Association" 
        subtitle="Connecting graduates, building networks" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">About Alumni Association</h2>
            <p className="text-gray-700 mb-4">
              The Hi-Tech Institute of Technology Alumni Association serves as a vital link between the institute and its graduates. Established in 2010, the association aims to foster lifelong connections among alumni, current students, and faculty, promoting personal and professional growth while contributing to the institute's development.
            </p>
            <p className="text-gray-700 mb-4">
              Our alumni network spans across various countries and industries, representing the institute's legacy of producing competent professionals and leaders. Through regular events, mentorship programs, and knowledge sharing initiatives, the association creates opportunities for alumni to give back to their alma mater and help shape the future of the institute.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Users className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900">5000+</p>
                <p className="text-sm text-gray-600">Alumni Network</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Building className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900">500+</p>
                <p className="text-sm text-gray-600">Companies</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Calendar className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900">20+</p>
                <p className="text-sm text-gray-600">Annual Events</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <Award className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                <p className="font-semibold text-blue-900">50+</p>
                <p className="text-sm text-gray-600">Award Winners</p>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader className="bg-blue-900 text-white">
              <CardTitle>Alumni Committee</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Rajendra Patil</p>
                    <p className="text-sm text-gray-600">President, Alumni Association</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium">Prof. Sunita Sharma</p>
                    <p className="text-sm text-gray-600">Faculty Coordinator</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <p className="font-medium">Mr. Anand Joshi</p>
                    <p className="text-sm text-gray-600">Secretary (Batch of 2010)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-gray-700"><strong>Email:</strong> alumni@hitech.edu.in</p>
                <p className="text-gray-700"><strong>Phone:</strong> (0240) 2552240 (Ext. 123)</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="testimonials">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="notable-alumni">Notable Alumni</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="register">Join Alumni Network</TabsTrigger>
          </TabsList>
          
          <TabsContent value="testimonials" className="mt-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Alumni Testimonials</h3>
              <div className="flex items-center overflow-x-auto pb-2">
                {graduationYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 mr-2 rounded-full whitespace-nowrap ${
                      selectedYear === year 
                        ? "bg-blue-900 text-white" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {year === "all" ? "All Years" : `Batch ${year}`}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-lg">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.designation}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Batch of {testimonial.batch}</span>
                      <span>{testimonial.department}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="notable-alumni" className="mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Notable Alumni</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {notableAlumni.map((alumni, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-[3/2] w-full">
                    <img 
                      src={alumni.image} 
                      alt={alumni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-lg text-blue-900">{alumni.name}</h4>
                    <p className="text-gray-600 mb-1">Batch of {alumni.batch} | {alumni.department}</p>
                    <p className="text-sm text-gray-700">{alumni.achievement}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <span className="text-sm text-gray-500">Alumni Achievement Award</span>
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-blue-900 mb-4">Alumni in Academia</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium">Dr. Ramesh Kumar</p>
                      <p className="text-sm text-gray-600">Professor at MIT, USA (Batch of 2003)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium">Dr. Meera Desai</p>
                      <p className="text-sm text-gray-600">Researcher at ISRO (Batch of 2006)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium">Dr. Suresh Patel</p>
                      <p className="text-sm text-gray-600">Dean, Engineering Faculty at IIT Bombay (Batch of 2000)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-blue-900 mb-4">Alumni Entrepreneurs</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium">Mr. Vikram Shah</p>
                      <p className="text-sm text-gray-600">Founder, TechNext Solutions (Batch of 2009)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium">Ms. Priya Joshi</p>
                      <p className="text-sm text-gray-600">Co-founder, EcoEnergy (Batch of 2012)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <p className="font-medium">Mr. Anil Sharma</p>
                      <p className="text-sm text-gray-600">CEO, BuildSmart Construction (Batch of 2008)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="mt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Alumni Events</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-2"><strong>Venue:</strong> {event.venue}</p>
                    <p className="text-gray-700">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Register for Event</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-blue-900 mb-4">Past Events Gallery</h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* These would be actual event photos in production */}
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="aspect-square bg-gray-200 rounded-lg"></div>
                ))}
              </div>
              
              <Button variant="outline" className="mt-4 w-full">View All Photos</Button>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-lg text-blue-900 mb-4">Alumni Initiatives</h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h5 className="font-medium text-blue-800 mb-2">Mentorship Program</h5>
                  <p className="text-gray-700">Connect with current students as a mentor to guide them in their academic and career journey.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h5 className="font-medium text-blue-800 mb-2">Scholarship Fund</h5>
                  <p className="text-gray-700">Contribute to the alumni scholarship fund to support deserving students with financial constraints.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h5 className="font-medium text-blue-800 mb-2">Guest Lectures</h5>
                  <p className="text-gray-700">Share your industry expertise and experiences with students through guest lectures and workshops.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="register" className="mt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Join Our Alumni Network</h3>
                <p className="text-gray-700 mb-6">
                  Register with the Hi-Tech Institute Alumni Association to stay connected with your alma mater and fellow alumni. Membership provides access to networking opportunities, professional development resources, and exclusive events.
                </p>
                
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
                    
                    <div className="grid grid-cols-2 gap-4">
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
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="graduationYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Graduation Year</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 2015" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Department</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                {...field}
                              >
                                <option value="">Select Department</option>
                                <option value="civil">Civil Engineering</option>
                                <option value="mechanical">Mechanical Engineering</option>
                                <option value="computer">Computer Science & Engineering</option>
                                <option value="aiml">CSE (AI & ML)</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Company/Organization</FormLabel>
                            <FormControl>
                              <Input placeholder="Where do you work?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Designation</FormLabel>
                            <FormControl>
                              <Input placeholder="Your job title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share how you'd like to contribute to the alumni community..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Register as Alumni</Button>
                  </form>
                </Form>
              </div>
              
              <div>
                <Card>
                  <CardHeader className="bg-blue-900 text-white">
                    <CardTitle>Alumni Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">1</div>
                      <div>
                        <h5 className="font-medium">Networking Opportunities</h5>
                        <p className="text-sm text-gray-600">Connect with fellow alumni across industries and locations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">2</div>
                      <div>
                        <h5 className="font-medium">Career Resources</h5>
                        <p className="text-sm text-gray-600">Access job postings, career counseling, and professional development workshops.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">3</div>
                      <div>
                        <h5 className="font-medium">Institute Facilities</h5>
                        <p className="text-sm text-gray-600">Continued access to library, sports facilities, and other campus resources.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">4</div>
                      <div>
                        <h5 className="font-medium">Exclusive Events</h5>
                        <p className="text-sm text-gray-600">Invitation to alumni reunions, technical seminars, and cultural events.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">5</div>
                      <div>
                        <h5 className="font-medium">Giving Back</h5>
                        <p className="text-sm text-gray-600">Opportunities to mentor students, contribute to scholarships, and support institute development.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-blue-900 mb-4">Stay Connected</h4>
                  <p className="text-gray-700 mb-4">Follow us on social media and join our online communities to stay updated with alumni news and events.</p>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Facebook className="h-5 w-5" />
                      <span>Facebook Group</span>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn Page</span>
                    </Button>
                  </div>
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

export default Alumni;

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
