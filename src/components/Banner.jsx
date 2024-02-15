import { useState } from "react";
import { coverWomen, coverMen, logo } from "../assets/index";
import { TiChevronRightOutline, TiChevronLeftOutline } from "react-icons/ti";

const data = [coverMen, coverWomen, logo];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide < 1) setCurrentSlide(data.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % data.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          className="w-[400vw] h-full flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((slide, index) => (
            <img
              key={index}
              className="w-screen h-full object-cover"
              src={slide}
              alt="coverimage"
              loading="priority"
            />
          ))}
        </div>
      </div>

      <div className="absolute left-[45%] right-0 mx-auto flex gap-8 bottom-44">
        <div
          className="w-14 h-12 flex items-center justify-center hover:cursor-pointer border-[1px] border-gray-700 hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          onClick={prevSlide}
        >
          <TiChevronLeftOutline className="text-white" size={30} />
        </div>
        <div
          className="w-14 h-12 flex items-center justify-center hover:cursor-pointer border-[1px] border-gray-700 hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          onClick={nextSlide}
        >
          <TiChevronRightOutline className="text-white" size={30} />
        </div>
      </div>
    </div>
  );
}

export default Banner;