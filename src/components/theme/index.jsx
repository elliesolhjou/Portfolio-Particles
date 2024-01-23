// import React from 'react';
import {useState, useEffect} from 'react'
import { ImCog } from "react-icons/im";
import setTheme from '../../helpers/theme'
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
    const [theme, setCurrentTheme] = useState('yellow')
    const [toggle, setToggle] = useState(false)

    // color id is the param provided to this function inside the map fn below
    const handleToggleTheme=(currentId)=>{
        setCurrentTheme(currentId)
        console.log(currentId)
        setToggle(false)
    }
    useEffect(()=>{
    setTheme(theme)
    }, [theme])
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
