import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Caracters } from "../Props/Caracters";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation } from "swiper/modules";

import { EffectCoverflow } from "swiper/modules";
import ButtonCustom from "./buttonCustom";

export default function CaracterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const characterColors = {
    Joker: "#7B1B1B",
    Skull: "#A68F00",
    Panther: "#8B1E24",
    Mona: "#01579B",
    Fox: "#0D47A1",
    Queen: "#37474F",
    Oracle: "#EF6C00",
    Noir: "#6A1B9A",
    Crow: "#6A1B1A",
    Violet: "#4A148C",
  };

  const bgColor = characterColors[Caracters[activeIndex]?.codename] || "#000";

  return (
    <section
      className="py-20 md:py-50 transition-colors duration-500"
      style={{
      background: `linear-gradient(to bottom, ${bgColor} 0%, #000 100%)`,
    }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autopl
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
      >
        {Caracters.map((caracter) => (
          
            <SwiperSlide key={caracter.id}>
              <CaracterImg
                imgPhantom={caracter.images.phantom}
                imgSchool={caracter.images.school}
                name={caracter.name}
              />
            </SwiperSlide>
          
        ))}
      </Swiper>
      <CaracterCard caracter={Caracters[activeIndex]} />
    </section>
  );
}

function CaracterImg({ imgPhantom, imgSchool, name }) {
  const [isPhantom, setPhantom] = useState(false);

  const hanldeSuit = () => {
    setPhantom(!isPhantom)
  }
  return (
    <div className="flex flex-col space-y-9">
      <div className="flex justify-center items-center relative w-auto h-96 md:h-[700px]">
        <img
          src={isPhantom ? imgPhantom : imgSchool}
          alt={name}
          className="relative mx-auto h-96 md:h-[700px] "
        />
      </div>
      {imgPhantom && (
        <div className="flex justify-center">
          <ButtonCustom name={isPhantom ? "School" : "Metaverse"} action={hanldeSuit} />
        </div>
      )}
    </div>
  );
}
function CaracterCard({ caracter }) {
  return (
    <div className="flex flex-col justify-center md:grid md:grid-cols-2 py-20 space-y-15 px-12">
      <div className="flex justify-center md:justify-end pr-0 md:pr-10">
        <img
          src={caracter.images.persona}
          className="max-h-94 md:h-[700px] w-auto fill-white drop-shadow-lg drop-shadow-indigo-500/50"
        />
      </div>
      <div className="prose max-w-2xl text-white text-center flex flex-col justify-center items-center">
        <h2 className="prose-2xl text-white">{caracter.name}</h2>
        <p className="prose-lg">{caracter.descripcion}</p>
      </div>
    </div>
  );
}
