import { Swiper, SwiperSlide } from "swiper/react";
import "react-photo-view/dist/react-photo-view.css";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ImagenChange from "./ImagenChange";

export default function Cards({ props }) {
  return (
    <div className=" h-screen max-h-screen">
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="h-full"
        modules={[EffectCreative]}
      >
        {props.map((prop, index) => {
          const [bgIndex, setBgIndex] = useState(0);

          return (
            <SwiperSlide key={index}>
              <article className="p-4 md:p-10 lg:p-16 relative h-full flex flex-col">
                {prop.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 -z-10 ease-in-out ${
                      i === bgIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-black/40 z-0" />

                <div className="flex flex-col md:flex-row justify-between w-full gap-6 z-10">
                  <div className="prose prose-invert max-w-full md:max-w-[60%]">
                    <h1 className="text-2xl md:text-4xl">{prop.name}</h1>
                    <h2 className="text-lg md:text-2xl">{prop.owner}</h2>
                    <p className="text-sm md:text-base">{prop.description}</p>
                  </div>

                  {prop.ownerImage || prop.ownerImage_metaverse ? (
                    <div className="flex justify-center md:justify-end">
                      <ImagenChange
                        img1={prop.ownerImage}
                        img2={prop.ownerImage_metaverse}
                      />
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-wrap justify-center absolute inset-x-0 bottom-0 gap-3 md:gap-6 p-4 md:pb-8 z-10">
                  <PhotoProvider>
                    {prop.images.map((img, i) => (
                      <PhotoView key={i} src={img.src}>
                        <img
                          src={img.src}
                          onClick={() => setBgIndex(i)}
                          className={`h-16 md:h-20 object-cover rounded cursor-pointer border-2 ${
                            i === bgIndex
                              ? "border-white scale-105"
                              : "border-transparent"
                          } transition-all`}
                        />
                      </PhotoView>
                    ))}
                  </PhotoProvider>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
