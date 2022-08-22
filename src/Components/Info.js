import React from "react";
import "../Styles/Info.scss";

function Info(props) {
  return (
    <div className="info">

      <div className="info__up">
        <div className="info__up--degrees">{props.data?.current?.temp_c}&deg;</div>

        <div className="info__up--details">
          <div className="info__up--details-city">
            {props.data?.location?.name}, {props.data?.location?.country}
            <p>{props.data?.location?.region}</p>
          </div>
          <div className="info__up--details-date">{new Date().toDateString()}</div>
        </div>

        <div className="info__up--weather">
          <img
            className="info__up--weather-logo"
            src={props.data?.current?.condition?.icon}
            alt=""
          />
          <div>{props.data?.current?.condition?.text}</div>
        </div>
      </div>

      <div className="info__down">
        <div className="info__down--status">
          <div className="info__down--status-wind">
            Wind <p>{props.data?.current?.wind_kph}</p>
          </div>

          <div className="info__down--status-humidity">
            Humidity <p>{props.data?.current?.humidity}</p>
          </div>
        </div>

        <div className="info__down--time">
          {new Date(props.data?.location?.localtime).toLocaleTimeString(
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
