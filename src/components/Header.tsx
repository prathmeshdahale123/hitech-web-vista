import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Departments", href: "/departments" },
    { name: "Facilities", href: "/facilities" },
    { name: "College Cells", href: "/college-cells" },
    { name: "NAAC", href: "/naac" },
    { name: "Gallery", href: "/gallery" },
    { name: "T & P Cell", href: "/placement" },
    { name: "Downloads", href: "/downloads" },
    { name: "NIRF", href: "/nirf" },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* ✅ Contact Bar (Visible on all devices) */}
      <div className="bg-gray-800 text-white py-2 px-4 z-50 relative">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(0240) 2552240</span>
          </div>
          <div className="flex gap-3">
            <Facebook className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Linkedin className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* ✅ Desktop Header */}
      <div className="hidden lg:block sticky top-0 bg-white shadow z-40">
        <div className="container mx-auto px-4 pt-3 pb-2 border-b border-gray-200">
          <div className="flex gap-6 items-start">
            <img
              src="/lovable-uploads/a8cbea0d-761e-4176-9664-da3929fe1b3c.png"
              alt="Hi-Tech Institute Logo"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h5 className="text-sm font-bold text-blue-900">
                Bhartiya Gramin Punarrachna Sanstha's
              </h5>
              <h1 className="text-xl md:text-3xl font-bold text-blue-900 leading-snug">
                Hi-Tech Institute of Technology, Chh. Sambhajinagar
              </h1>
              <p className="text-blue-600 text-sm mt-1">
                A Pioneer to shape global Technocrats
              </p>
              <p className="text-gray-600 text-xs mt-1">
                (Approved by AICTE, DTE Govt. of Maharashtra & Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad)
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="bg-white shadow-sm border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`py-2 text-sm font-medium hover:text-yellow-500 transition-colors ${
                  isActive(item.href)
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-blue-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* ✅ Mobile Header */}
      <div className="block lg:hidden sticky top-0 bg-white shadow z-40">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <img
            src="/lovable-uploads/a8cbea0d-761e-4176-9664-da3929fe1b3c.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? (
              <X className="w-6 h-6 text-blue-900" />
            ) : (
              <Menu className="w-6 h-6 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="bg-white px-4 py-2 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 px-3 text-sm font-medium rounded hover:bg-gray-100 ${
                    isActive(item.href)
                      ? "text-yellow-500 bg-yellow-50"
                      : "text-blue-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
