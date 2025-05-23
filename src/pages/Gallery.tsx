
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

// Placeholder images for different categories
const categories = [
  {
    id: "events",
    name: "College Events",
    description: "Major events and celebrations at Hi-Tech Institute",
    images: Array(12).fill(null).map((_, i) => ({
      id: `event-${i + 1}`,
      src: `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=350&auto=format&fit=crop&q=80`,
      alt: `College Event ${i + 1}`,
      title: `Annual Day Celebration ${2023 - Math.floor(i / 4)}`,
      date: `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][i % 12]} ${2023 - Math.floor(i / 4)}`
    }))
  },
  {
    id: "workshops",
    name: "Workshops & Seminars",
    description: "Technical workshops, seminars and guest lectures",
    images: Array(9).fill(null).map((_, i) => ({
      id: `workshop-${i + 1}`,
      src: `https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=350&auto=format&fit=crop&q=80`,
      alt: `Workshop ${i + 1}`,
      title: `Web Development Workshop ${2023 - Math.floor(i / 3)}`,
      date: `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][i % 12]} ${2023 - Math.floor(i / 3)}`
    }))
  },
  {
    id: "campus",
    name: "Campus Tour",
    description: "Explore our beautiful campus facilities",
    images: Array(15).fill(null).map((_, i) => ({
      id: `campus-${i + 1}`,
      src: `https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=350&auto=format&fit=crop&q=80`,
      alt: `Campus ${i + 1}`,
      title: `Campus View ${i + 1}`,
      date: "Campus Infrastructure"
    }))
  },
  {
    id: "competitions",
    name: "Technical Competitions",
    description: "Students participating in various technical competitions",
    images: Array(8).fill(null).map((_, i) => ({
      id: `competition-${i + 1}`,
      src: `https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=350&auto=format&fit=crop&q=80`,
      alt: `Competition ${i + 1}`,
      title: `Robotics Competition ${2023 - Math.floor(i / 2)}`,
      date: `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][i % 12]} ${2023 - Math.floor(i / 2)}`
    }))
  },
  {
    id: "sports",
    name: "Sports & Cultural",
    description: "Sports events and cultural activities",
    images: Array(10).fill(null).map((_, i) => ({
      id: `sport-${i + 1}`,
      src: `https://images.unsplash.com/photo-1526675055086-44ee5dae0c64?w=500&h=350&auto=format&fit=crop&q=80`,
      alt: `Sport ${i + 1}`,
      title: `Annual Sports Meet ${2023 - Math.floor(i / 3)}`,
      date: `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][i % 12]} ${2023 - Math.floor(i / 3)}`
    }))
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader 
        title="Photo Gallery" 
        subtitle="Memories captured at Hi-Tech Institute of Technology" 
      />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Tabs defaultValue="events">
          <div className="overflow-x-auto mb-6">
            <TabsList className="inline-flex whitespace-nowrap">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-900">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.images.map((image) => (
                  <div 
                    key={image.id} 
                    className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <h3 className="text-white font-medium">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Image Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-auto">
            <DialogHeader className="flex flex-row items-center justify-between">
              <div>
                <DialogTitle>{selectedImage?.title}</DialogTitle>
                <DialogDescription>{selectedImage?.date}</DialogDescription>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="rounded-full p-2 hover:bg-gray-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogHeader>
            
            {selectedImage && (
              <div className="flex justify-center mt-4">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="max-h-[70vh] object-contain rounded-md"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;
