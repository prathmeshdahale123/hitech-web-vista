import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook, Twitter, Linkedin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top contact bar */}
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

      {/* Logo and Title Section – sticky on all, hides on scroll for small screens only */}
      <div
        className={`bg-white shadow-md sticky top-0 z-40 transform transition-transform duration-300 ${
          scrolled ? "max-lg:-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-4 sm:gap-6">
            <img
              src="/lovable-uploads/a8cbea0d-761e-4176-9664-da3929fe1b3c.png"
              alt="Hi-Tech Institute Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
            <div className="text-center sm:text-left">
              <h5 className="text-sm sm:text-xl font-bold text-blue-900">
                Bhartiya Gramin Punarrachna Sanstha's
              </h5>
              <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-blue-900">
                Hi-Tech Institute of Technology, Chh. Sambhajinagar
              </h1>
              <p className="text-blue-600 text-xs sm:text-sm md:text-base mt-1">
                A Pioneer to shape global Technocrats
              </p>
              <p className="text-gray-600 text-[10px] sm:text-xs mt-1">
                (Approved by AICTE, DTE Govt. of Maharashtra & Affiliated to Dr.
                Babasaheb Ambedkar Technological University, Lonere, Raigad)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-lg sticky top-0 max-lg:sticky max-lg:top-0 z-30 lg:sticky lg:top-[148px]">
        <div className="container mx-auto px-4">
          <nav className="py-2">
            <div className="flex items-center justify-between">
              {/* Desktop Nav */}
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

              {/* Mobile menu toggle */}
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

            {/* Mobile Nav */}
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