import { TextAbout } from "../Props/Text";
import rem_left from "../assets/rem_left.png";
import rem_right from "../assets/rem_right.png";
import both_rem from "../assets/both_rem.png";

export const AboutText = () => {
  return (
    <section className="p-8 grid grid-cols-0 md:grid-cols-3 z-50 px-10 md:px-10 py-20 md:py-20 lg:py-30 bg-primary">
      <div className="hidden md:flex justify-end">
        <img src={rem_left} alt="" />
      </div>
      <div className="flex justify-center ">
        <div className="prose prose-sm md:prose-sm prose-center xl:prose-2xl md: prose-neutral text-center flex flex-col justify-center text-white">
          {TextAbout.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item.text }} />
          ))}
        </div>
      </div>
      <div className="hidden md:flex justify-start">
        <img src={rem_right} alt="" />
      </div>
      <div className="block md:hidden">
        <img src={both_rem} alt="" />
      </div>
    </section>
  );
};
