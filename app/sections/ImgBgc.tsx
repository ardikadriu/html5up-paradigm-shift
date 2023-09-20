import React from "react";

const ImgBgc = ({ position, src }) => {
  return (
    <span
      className="image fill"
      style={{
        backgroundImage: src,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img src={src} />
    </span>
  );
};

export default ImgBgc;
