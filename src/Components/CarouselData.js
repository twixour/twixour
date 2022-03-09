import React from "react";

const CarouselData = ({ featuredContent: { title, content, image } }) => {
  return (
    <div
      className="relative aspect-w-16 aspect-h-9 w-full h-full "
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "700px",
      }}
    >
      <h1 className="text-3xl text-center text-white font-extrabold">
        {title}
      </h1>
      <div className="absolute text-white bottom-0 left-0 h-16 border">
        <p className="">{content}</p>
      </div>
    </div>
  );
};

export default CarouselData;
