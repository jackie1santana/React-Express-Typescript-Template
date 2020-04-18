import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Covid.scss";

export default function Covid() {
  const [globalCases, setGlobalCases] = useState([]);

  useEffect(() => {
    axios.get("/globalcases").then((response) => {
      
    //Add moment.js
      const cases = {
        confirmed: `Global Confirmed Cases: ${response.data[0].confirmed}`,
        recovered: `Global Recovered Cases: ${response.data[0].recovered}`,
        critical: `Global Critical Cases: ${response.data[0].critical}`,
        deaths: `Global Deaths: ${response.data[0].deaths}`
      };

      setGlobalCases(cases);
    
    });
    
  }, []);

  console.log(globalCases)
  
  return (
    <div>
      <ul>
        <li>{globalCases.confirmed}</li>
        <li>{globalCases.recovered}</li>
        <li>{globalCases.critical}</li>
        <li>{globalCases.deaths}</li>
      </ul>
    </div>
  );
}
