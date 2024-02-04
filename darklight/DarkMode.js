import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

// https://www.youtube.com/watch?v=Uz35Qiia84g&t=11s

const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
