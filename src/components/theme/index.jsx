// import React from 'react';
import { ImCog } from "react-icons/im";

const colorsArray = [
  {
    id: "yellow",
    color: "#ffdd40",
  },
  {
    id: "red",
    color: "#E82A2A",
  },
  {
    id: "green",
    color: "#6ac045",
  },
  {
    id: "blue",
    color: "#5078ff",
  },
];

const Theme = () => {
  return (
    <div className="theme-wrapper">
      <div className="theme-wrapper__toggle-icon">
        <ImCog size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item) => (
            <li key={item.id} style={{ background: item.color }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
