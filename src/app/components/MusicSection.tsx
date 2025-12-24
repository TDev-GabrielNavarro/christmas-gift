import { motion } from "motion/react";
import { Music, Heart, Play } from "lucide-react";

interface Song {
  title: string;
  artist: string;
  reason: string;
  url: string;
}

export function MusicSection() {
  const songs: Song[] = [
    {
      title: "Sunday Morning",
      artist: "Maroon 5",
      reason: "Incluso en lo más oscuro, eres lo que me da luz y claridad.",
      url: "https://www.youtube.com/watch?v=S2Cti12XBw4",
    },
    {
      title: "I'll Take Care Of You",
      artist: "Tyler, The Creator",
      reason: "Quiero prometerte mi presencia y cuidado incondicional.",
      url: "https://www.youtube.com/watch?v=O3GONS2o1sM",
    },
    {
      title: "in the pool",
      artist: "Kensuke Ushio",
      reason: "Cuando leí el manga me encantó, pero con la peli ahora estás tú marcada en mis recuerdos de uno de los romances ficticios que más adoro.",
      url: "https://www.youtube.com/watch?v=Y3UH_9ZV1-A",
    },
    {
      title: "Heartbeat, Heartbreak",
      artist: "Shihoko Hirata",
      reason: "Aún no olvido cómo para mi cumple me subiste con esta canción, en verdad que me dejó marcado.",
      url: "https://www.youtube.com/watch?v=lKcy4hLvzgI",
    },
    {
      title: "Thinkin Bout You",
      artist: "Frank Ocean",
      reason: "¿No te cansas de estar en mi cabeza? Siempre que en mi playlist sale Frank Ocean pienso en ti.",
      url: "https://www.youtube.com/watch?v=6JHu3b-pbh8",
    },
    {
      title: "Otro Atardecer",
      artist: "Bad Bunny ft. The Marías",
      reason: "¡Vamos al concierto! Además recuerdo mucho la playa y disfruto mucho ir a playa contigo, me encanta.",
      url: "https://www.youtube.com/watch?v=VBiNZcH27Y8",
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
        <p className="text-gray-600">Cada una cuenta con lore</p>
      </motion.div>

      <div className="grid gap-4 md:gap-6">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02, x: 10 }}
            className="bg-linear-to-r from-rose-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-rose-400 cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <a 
                href={song.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="shrink-0 bg-linear-to-br from-rose-400 to-pink-500 p-3 rounded-full"
              >
                <Play className="w-6 h-6 text-white" />
              </motion.div>
              </a>
              
              <div className="grow">
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-700 hover:text-rose-800 hover:underline mb-1 inline-block transition-colors"
                >
                  <h3 className="text-rose-700 mb-1">{song.title}</h3>
                </a>
                <p className="text-sm text-gray-600 mb-2">{song.artist}</p>
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400 shrink-0 mt-0.5" />
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
        <p className="text-gray-600 italic">Cada canción se disfruta más cuando estás en mi cabeza</p>
      </motion.div>
    </div>
  );
}
