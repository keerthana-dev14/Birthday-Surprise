
import React from "react";
import { Gift, Heart, Sparkles, Flower2 } from "lucide-react";

const Welcome = ({ onNext }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#E6D9FF] via-[#FFF7FB] to-[#FFD6E7] flex items-center justify-center px-6 py-12 overflow-hidden">

      {/* Decorations */}
      <Sparkles className="absolute top-12 left-10 text-purple-300" size={35} />
      <Heart className="absolute top-20 right-12 text-pink-300 animate-pulse" size={30} />
      <Flower2 className="absolute bottom-12 left-12 text-purple-300" size={35} />
      <Heart className="absolute bottom-16 right-12 text-pink-300 animate-bounce" size={30} />

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 items-center gap-10">

        {/* Left Photo */}
        <div className="flex justify-center">
          <div className="bg-white p-3 pb-8 rounded-xl shadow-2xl rotate-[-7deg] hover:rotate-0 transition duration-500 max-w-[250px]">
            <img
              src="/images/akka1.jpeg"
              alt="Our beautiful memories"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-center mt-3 font-serif text-[#9876C5] text-lg">
              My forever person 💗
            </p>
          </div>
        </div>

        {/* Centre Welcome */}
        <div className="text-center">

          <div className="flex justify-center mb-7">
            <div className="bg-white/80 p-6 rounded-full shadow-xl animate-bounce">
              <Gift size={55} className="text-[#B28AD9]" />
            </div>
          </div>

          <p className="text-[#B28AD9] tracking-[4px] uppercase text-xs mb-5">
            Made with endless love
          </p>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#9876C5] mb-6">
            Heyyy Akka! 💜
          </h1>

          <p className="text-[#806B91] text-lg leading-8 mb-8">
            To my first best friend, my forever partner in crime
            and one of the most special people in my life.
            I've created something just for you.
          </p>

          <button
            type="button"
            onClick={onNext}
            className="bg-gradient-to-r from-[#DDA5CE] to-[#B99AE8] hover:scale-110 text-white px-8 py-4 rounded-full shadow-lg transition duration-300"
          >
            <span className="flex items-center gap-3">
              Open Your Surprise
              <Heart size={20} />
            </span>
          </button>

          <p className="text-[#B28AD9] italic font-serif mt-8">
            A little surprise, a lot of love ✨
          </p>

        </div>

        {/* Right Photo */}
        <div className="flex justify-center">
          <div className="bg-white p-3 pb-8 rounded-xl shadow-2xl rotate-[7deg] hover:rotate-0 transition duration-500 max-w-[250px]">
            <img
              src="/images/akka2.jpeg"
              alt="My lovely Akka"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-center mt-3 font-serif text-[#9876C5] text-lg">
              My forever queen 👑
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Welcome;
