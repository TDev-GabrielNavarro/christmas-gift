import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Heart } from "lucide-react";

export function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  
  const letterText = `Mi amor,

Cada día a tu lado es un regalo que atesoro en mi corazón. Tu sonrisa ilumina mis días más oscuros, y tu risa es la melodía más hermosa que he escuchado.

Gracias por ser mi compañera, mi mejor amiga, y el amor de mi vida. En ti he encontrado un hogar, un refugo donde puedo ser yo mismo sin miedo.

Esta Navidad quiero que sepas que eres el mejor regalo que la vida me ha dado. No necesito nada más mientras te tenga a ti.

Te amo hoy, mañana y siempre.

Con todo mi corazón,
Tu amor 💕`;

  const handleOpenLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index <= letterText.length) {
          setDisplayedText(letterText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30); // Velocidad del efecto máquina de escribir
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[600px] p-4">
      {!isOpen ? (
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center cursor-pointer"
          onClick={handleOpenLetter}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
            className="bg-gradient-to-br from-rose-200 to-pink-200 p-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow"
          >
            <Mail className="w-32 h-32 text-rose-600 mx-auto mb-4" />
            <p className="text-rose-700">Haz click para abrir la carta</p>
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500 mx-auto mt-2" />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-rose-200 relative">
            {/* Decoración esquinas */}
            <div className="absolute top-4 right-4">
              <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart className="w-8 h-8 text-rose-300 fill-rose-300" />
            </div>
            
            <div className="relative">
              <p className="text-gray-800 whitespace-pre-wrap leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                {displayedText}
                {displayedText.length < letterText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-gray-800 ml-0.5"
                  />
                )}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
