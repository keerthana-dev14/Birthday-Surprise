
import { Heart, Camera, Sparkles } from "lucide-react";
type MemoriesProps = {
  onNext: () => void;
};

const Memories = ({ onNext }: MemoriesProps) => {

   const photos = [
  {
    image: "/images/akka3.jpeg",
    caption: "Our Little World 💗",
    description: "Memories I'll always treasure."
  },
  {
    image: "/images/akka4.jpeg",
    caption: "My Forever Favourite 💜",
    description: "Growing up with you is my biggest blessing."
  },
  {
    image: "/images/akka5.jpeg",
    caption: "Partners in Crime 🦋",
    description: "Life is never boring with you."
  },
  {
    image: "/images/akka6.jpeg",
    caption: "My Happy Place 🌸",
    description: "Every moment with you is special."
  },
  {
    image: "/images/akka7.jpeg",
    caption: "Forever Together 💕",
    description: "Different moments, endless memories."
  },
  {
    image: "/images/akka8.jpeg",
    caption: "My Favourite Person 🥹",
    description: "Lucky to have you as my Akka."
  },
  {
    image: "/images/akka9.jpeg",
    caption: "Beautiful Memories ✨",
    description: "Some moments stay forever."
  },
  {
    image: "/images/akka10.jpeg",
    caption: "My Forever Queen 👑",
    description: "You will always be special."
  },
  {
    image: "/images/akka11.jpeg",
    caption: "Love You Akka ❤️",
    description: "Our story never ends."
  }
];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6D9FF] via-[#FFF7FB] to-[#FFD6E7] px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">

        <div className="flex justify-center mb-4">
          <Camera size={40} className="text-[#B28AD9]" />
        </div>

        <p className="text-[#B28AD9] uppercase tracking-[4px] text-sm mb-4">
          A journey of beautiful memories
        </p>

        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#9876C5]">
          Our Little World 💜
        </h1>

        <p className="text-[#806B91] mt-5 text-lg">
          Some moments become memories, some people become home.
        </p>

      </div>

      {/* Photo Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {photos.map((photo, index) => (
          <div
            key={index}
            className="bg-white p-4 pb-7 rounded-xl shadow-xl hover:scale-105 hover:-rotate-2 transition duration-500"
          >

            <img
              src={photo.image}
              alt={photo.caption}
              className="w-full h-72 object-contain rounded-lg bg-[#FFF7FB]"
            />

            <h2 className="text-center font-serif text-xl text-[#9876C5] mt-5">
              {photo.caption}
            </h2>

            <p className="text-center text-sm text-[#A38BAF] mt-2">
              {photo.description}
            </p>

          </div>
        ))}

      </div>

      {/* Bottom Message */}
      <div className="text-center mt-16">

        <div className="flex justify-center text-[#C59BD9] mb-4">
          <Heart size={28} />
        </div>

        <p className="text-[#9876C5] font-serif text-2xl italic">
          "Every picture has a story, and you are my favourite part."
        </p>

        <Sparkles className="mx-auto mt-5 text-[#C59BD9]" />

      </div>
      <button
  onClick={onNext}
  className="mt-10 flex items-center gap-3 mx-auto
  bg-gradient-to-r from-[#DDA5CE] to-[#B99AE8]
  text-white px-9 py-4 rounded-full shadow-lg
  hover:scale-110 transition duration-300"
>
  Next Surprise 💜
</button>

    </div>
    
  );
};

export default Memories;
