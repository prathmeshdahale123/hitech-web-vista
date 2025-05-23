
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/a8cbea0d-761e-4176-9664-da3929fe1b3c.png" 
                alt="Hi-Tech Institute Logo" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-lg font-bold">Hi-Tech Institute of Technology</h3>
                <p className="text-blue-200 text-sm">Since 2001</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              A Pioneer to shape global Technocrats. Approved by AICTE, DTE Govt. of Maharashtra & 
              Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="https://www.aicte-india.org/" className="hover:text-yellow-400 transition-colors">AICTE</a></li>
              <li><a href="https://dte.maharashtra.gov.in/" className="hover:text-yellow-400 transition-colors">DTE</a></li>
              <li><a href="https://bamua.digitaluniversity.ac/" className="hover:text-yellow-400 transition-colors">BAMU</a></li>
              <li><a href="https://dbatu.ac.in/" className="hover:text-yellow-400 transition-colors">BATU</a></li>
              <li><a href="https://www.education.gov.in/higher_education" className="hover:text-yellow-400 transition-colors">MHRD</a></li>
              <li><a href="https://mahadbt.maharashtra.gov.in/" className="hover:text-yellow-400 transition-colors">Scholarships</a></li>
              <li><a href="https://www.nirfindia.org/home" className="hover:text-yellow-400 transition-colors">NIRF</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Waluj MIDC, Aurangabad,<br />
                  Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(0240) 2552240</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@hitech.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Hi-Tech Institute of Technology. All rights reserved.</p>
          <p className="text-sm mt-2">
            Affiliated to: AICTE | DTE | BAMU | BATU
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
