import { useState } from "react";
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
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-gray-800 text-white py-2 px-4">
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

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Logo and title section */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="/lovable-uploads/a8cbea0d-761e-4176-9664-da3929fe1b3c.png" 
                  alt="Hi-Tech Institute Logo" 
                  className="w-16 h-16"
                />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-blue-900">
                    Bhartiya Gramin Punarrachna Sanstha's<br />
                    Hi-Tech Institute of Technology, Aurangabad
                  </h1>
                  <p className="text-blue-600 text-sm md:text-base mt-1">
                    A Pioneer to shape global Technocrats
                  </p>
                  <p className="text-gray-600 text-xs mt-1">
                    (Approved by AICTE, DTE Govt. of Maharashtra & Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="py-2">
            <div className="flex items-center justify-between">
              <div className="hidden lg:flex space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`py-2 px-1 text-sm font-medium transition-colors hover:text-yellow-500 ${
                      isActive(item.href) 
                        ? "text-yellow-500 border-b-2 border-yellow-500" 
                        : "text-blue-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-blue-900" />
                ) : (
                  <Menu className="w-6 h-6 text-blue-900" />
                )}
              </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`py-2 px-3 text-sm font-medium transition-colors hover:text-yellow-500 hover:bg-gray-50 rounded ${
                        isActive(item.href) 
                          ? "text-yellow-500 bg-yellow-50" 
                          : "text-blue-900"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
