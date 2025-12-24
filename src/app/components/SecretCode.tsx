import { useState } from "react";
import { motion } from "motion/react";
import { Lock, Heart, Snowflake } from "lucide-react";

interface SecretCodeProps {
  onUnlock: () => void;
}

export function SecretCode({ onUnlock }: SecretCodeProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const correctCode = "GXP1N"; // Código secreto

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (code.toUpperCase() === correctCode) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 relative overflow-hidden">
      {/* Copos de nieve animados */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-200"
          initial={{ 
            top: `-${Math.random() * 100}px`, 
            left: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
          animate={{
            top: "110%",
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Snowflake size={16 + Math.random() * 16} />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 relative z-10"
      >
        <motion.div
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="inline-block"
            >
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto mb-4" />
            </motion.div>
            <h1 className="text-rose-600 mb-2">Feliz Navidad Mi Amor</h1>
            <p className="text-gray-600">Ingresa el código secreto para ver tu regalo</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Código secreto..."
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all ${
                  error ? "border-red-500 bg-red-50" : "border-rose-200"
                }`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 mt-2">Código incorrecto, intenta de nuevo amor 💕</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-xl hover:from-rose-500 hover:to-pink-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Lock className="w-5 h-5" />
              Desbloquear Regalo
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 italic">Con todo mi amor 🎁✨</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
