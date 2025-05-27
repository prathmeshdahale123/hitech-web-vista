import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.3)), url('/lovable-uploads/e10ad61e-b88e-4aa7-9fb0-1810d11c6e9a.png')`
        }}
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to<br />
            <span className="text-yellow-400">Hi-Tech Institute</span><br />
            of Technology
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            A Pioneer to shape global Technocrats
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/departments">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Explore Courses
              </button>
            </Link>
            {/* <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Virtual Tour
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;