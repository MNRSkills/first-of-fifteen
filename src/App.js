import React, { useState } from "react";
import axios from "axios";
import Region from "./Components/region";
import "./App.css";

function App() {
const [data, setData] = useState([]);

  const options = {
    method: "GET",
    url: "https://covid-19-statistics.p.rapidapi.com/reports/total",
    params: { date: "2020-04-07" },
    headers: {
      "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      "X-RapidAPI-Key": "53fd323a60msh0a9927ee29aa502p11763ajsnd24449e9c20b",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return(setData(response.data))
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div className='app'>
    {data.confirmed.map((region, index) => {
      console.log(region)
    })}
  </div>;
}

export default App;
