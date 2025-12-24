import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

interface WelcomeMessageProps {
  onComplete: () => void;
}

export function WelcomeMessage({ onComplete }: WelcomeMessageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative overflow-hidden">
      {/* Partículas brillantes */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400"
          initial={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            scale: 0,
            opacity: 0 
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Sparkles size={20} />
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.8, times: [0, 0.6, 1] }}
          className="mb-8"
        >
          <Heart className="w-24 h-24 text-rose-500 fill-rose-500 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-rose-600 mb-6 px-4"
        >
          Bienvenida Pauli,
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-gray-700 mb-8 max-w-lg mx-auto px-4"
        >
          disfruta lo que te hice con cariño
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <motion.button
            onClick={onComplete}
            className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 rounded-full hover:from-rose-500 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continuar 💝
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
