import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Upload, Edit3, Trash2, Eye, Plus, Download } from "lucide-react";

// Gallery categories matching backend schema
const GALLERY_CATEGORIES = [
  { id: "College Events", name: "College Events" },
  { id: "Workshops & Seminars", name: "Workshops & Seminars" },
  { id: "Campus Tour", name: "Campus Tour" },
  { id: "Technical Competitions", name: "Technical Competitions" },
  { id: "Sports & Cultural", name: "Sports & Cultural" },
];

export default function EnhancedAdminDashboard({ admin, onLogout }) {
  // Notice Management State
  const [notices, setNotices] = useState([]);
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeDescription, setNoticeDescription] = useState("");
  const [noticeFile, setNoticeFile] = useState(null);
  const [noticeError, setNoticeError] = useState("");
  const [editNoticeId, setEditNoticeId] = useState(null);

  // Gallery Management State
  const [galleryImages, setGalleryImages] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("College Events");
  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageDate, setImageDate] = useState("");
  const [galleryError, setGalleryError] = useState("");
  const [editImageId, setEditImageId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

  // Tab management state
  const [activeTab, setActiveTab] = useState("notices");

  // Fetch data on mount
  useEffect(() => {
    fetchNotices();
    fetchGalleryImages();
  }, []);

  // Notice Management Functions
  async function fetchNotices() {
    try {
      const res = await fetch(
        "https://hi-tech-backend-626g.onrender.com/api/notices",
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) setNotices(data.data.notices || []);
      else setNoticeError(data.message || "Failed to load notices");
    } catch (err) {
      setNoticeError("Network error while loading notices");
      console.error(err);
    }
  }

  // Gallery Management Functions
  async function fetchGalleryImages() {
    try {
      const res = await fetch(
        "https://hi-tech-backend-626g.onrender.com/api/gallery",
        {
          credentials: "include",
        }
      );
      const data = await res.json();

      if (data.success) {
        // Organize images by category
        const imagesByCategory = {};

        // Initialize all categories
        GALLERY_CATEGORIES.forEach((category) => {
          imagesByCategory[category.id] = [];
        });

        // Group images by category
        if (data.images) {
          data.images.forEach((img) => {
            const category = img.category || "College Events"; // Default to "College Events" if missing
            if (imagesByCategory[category]) {
              imagesByCategory[category].push({
                id: img._id,
                title: img.title,
                description: img.description || "",
                url: img.image?.url,
                date: img.date
                  ? new Date(img.date).toISOString().split("T")[0]
                  : new Date(img.createdAt).toISOString().split("T")[0],
                category: category,
              });
            }
          });
        }

        setGalleryImages(imagesByCategory);
      } else {
        setGalleryError(data.message || "Failed to load gallery images");
      }
    } catch (err) {
      setGalleryError("Network error while loading gallery images");
      console.error("Gallery fetch error:", err);
    }
  }

  const resetNoticeForm = () => {
    setNoticeTitle("");
    setNoticeDescription("");
    setNoticeFile(null);
    setEditNoticeId(null);
    setNoticeError("");
  };

  const resetImageForm = () => {
    setImageTitle("");
    setImageDescription("");
    setImageFile(null);
    setImageDate("");
    setEditImageId(null);
    setGalleryError("");
  };

  const handleNoticeSubmit = async (e) => {
    e.preventDefault();
    setNoticeError("");

    if (!noticeTitle || !noticeDescription) {
      setNoticeError("Title and description are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", noticeTitle);
      formData.append("description", noticeDescription);
      if (noticeFile) formData.append("attachment", noticeFile);

      let url = "https://hi-tech-backend-626g.onrender.com/api/notices";
      let method = "POST";

      if (editNoticeId) {
        url += `/${editNoticeId}`;
        method = "PUT";
      }

      const res = await fetch(url, {
        method,
        credentials: "include",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        fetchNotices();
        resetNoticeForm();
      } else {
        setNoticeError(data.message || "Failed to save notice");
      }
    } catch (err) {
      setNoticeError("Network error while saving notice");
      console.error(err);
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    setGalleryError("");

    if (!imageTitle || !imageDescription) {
      setGalleryError("Title and description are required");
      return;
    }
    if (!editImageId && !imageFile) {
      setGalleryError("Image file is required for new uploads");
      return;
    }
    if (!imageDate) {
      setGalleryError("Date is required");
      return;
    }

    try {
      let url = "https://hi-tech-backend-626g.onrender.com/api/gallery";
      let method = "POST";
      let options;

      if (editImageId) {
        // PUT: send JSON (no file)
        url += `/${editImageId}`;
        method = "PUT";
        const data = {
          title: imageTitle,
          description: imageDescription,
          category: selectedCategory,
          date: imageDate,
        };

        options = {
          method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
      } else {
        // POST: send FormData (with file)
        const formData = new FormData();
        formData.append("title", imageTitle);
        formData.append("description", imageDescription);
        formData.append("category", selectedCategory);
        formData.append("date", imageDate);
        if (imageFile) formData.append("attachment", imageFile);

        options = {
          method,
          credentials: "include",
          body: formData,
        };
      }

      const res = await fetch(url, options);
      const responseData = await res.json();

      if (responseData.success) {
        fetchGalleryImages(); // Refresh the gallery images
        resetImageForm();
      } else {
        setGalleryError(responseData.message || "Failed to save image");
        console.log("Server response:", responseData);
      }
    } catch (err) {
      setGalleryError("Network error while saving image");
      console.error("Error:", err);
    }
  };

  const handleEditNotice = (notice) => {
    setNoticeTitle(notice.title);
    setNoticeDescription(notice.description);
    setEditNoticeId(notice._id);
    setNoticeFile(null);
    setNoticeError("");
  };

  const handleEditImage = (image) => {
    setImageTitle(image.title);
    setImageDescription(image.description);
    setImageDate(image.date);
    setEditImageId(image.id);
    setSelectedCategory(image.category); // Sync category with image
    setSelectedImage(image);
    setGalleryError("");
  };

  const handleDeleteNotice = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;

    try {
      const res = await fetch(
        `https://hi-tech-backend-626g.onrender.com/api/notices/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();

      if (data.success) {
        fetchNotices();
      } else {
        alert(data.message || "Failed to delete notice");
      }
    } catch (err) {
      alert("Network error while deleting notice");
      console.error(err);
    }
  };

  const handleDeleteImage = async (imageId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(
        `https://hi-tech-backend-626g.onrender.com/api/gallery/${imageId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (data.success) {
        fetchGalleryImages(); // Refresh the gallery images
      } else {
        alert(data.message || "Failed to delete image");
      }
    } catch (err) {
      alert("Network error while deleting image");
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch(
        "https://hi-tech-backend-626g.onrender.com/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) onLogout();
      else alert(data.message || "Logout failed");
    } catch (err) {
      alert("Network error during logout");
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Custom Tabs Implementation */}
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("notices")}
            className={`px-6 py-3 text-lg font-medium transition-colors border-b-2 ${
              activeTab === "notices"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Notice Management
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-6 py-3 text-lg font-medium transition-colors border-b-2 ${
              activeTab === "gallery"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Gallery Management
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "notices" && (
          <div className="space-y-6">
            {/* Notice Form */}
            <div className="border border-blue-200 p-6 rounded-lg bg-blue-50">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                {editNoticeId ? "Edit Notice" : "Add New Notice"}
              </h2>
              {noticeError && (
                <p className="text-red-600 mb-4">{noticeError}</p>
              )}

              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Notice Title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={noticeTitle}
                  onChange={(e) => setNoticeTitle(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Notice Description"
                  className="w-full p-3 border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={noticeDescription}
                  onChange={(e) => setNoticeDescription(e.target.value)}
                  required
                  rows={4}
                />
                <div className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-gray-500" />
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => setNoticeFile(e.target.files[0])}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleNoticeSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-2 rounded-lg transition-colors"
                >
                  {editNoticeId ? "Update Notice" : "Add Notice"}
                </button>
                {editNoticeId && (
                  <button
                    onClick={resetNoticeForm}
                    className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* Existing Notices */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                Existing Notices
              </h2>
              {notices.length === 0 ? (
                <p className="text-gray-600 text-center py-8">
                  No notices available.
                </p>
              ) : (
                <div className="grid gap-4">
                  {notices.map((notice) => (
                    <div
                      key={notice._id}
                      className="border border-blue-300 p-4 rounded-lg bg-white flex justify-between items-start hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-blue-900 text-lg">
                          {notice.title}
                        </h3>
                        <p className="text-gray-700 mt-2">
                          {notice.description}
                        </p>
                        {notice.fileUrl && (
                          <a
                            href={notice.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mt-2"
                          >
                            <Download className="h-4 w-4" />
                            View Attachment
                          </a>
                        )}
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEditNotice(notice)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="Edit Notice"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteNotice(notice._id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                          title="Delete Notice"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Gallery Management Tab */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            {/* Category Selection */}
            <div className="flex flex-wrap gap-2 mb-6">
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    resetImageForm();
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Image Upload Form */}
            <div className="border border-blue-200 p-6 rounded-lg bg-blue-50">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                {editImageId ? "Edit Image" : "Add New Image"} -{" "}
                {
                  GALLERY_CATEGORIES.find((c) => c.id === selectedCategory)
                    ?.name
                }
              </h2>
              {galleryError && (
                <p className="text-red-600 mb-4">{galleryError}</p>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Image Title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={imageTitle}
                  onChange={(e) => setImageTitle(e.target.value)}
                  required
                />
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={imageDate}
                  onChange={(e) => setImageDate(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Image Description"
                  className="w-full p-3 border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                  value={imageDescription}
                  onChange={(e) => setImageDescription(e.target.value)}
                  required
                  rows={3}
                />
                <div className="flex items-center gap-2 md:col-span-2">
                  <Upload className="h-5 w-5 text-gray-500" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className="flex-1"
                    required={!editImageId}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleImageSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-2 rounded-lg transition-colors"
                >
                  {editImageId ? "Update Image" : "Add Image"}
                </button>
                {editImageId && (
                  <button
                    onClick={resetImageForm}
                    className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* Gallery Images Display */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                {
                  GALLERY_CATEGORIES.find((c) => c.id === selectedCategory)
                    ?.name
                }{" "}
                Images
              </h2>

              {!galleryImages[selectedCategory] ||
              galleryImages[selectedCategory].length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    No images in this category yet.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages[selectedCategory].map((image) => (
                    <div
                      key={image.id}
                      className="relative group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.display = "none";
                            if (
                              target.nextSibling &&
                              target.nextSibling instanceof HTMLElement
                            ) {
                              (target.nextSibling as HTMLElement).style.display = "flex";
                            }
                          }}
                        />
                        <div
                          className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm"
                          style={{ display: "none" }}
                        >
                          Image not available
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm text-blue-900 truncate">
                          {image.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {image.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {image.date}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg shadow-lg">
                        <button
                          onClick={() => {
                            setSelectedImage(image);
                            setShowImageModal(true);
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-l-lg transition-colors"
                          title="View Image"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleEditImage(image)}
                          className="p-2 text-yellow-600 hover:bg-yellow-100 transition-colors"
                          title="Edit Image"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteImage(image.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-r-lg transition-colors"
                          title="Delete Image"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader className="flex flex-row items-center justify-between">
            <div>
              <DialogTitle>{selectedImage?.title}</DialogTitle>
              <DialogDescription>
                {selectedImage?.description}
              </DialogDescription>
            </div>
            <button
              onClick={() => setShowImageModal(false)}
              className="rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>

          {selectedImage && (
            <div className="flex justify-center mt-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[70vh] object-contain rounded-md"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                  if (
                    target.nextSibling &&
                    target.nextSibling instanceof HTMLElement
                  ) {
                    (target.nextSibling as HTMLElement).style.display = "block";
                  }
                }}
              />
              <div
                className="text-center text-gray-500"
                style={{ display: "none" }}
              >
                Image not available
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}