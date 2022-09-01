import React, { useState } from "react";
import "./App.scss";
import ContentWrapper from "./Components/ContentWrapper";
import Info from "./Components/Info";
import Search from "./Components/Search";
import useFetch from "./Components/useFetch";
import backgroundImage from "./Components/Background";

//
//https://api.weatherapi.com/v1/current.json?key=4d436eb9dffc48aab86161516221608&q=${search}&aqi=no

function App() {
  const [search, setSearch] = useState("Davao");
  const { data, isPending, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4393c676d7fbfdf4acf5003fadf23d02`
  );
  const backgroundStyle = backgroundImage({ data });

  
  // console.log(data?.weather[0]?.main);
  // console.log(data.weather[0]?.icon)


  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundStyle})` }}>
      <ContentWrapper>
        <Search setSearch={setSearch} />
        <Info data={data} />
      </ContentWrapper>
    </div>
  );
}

export default App;
