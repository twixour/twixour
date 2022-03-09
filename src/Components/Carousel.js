import { useState, useEffect, useRef } from "react";
import ledImage from "../images/home/5.JPG";
import studentImage1 from "../images/home/6.JPG";
import studentImage2 from "../images/home/7.JPG";
import CarouselData from "./CarouselData";

const Carousel = () => {
  const data = [
    {
      title: "Twixour",
      image: ledImage,
      content: "Welcome to Twixour",
    },
    {
      title: "Twixour",
      image: studentImage1,
      content: "Welcome to Twixour",
    },
    {
      title: "Twixour",
      image: studentImage2,
      content: "Welcome to Twixour",
    },
  ];
  const [featuredContent, setFeaturedContent] = useState({
    title: "Twixour",
    image: ledImage,
    content: "Welcome to Twixour",
  });
  const featuredImages = [ledImage, studentImage1, studentImage2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  let count = 0;

  const handleNextSlider = () => {
    count = (count + 1) % featuredImages.length;
    const newData = data[count];
    setFeaturedContent(newData);
  };

  // const handleOnPrevClick = () => {
  //   const productsLength = featuredImages.length;
  //   count = (currentIndex + productsLength - 1) % productsLength;
  //   setCurrentIndex(count);
  // };
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);
  useEffect(() => {
    slideRef.current.classList.add("fade-anim");
  }, [currentIndex]);

  const startSlider = () => {
    setInterval(() => {
      handleNextSlider();
    }, 4500);
  };
  console.log(featuredContent[currentIndex]);
  return (
    <div className="max-w-screen-lg m-auto mt-3">
      <div ref={slideRef} className="w-full relative select-none">
        <CarouselData featuredContent={featuredContent} />

        {/* <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
            </svg>
          </button>
          <button onClick={handleNextSlider} className=" text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
