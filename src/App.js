import React, { useState, useEffect } from "react";
import axios from "axios";
import Region from "./Components/region";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const axios = require("axios");

  
  const callAPI = async () => {
    try {
      await axios
        .get("http://localhost:8000/countries")
        .then(function (response) {
          // console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {}
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className='app'>
      <Region />
    </div>
  );
}

export default App;
