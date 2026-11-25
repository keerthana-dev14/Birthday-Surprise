
import React, { useState } from "react";
import { Heart, Mail, Sparkles } from "lucide-react";

const FinalLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6D9FF] via-[#FFF7FB] to-[#FFD6E7] flex items-center justify-center px-5 py-16">

      <div className="max-w-2xl w-full text-center">

        <Sparkles className="mx-auto text-[#B99AE8] mb-5" size={35} />

        <p className="text-[#B28AD9] uppercase tracking-[4px] text-xs mb-5">
          Something from my heart
        </p>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#9876C5] mb-8">
          A Letter For You, Akka 💌
        </h1>

        {/* Envelope */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="mx-auto block text-8xl md:text-9xl hover:scale-110 transition duration-500"
          aria-label="Open your birthday letter"
        >
          {isOpen ? "💌" : "✉️"}
        </button>

        {!isOpen && (
          <p className="text-[#A38BAF] mt-6 italic">
            A little letter filled with lots of love...
          </p>
        )}

        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 bg-gradient-to-r from-[#DDA5CE] to-[#B99AE8] text-white px-9 py-4 rounded-full shadow-lg hover:scale-105 transition"
          >
            <Mail className="inline mr-2" size={20} />
            Open Your Letter
          </button>
        )}

        {/* Letter Content */}
        {isOpen && (
          <div className="mt-10 bg-[#FFFCFE] rounded-2xl shadow-2xl p-7 md:p-12 text-left border border-[#EAD9F5] animate-[fadeIn_1s_ease-out]">

            <h2 className="text-3xl font-serif text-[#9876C5] text-center mb-7">
              My Dearest Akka ❤️
            </h2>

            <div className="text-[#806B91] leading-9 text-base md:text-lg space-y-5">

              <p>Dear Akka,</p>

              <p>
                I don't know where to start because there are
                so many things I want to tell you.
                You are not just my sister, you are one of
                the most precious people in my life.
              </p>

              <p>
                We have shared so many moments together,
                from silly fights and endless laughter to
                beautiful memories that I will cherish forever.
              </p>

              <p>
                I may tease you, fight with you and annoy you,
                but nothing can ever change how much I love you.
              </p>

              <p>
                I pray that your life is always filled with
                happiness, success, good health and all the
                beautiful things your heart wishes for.
              </p>

              <p>
                No matter how old we become, you will always
                have a special place in my heart.
              </p>

              <p className="font-semibold text-[#C27FAE]">
                Thank you for being my Akka.
                I am so lucky to have you! 🥹
              </p>

            </div>

            <div className="text-center mt-9">
              <Heart
                size={32}
                fill="#DDA5CE"
                className="mx-auto text-[#DDA5CE]"
              />

              <p className="font-serif italic text-xl text-[#9876C5] mt-4">
                Forever your Little sister,
              </p>

              <p className="text-2xl font-bold text-[#D68DBD] mt-2">
                Love you Akka! 💗
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default FinalLetter;
