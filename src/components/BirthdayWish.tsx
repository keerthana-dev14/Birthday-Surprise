import { useState } from "react";

import {
  Heart,
  Sparkles,
  Flower2,
  Star,
  Gift
} from "lucide-react";

    const BirthdayWish = ({ onNext }: { onNext: () => void }) => {
  const [showMore, setShowMore] = useState(false);

  const decorations = [
    { left: "8%", delay: "0s", size: 25 },
    { left: "22%", delay: "2s", size: 18 },
    { left: "45%", delay: "1s", size: 28 },
    { left: "70%", delay: "3s", size: 22 },
    { left: "88%", delay: "1.5s", size: 30 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#E6D9FF] via-[#FFF7FB] to-[#FFD6E7] flex items-center justify-center px-5 py-16">

      {/* Floating Hearts */}
      {decorations.map((item, index) => (
        <Heart
          key={index}
          size={item.size}
          fill="#E9A8D0"
          className="absolute bottom-0 text-[#DDA5CE] pointer-events-none birthday-float"
          style={{
            left: item.left,
            animationDelay: item.delay
          }}
        />
      ))}

      {/* Background Decorations */}
      <Sparkles className="absolute top-12 left-10 text-[#B99AE8] animate-pulse" size={35} />
      <Star className="absolute top-20 right-12 text-[#EBAFD0] animate-spin" size={25} />
      <Flower2 className="absolute bottom-12 left-12 text-[#B99AE8] animate-pulse" size={40} />
      <Heart className="absolute top-1/3 right-8 text-pink-300 animate-bounce" size={30} />

      {/* Birthday Content */}
      <div className="relative z-10 max-w-3xl w-full text-center">

        {/* Cake */}
        <div className="text-7xl mb-6 birthday-cake">
          🎂
        </div>

        <p className="text-[#B28AD9] uppercase tracking-[5px] text-xs md:text-sm font-semibold mb-5">
          A special day for my special person
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#9876C5] birthday-glow">
          Happy Birthday
        </h1>

        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#D68DBD] mt-3 mb-8">
          My Dearest Akka! 💗
        </h2>

        {/* Wish Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-7 md:p-12 border border-white/80 birthday-reveal">

          <Heart
            className="mx-auto text-[#DDA5CE] mb-6"
            size={35}
            fill="#DDA5CE"
          />

          <p className="text-[#9876C5] text-xl md:text-2xl font-serif italic leading-relaxed mb-6">
            "To the girl who has been my sister,
            my strength, my happiness and my forever friend..."
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-[#DDA5CE] to-[#B99AE8] rounded-full mx-auto mb-7" />

          <div className="text-[#806B91] text-base md:text-lg leading-9 space-y-4">

            <p>
              Happy Birthday, Akka! ❤️
            </p>

            <p>
              I may not say it every day, but you mean more to me
              than words could ever explain. Having you in my life
              is one of my biggest blessings.
            </p>

            <p>
              Thank you for being part of all my crazy moments,
              for sharing laughter, memories and all those little
              things that make life beautiful.
            </p>

            <p>
              I wish you endless happiness, good health,
              beautiful opportunities and success in everything
              you dream of.
            </p>

            <p>
              May every tear turn into a smile, every dream become
              reality and every new chapter bring you something
              wonderful.
            </p>

            {showMore && (
              <div className="birthday-reveal space-y-4 pt-3">

                <p>
                  No matter how much we grow, no matter where life
                  takes us, you will always be my favourite Akka.
                </p>

                <p className="text-[#C27FAE] font-semibold">
                  Keep smiling, keep shining and never stop being
                  the beautiful person you are. 🦋
                </p>

                <p className="text-2xl font-serif text-[#9876C5]">
                  I love you so much, Akka! 💜
                </p>

              </div>
            )}

          </div>

          {/* Reveal Button */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mt-8 bg-gradient-to-r from-[#DDA5CE] to-[#B99AE8] text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 flex items-center gap-3 mx-auto"
            >
              <Gift size={20} />
              One More Thing...
              <Heart size={19} />
            </button>
          )}

          {showMore && (
            <div className="mt-8 birthday-reveal">
              <p className="text-[#B28AD9] font-serif italic text-xl">
                Forever your little sister,
              </p>
              <p className="text-[#D68DBD] text-2xl font-bold mt-2">
                With endless love! 💕
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-center items-center gap-3 text-[#B28AD9]">
          <Sparkles size={22} />
          <p className="font-serif italic text-lg">
            You deserve all the happiness in the world.
          </p>
          <Sparkles size={22} />
        </div>

      </div>
      <button
  onClick={onNext}
  className="mt-8 bg-gradient-to-r from-[#DDA5CE] to-[#B99AE8] text-white px-9 py-4 rounded-full shadow-lg hover:scale-105 transition"
>
  A Letter Just For You 💌
</button>
    </div>
  );
};

export default BirthdayWish;
