import React from "react";
import { ReactSVG } from "react-svg";
import "../../App.css";

export default function feature({ img, title, text }) {
  return (
    <div className="feature py-4">
      <ReactSVG src={img} alt="Error" className="iconoFeature" />
      <div className="title3 blue py-3">{title}</div>
      <div>{text}</div>
    </div>
  );
}
