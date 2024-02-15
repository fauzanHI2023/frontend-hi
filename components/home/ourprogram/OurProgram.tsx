import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import { programCard } from "@/data/data";
import Image from "next/image";

const OurProgram = () => {
  const { darkTheme } = useTheme();
  return (
    <section
      className={`flex flex-col w-full p-24 bg-${
        darkTheme ? "sky-500" : "hi-darklight"
      }`}
    >
      <div>
        <h5
          className={`text-${
            darkTheme ? "hi-darklight" : "hi-dark"
          } text-center font-bold text-2xl`}
        >
          Our Programs
        </h5>
      </div>
      <div
        className={`grid grid-cols-4`}
      >
        {programCard.map((program, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl text-${darkTheme ? "hi-darklight" : "hi-dark"} bg-${darkTheme ? "hi-dark" : "sky-100"} `}
          >
            {/* Gunakan tag Image dari Next.js untuk menampilkan gambar */}
            <Image
              src={program.icon}
              alt={program.label}
              width={38}
              height={38}
              className="w-8 h-8"
            />
            <h3 className={`text-${darkTheme ? "hi-darklight" : "hi-dark"}`}>{program.label}</h3>
            <p className={`text-${darkTheme ? "hi-darklight" : "hi-dark"}`}>{program.text}</p>
            <a href={program.url} className={`text-${darkTheme ? "hi-darklight" : "hi-dark"}`}>Pelajari Lebih Lanjut</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProgram;
