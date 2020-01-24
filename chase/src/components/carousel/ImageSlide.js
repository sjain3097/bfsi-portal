import React from "react";
const ImageSlide = ({ url }) => {
  const styles = {
    // backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <span className='img-size'>
      <img className='image-slide' src={url} style={styles} />
      {/* <span>{url}</span> */}
    </span>
  );
};
export default ImageSlide;
