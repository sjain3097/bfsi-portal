import React from "react";
const ImageSlide = ({ Icon, subtitle, hide }) => (
  <span>
    <p
      className={hide}
      style={{
        height: "70px",
        width: "235px",
        color: "#999999",
        "text-color": "center"
        // marginBottom: "30%"
        // paddingTop: "0px"
        // lineHeight: "0px"
      }}
    >
      <Icon style={{ transform: "scale(0.2)" }} />
    </p>
    <p className={hide}>{subtitle}</p>
  </span>
);
export default ImageSlide;
