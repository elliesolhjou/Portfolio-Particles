// import React from 'react';
import {useState} from 'react'
import { ImCog } from "react-icons/im";
import './styles.scss'

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
    const [theme, setTheme] = useState('yellow')
    const [toggle, setToggle] = useState(false)

    const handleToggleTheme=(currentId)=>{
        setTheme(currentId)
        setToggle(false)
    }
  return (
    <div className={`theme-wrapper ${toggle? 'active' :""}`}>
      <div className="theme-wrapper__toggle-icon">
        <ImCog onClick={()=>setToggle(!toggle)}size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item) => (
            <li key={item.id} style={{ background: item.color }} onClick={()=>handleToggleTheme(item.id)}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
