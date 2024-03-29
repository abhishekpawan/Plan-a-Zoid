import React from "react";
import { useState, useEffect } from "react";

const DarkLight = () => {

  const [isLight, setIsLight] = useState(false);

useEffect(() => {
  document.body.classList.toggle('light-mode', isLight);
},[isLight]);
    



  return (
    <React.Fragment>
      <div className="dark-light" 
      onCLick={()=> setIsLight(!isLight)}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default DarkLight;
