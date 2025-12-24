import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, X } from "lucide-react";

interface Photo {
  url: string;
  caption: string;
}

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      url: "https://images.unsplash.com/photo-1663428710477-c7c838be76b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmV8ZW58MXx8fHwxNzY2NDExNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Nuestros momentos juntos son mis favoritos 💕"
    },
    {
      url: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzdW5zZXQlMjByb21hbnRpY3xlbnwxfHx8fDE3NjY1MzQ2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Cada atardecer es más hermoso contigo ✨"
    },
    {
      url: "https://images.unsplash.com/photo-1649762107978-817d8dbdd079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBoYXBweSUyMGxvdmV8ZW58MXx8fHwxNzY2NTEzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Tu sonrisa ilumina mi vida 😊"
    },
    {
      url: "https://images.unsplash.com/photo-1591625717042-3b2b55f6a388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBiZWFjaCUyMHJvbWFudGljfGVufDF8fHx8MTc2NjUzNDY0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Aventuras contigo siempre 🌊"
    },
    {
      url: "https://images.unsplash.com/photo-1514846528774-8de9d4a07023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBuYXR1cmUlMjBsb3ZlfGVufDF8fHx8MTc2NjUzNDY0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Tú y yo contra el mundo 🌍"
    },
    {
      url: "https://images.unsplash.com/photo-1677525434289-f3840d85f9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3aW50ZXIlMjBsb3ZlfGVufDF8fHx8MTc2NjUzNDY0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      caption: "Calentando mi corazón en invierno ❄️💝"
    }
  ];

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto mb-4" />
        <h2 className="text-rose-600 mb-2">Nuestros Recuerdos</h2>
        <p className="text-gray-600">Momentos que atesoro en mi corazón</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                {photo.caption}
              </p>
            </div>
            <motion.div
              className="absolute top-2 right-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-6 h-6 text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal para vista ampliada */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white bg-rose-500 rounded-full p-2 hover:bg-rose-600 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white text-center mt-6"
              >
                {selectedPhoto.caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-600 italic">📸 Cada foto cuenta nuestra historia de amor 💕</p>
      </motion.div>
    </div>
  );
}