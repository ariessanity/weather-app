import React, { useState } from "react";
import "./App.scss";
import ContentWrapper from "./Components/ContentWrapper";
import Info from "./Components/Info";
import Search from "./Components/Search";
import useFetch from "./Components/useFetch";
// import Background from "./Components/Background";

import dayClear from "./img/1/clear.jpg";
import dayCloudy from "./img/1/cloudy.jpg";
import dayRain from "./img/1/rain.jpg";
import daySnow from "./img/1/snow.jpg";

import nightClear from "./img/0/clear.jpg";
import nightCloudy from "./img/0/cloudy.jpg";
import nightRain from "./img/0/rain.jpg";
import nightSnow from "./img/0/snow.jpg";

//https://api.openweathermap.org/data/2.5/weather?q={city}&appid=4393c676d7fbfdf4acf5003fadf23d02

function App() {
  const [search, setSearch] = useState("Davao");
  const { data, isPending, error } = useFetch(
    `http://api.weatherapi.com/v1/current.json?key=4d436eb9dffc48aab86161516221608&q=${search}&aqi=no`
  );

  const bgImage = [
    dayClear,
    dayCloudy,
    dayRain,
    daySnow,
    nightClear,
    nightCloudy,
    nightRain,
    nightSnow,
  ];


  if (data?.current?.condition?.text === "Sunny" || data?.current?.condition?.text.includes("Sunny")) {
   if(+data.current.is_day === 1)
    var backgroundStyle = bgImage[0];
  }

  if (data?.current?.condition?.text === "Overcast" || data?.current?.condition?.text.includes("cloudy")) {
    if(+data.current.is_day === 1)
     var backgroundStyle = bgImage[1];
   }

   if (data?.current?.condition?.text === "Mist" || data?.current?.condition?.text.includes("rain")) {
    if(+data.current.is_day === 1)
     var backgroundStyle = bgImage[2];
   }

   if (data?.current?.condition?.text === "Snow" || data?.current?.condition?.text.includes("snow")) {
    if(+data.current.is_day === 1)
     var backgroundStyle = bgImage[3];
   }

   if (data?.current?.condition?.text === "Clear" || data?.current?.condition?.text.includes("clear")) {
    if(+data.current.is_day === 0)
     var backgroundStyle = bgImage[4];
   }

   if (data?.current?.condition?.text === "Overcast" || data?.current?.condition?.text.includes("cloudy")) {
    if(+data.current.is_day === 0)
     var backgroundStyle = bgImage[5];
   }

   if (data?.current?.condition?.text === "Mist" || data?.current?.condition?.text.includes("rain")) {
    if(+data.current.is_day === 0)
     var backgroundStyle = bgImage[6];
   }

   if (data?.current?.condition?.text === "Snow" || data?.current?.condition?.text.includes("snow")) {
    if(+data.current.is_day === 0)
     var backgroundStyle = bgImage[7];
   }

 

  return (
    <div className="App" style={{backgroundImage: `url(${backgroundStyle})`}}>
      
     
      <ContentWrapper>
        <Search setSearch={setSearch} />
        <Info data={data} />
      </ContentWrapper>
    </div>
  );
}

export default App;
