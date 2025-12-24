import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, X } from "lucide-react";

import pic1 from '@/assets/images/inicio.jpeg';
import pic2 from '@/assets/images/fever.jpeg';
import pic3 from '@/assets/images/karenpic.jpeg';
import pic4 from '@/assets/images/asistente.jpeg';
import pic5 from '@/assets/images/pool.jpeg';
import pic6 from '@/assets/images/hallowen.jpeg';
import pic7 from '@/assets/images/derecha.jpeg';
import pic8 from '@/assets/images/zoo.jpeg';
import pic9 from '@/assets/images/cc.jpeg';

interface Photo {
  url: string;
  caption: string;
}

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      url: pic1,
      caption: "Se podria decir que aqui empezo todo, no? 🎊"
    },
    {
      url: pic2,
      caption: "Nuestras primeras salidas juntos. Cuano saliamos diario a vernos. 🌊"
    },
    {
      url: pic3,
      caption: "Cuando mami Karen nos pide fotos. 📸"
    },
    {
      url: pic4,
      caption: "Dispuesto a ser tu asistente. Como si estudiara dos carreras. 🎓"
    },
    {
      url: pic5,
      caption: "Esa cabaña que es ya inolvidable para nosotros. 🏕️"
    },
    {
      url: pic6,
      caption: "Nuestro primer Halloween juntos. 🎃"
    },
    {
      url: pic7,
      caption: "Siempre voy a concentirte. 👑"
    },
    {
      url: pic8,
      caption: "No dejas de darme nuevas experiencias. 🦁"
    },
    {
      url: pic9,
      caption: "Incluso estuvimos juntos para sacar la cedula. 🦖"
    },
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
        <p className="text-gray-600">Momentos que atesoro en mi corazón de este 2025</p>
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
        <p className="text-gray-600 italic">📸 Cada foto cuenta un pedazo de nuestra historia 💕</p>
      </motion.div>
    </div>
  );
}
