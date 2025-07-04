import pt5logo from "../assets/Phantom-Thieves-of-Hearts-Logo.png";
import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import ButtonCustom from "./ButtonCustom";

export default function CallingCard() {
  const [name, setName] = useState("WRITE Here");

  let dateString = new Date().toLocaleDateString();
  const [date, setDate] = useState(dateString);
  const cardRef = useRef(null);

  const PrintCircler = (circles) => {
    const base = 50;
    const padding = 40;
    return Array.from({ length: circles }).map((_, i) => {
      const size = base + i * padding * 2;
      const isRed = i % 2 === 0;
      const bgColor = isRed ? "bg-[#ff0101]" : "bg-black";
      return (
        <div
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            zIndex: circles - i,
          }}
          className={`rounded-full flex items-center justify-center absolute ${bgColor}`}
        ></div>
      );
    });
  };

  const handleCapture = async () => {
    const node = cardRef.current;
    if (!node) return;

    try {
      const dataUrl = await toPng(node, { cacheBust: true });
      const link = document.createElement("a");
      link.download = name;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error al tomar la captura:", error);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div
        ref={cardRef}
        className="relative overflow-hidden w-full flex flex-col justify-center items-center bg-black space-y-6 py-12 px-4 sm:px-6 md:px-12"
      >
        <img
          src={pt5logo}
          className="w-64 sm:w-96 md:w-[700px] h-auto z-50"
          crossOrigin="anonymous"
        />

        <p className="font-[EarwigFactory] z-50 text-3xl sm:text-5xl md:text-7xl text-shadow-behind text-center">
          TAKe YOuR hEaRT
        </p>
        <div className="font-[EarwigFactory] z-50 text-3xl sm:text-5xl md:text-7xl text-shadow-behind text-center">
          {name}
        </div>
        <div className="font-[EarwigFactory] z-50 text-3xl sm:text-5xl md:text-7xl text-shadow-behind text-center">
          {date}
        </div>
        {PrintCircler(30)}
      </div>
      <div className="flex flex-col justify-center items-center space-y-12">
        <h1 className="text-6xl uppercase">generate your calling card</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-black md:w-96"
          aria-label="Nombre para la calling card"
          placeholder="WRITE Here"
        />
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-black md:w-96"
          aria-label="Nombre para la calling card"
          placeholder="Date o anything"
        />
        <ButtonCustom name={'Save Card'} action={handleCapture} />
       
      </div>
    </section>
  );
}
