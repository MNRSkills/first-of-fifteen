import React, { useState, useEffect } from "react";
import axios from "axios";
import Region from "./Components/region";
import Statistics from "./Components/statistics";
import "./App.css";





function App() {
  const [data, setData] = useState([]);
  console.log("THIS IS STATE", data)
  const stats = {
    response: [
      {
        contenant: "North-America",
        country: "Saint-Pierre-Miquelon",
        population: 5744,
        cases: {
          new: "+20955",
          active: "11220499",
          critical: "32333",
          recovered: "2334455",
          total: 2004498,
        },
        deaths: {
          new: "41122",
          M_pop: "327",
          total: 108055,
        },
      },
      {
        contenant: "Oceania",
        country: "Nauru",
        population: 5744,
        cases: {
          new: "+20955",
          active: "11220499",
          critical: "32333",
          recovered: "2334455",
          total: 2004498,
        },
        deaths: {
          new: "41122",
          M_pop: "327",
          total: 108055,
        },
      },
      {
        contenant: "Europe",
        country: "Monaco",
        population: 5744,
        cases: {
          new: "+20955",
          active: "11220499",
          critical: "32333",
          recovered: "2334455",
          total: 2004498,
        },
        deaths: {
          new: "41122",
          M_pop: "327",
          total: 108055,
        },
      },
    ],
  };

  const funkData = {
    post: [
      {
        country: "usa",
        population: "3434345353",
        cases: {
          new: "+20955",
          active: "11220499",
          critical: "32333",
          recovered: "2334455",
          total: 2004498,
        },
        deaths: {
          new: "41122",
          M_pop: "327",
          total: 108055,
        },
        iso: "122",
      },
      {
        country: "usa",
        population: "3434345353",
        cases: {
          new: "+20955",
          active: "11220499",
          critical: "32333",
          recovered: "2334455",
          total: 2004498,
        },
        deaths: {
          new: "41122",
          M_pop: "327",
          total: 108055,
        },
        iso: "122",
      },
      {
        country: "usa",
        population: "3434345353",
        cases: {
          new: "+20955",
          active: "11220499",
          critical: "32333",
          recovered: "2334455",
          total: 2004498,
        },
        deaths: {
          new: "41122",
          M_pop: "327",
          total: 108055,
        },
        iso: "122",
      },
    ],
  };
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


  const statistics = () =>{
    stats.response.map((statistic, index)=> {
      return setData(statistic);
    })
  }

  useEffect(() => {
    statistics();
  }, []);


  

  return (
    <div className='app'>
      {funkData.post.map((title, index) => {
        return <Region title={title} key={index} />;
      })}
      <Statistics data={data}/>
    </div>
  );
}

export default App;
