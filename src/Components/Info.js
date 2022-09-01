import React from "react";
import "../Styles/Info.scss";

function Info(props) {
  // const { temp, humidity } = data.main;
  // const { main: weatherType } = data.weather[0];
  // const { name } = data;
  // const { speed } = data.wind;
  // const { country, sunset } = data.sys;

  let sec = props.data?.timezone;
  let date = new Date(sec * 1000);


  return (
    <div className="info">
      <div className="info__up">
        <div className="info__up--degrees">{props.data?.main?.temp}&deg;</div>

        <div className="info__up--details">
          <div className="info__up--details-city">
            {props.data?.name}, {props.data?.sys?.country}
            {/* <p>{props.data?.location?.region}</p> */}
          </div>
          <div className="info__up--details-date">
            {new Date().toDateString()}
          </div>
        </div>

        <div className="info__up--weather">
          <img
            className="info__up--weather-logo"
            src={`http://openweathermap.org/img/wn/${props.data?.weather[0]?.icon}.png`}
          />
          <div>{props.data?.weather[0]?.main}</div>
        </div>
      </div>

      <div className="info__down">
        <div className="info__down--status">
          <div className="info__down--status-wind">
            Wind <p>{props.data?.wind?.speed}</p>
          </div>

          <div className="info__down--status-humidity">
            Humidity <p>{props.data?.main?.humidity}</p>
          </div>
        </div>

        <div className="info__down--time">
        
          {new Date().toLocaleTimeString(
            navigator.language,
            {
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Info;
