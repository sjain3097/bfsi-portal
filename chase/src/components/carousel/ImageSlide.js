import React from "react";
const ImageSlide = ({ url }) => {
  const styles = {
    // backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div>
      <img className='image-slide' src={url} style={styles} />
    </div>
  );
};
export default ImageSlide;
