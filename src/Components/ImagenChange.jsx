import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ButtonCustom from "./buttonCustom";

export default function ImagenChange({ img1, img2 }) {
  const [normal, setNormal] = useState(0);

  return (
    <div className="flex flex-col items-center  px-4 space-y-4 w-max">
      <PhotoProvider>
        <PhotoView src={normal ? img1 : img2}>
            <div className="w-auto h-30 md:w-[400px] md:h-[400px] relative">
          <img src={normal ? img1 : img2} className="w-full h-full object-contain"  />
            </div>
        </PhotoView>
      </PhotoProvider>
      <div className="flex justify-center">
        <ButtonCustom name={"change"} action={() => setNormal(!normal)} />
      </div>
    </div>
  );
}
