// src/pages/Gallery.tsx
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
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

const categories = [
  { id: "all", name: "All Images" },
  { id: "College Events", name: "College Events", description: "Major events and celebrations at Hi-Tech Institute" },
  { id: "Workshops & Seminars", name: "Workshops & Seminars", description: "Technical workshops, seminars and guest lectures" },
  { id: "Campus Tour", name: "Campus Tour", description: "Explore our beautiful campus facilities" },
  { id: "Technical Competitions", name: "Technical Competitions", description: "Students participating in various technical competitions" },
  { id: "Sports & Cultural", name: "Sports & Cultural", description: "Sports events and cultural activities" },
];

const fetchGalleryImages = async () => {
  const res = await fetch("https://hi-tech-backend-626g.onrender.com/api/gallery", {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch gallery images");
  }
  return res.json();
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["galleryImages"],
    queryFn: fetchGalleryImages,
  });

  // Process images by category
  const imagesByCategory = categories.reduce((acc, category) => {
    if (category.id === "all") {
      // All images, sorted by date (newest first)
      acc[category.id] = data?.images
        ?.map((img: any) => ({
          id: img._id,
          src: img.image.url,
          alt: img.title || "Gallery Image",
          title: img.title || "Untitled",
          date: img.date
            ? new Date(img.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "No Date",
          createdAt: img.date,
          description: img.description || "",
        }))
        ?.sort((a: any, b: any) =>
          (b.createdAt ? new Date(b.createdAt).getTime() : 0) - (a.createdAt ? new Date(a.createdAt).getTime() : 0)
        ) || [];
    } else {
      // Category-specific images
      acc[category.id] = data?.images
        ?.filter((img: any) => img.category === category.id)
        ?.map((img: any) => ({
          id: img._id,
          src: img.image.url,
          alt: img.title || "Gallery Image",
          title: img.title || "Untitled",
          date: img.date
            ? new Date(img.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : category.id === "Campus Tour"
            ? "Campus Infrastructure"
            : "No Date",
          description: img.description || "",
        })) || [];
    }
    return acc;
  }, {} as Record<string, any[]>);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageHeader title="Photo Gallery" subtitle="Memories captured at Hi-Tech Institute of Technology" />
        <div className="container mx-auto px-4 py-12 flex-grow text-center">Loading...</div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageHeader title="Photo Gallery" subtitle="Memories captured at Hi-Tech Institute of Technology" />
        <div className="container mx-auto px-4 py-12 flex-grow text-center text-red-600">
          Error loading gallery: {(error as Error).message}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader title="Photo Gallery" subtitle="Memories captured at Hi-Tech Institute of Technology" />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Tabs defaultValue="all">
          <div className="overflow-x-auto mb-6">
            <TabsList className="inline-flex whitespace-nowrap">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              {category.id !== "all" && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              )}
              
              {imagesByCategory[category.id].length === 0 ? (
                <p className="text-gray-600">No images available in this category.</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {imagesByCategory[category.id].map((image: any) => (
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
                        {image.description && (
                          <p className="text-white/80 text-sm truncate">{image.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Image Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-auto">
            <DialogHeader className="flex flex-row items-center justify-between">
              <div>
                <DialogTitle>{selectedImage?.title}</DialogTitle>
                <DialogDescription>
                  {selectedImage?.date}
                  {selectedImage?.description && ` | ${selectedImage.description}`}
                </DialogDescription>
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