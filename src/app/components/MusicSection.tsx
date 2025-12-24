import { motion } from "motion/react";
import { Music, Heart, Play } from "lucide-react";

interface Song {
  title: string;
  artist: string;
  reason: string;
}

export function MusicSection() {
  const songs: Song[] = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      reason: "Porque eres perfecta para mí, tal como eres",
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      reason: "Te amaré por mil años más",
    },
    {
      title: "Thinking Out Loud",
      artist: "Ed Sheeran",
      reason: "Cuando tus piernas ya no funcionen como antes, yo seguiré enamorado de ti",
    },
    {
      title: "All of Me",
      artist: "John Legend",
      reason: "Porque te entrego todo de mí",
    },
    {
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      reason: "No pude evitar enamorarme de ti",
    },
    {
      title: "Make You Feel My Love",
      artist: "Adele",
      reason: "Haría cualquier cosa por hacerte sentir mi amor",
    },
  ];

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <Music className="w-16 h-16 text-rose-500 mx-auto mb-4" />
        <h2 className="text-rose-600 mb-2">Canciones que me recuerdan a ti</h2>
        <p className="text-gray-600">Cada melodía cuenta nuestra historia</p>
      </motion.div>

      <div className="grid gap-4 md:gap-6">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02, x: 10 }}
            className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-rose-400 cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 bg-gradient-to-br from-rose-400 to-pink-500 p-3 rounded-full"
              >
                <Play className="w-6 h-6 text-white" />
              </motion.div>
              
              <div className="flex-grow">
                <h3 className="text-rose-700 mb-1">{song.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{song.artist}</p>
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 italic">{song.reason}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-600 italic">🎵 Cada canción suena mejor cuando pienso en ti 🎵</p>
      </motion.div>
    </div>
  );
}
