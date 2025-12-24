import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SecretCode } from "./components/SecretCode";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { LoveLetter } from "./components/LoveLetter";
import { MusicSection } from "./components/MusicSection";
import { Gallery } from "./components/Gallery";
import { Heart, Mail, Music, Image, Snowflake } from "lucide-react";

type Screen = "code" | "welcome" | "hub";
type Tab = "letter" | "music" | "gallery";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("code");
  const [activeTab, setActiveTab] = useState<Tab>("letter");

  const handleUnlock = () => {
    setCurrentScreen("welcome");
  };

  const handleWelcomeComplete = () => {
    setCurrentScreen("hub");
  };

  if (currentScreen === "code") {
    return <SecretCode onUnlock={handleUnlock} />;
  }

  if (currentScreen === "welcome") {
    return <WelcomeMessage onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
      {/* Copos de nieve de fondo */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose-200/30"
          initial={{ 
            top: `-${Math.random() * 100}px`, 
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            top: "110%",
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Snowflake size={20 + Math.random() * 20} />
        </motion.div>
      ))}

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/80 backdrop-blur-sm shadow-lg border-b-4 border-rose-200"
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
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
            >
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
            </motion.div>
            <h1 className="text-rose-600">Regalo de Navidad para Ti</h1>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0.5
              }}
            >
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Tabs Navigation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto px-4 mt-8"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-2 flex gap-2">
          <button
            onClick={() => setActiveTab("letter")}
            className={`flex-1 py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === "letter"
                ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg"
                : "text-gray-600 hover:bg-rose-50"
            }`}
          >
            <Mail className="w-5 h-5" />
            <span>Love Letter</span>
          </button>
          <button
            onClick={() => setActiveTab("music")}
            className={`flex-1 py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === "music"
                ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg"
                : "text-gray-600 hover:bg-rose-50"
            }`}
          >
            <Music className="w-5 h-5" />
            <span>Music</span>
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex-1 py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === "gallery"
                ? "bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg"
                : "text-gray-600 hover:bg-rose-50"
            }`}
          >
            <Image className="w-5 h-5" />
            <span>Gallery</span>
          </button>
        </div>
      </motion.div>

      {/* Content Area */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10 max-w-6xl mx-auto px-4 py-8"
      >
        <AnimatePresence mode="wait">
          {activeTab === "letter" && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <LoveLetter />
            </motion.div>
          )}
          {activeTab === "music" && (
            <motion.div
              key="music"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <MusicSection />
            </motion.div>
          )}
          {activeTab === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <Gallery />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative z-10 text-center py-8 px-4"
      >
        <p className="text-gray-600 italic">Hecho con amor para mi Pauli 💝 Navidad 2025 🎄</p>
      </motion.footer>
    </div>
  );
}
