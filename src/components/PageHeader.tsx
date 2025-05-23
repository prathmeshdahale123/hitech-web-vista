
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  bgImage = "/lovable-uploads/e10ad61e-b88e-4aa7-9fb0-1810d11c6e9a.png"
}) => {
  return (
    <section className="relative h-[30vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url('${bgImage}')`
        }}
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-blue-100">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
