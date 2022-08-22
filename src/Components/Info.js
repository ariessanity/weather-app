import React from "react";
import "../Styles/Info.scss";

function Info(props) {


  return (

    <div className="info">

      

      <div className="info__up">

        <div className="info__degrees">{props.data?.current?.temp_c}&deg;</div>

        <div className="info__details">
          <div className="info__city">
            {props.data?.location?.name}, {props.data?.location?.country}
            <p>{props.data?.location?.region}</p>
          </div>
          <div className="info__date">{new Date().toDateString()}</div>
        </div>

        <div className="info__weather">
          <img
            className="info__logo"
            src={props.data?.current?.condition?.icon}
            alt=""
          />
          <div>{props.data?.current?.condition?.text}</div>
        </div>
      </div>

      <div className="info__down">
        <div className="info__wind">
          Wind <p>{props.data?.current?.wind_kph}</p>
        </div>

        <div className="info__humidity">
          Humidity <p>{props.data?.current?.humidity}</p>
        </div>

        <div className="info__time">

          
          {new Date(props.data?.location?.localtime).toLocaleTimeString(navigator.language,{
           
            hour12: true,
            hour: "numeric",
            minute: "numeric",
            
          
          })}
        </div>
      </div>
    </div>
  );
}

export default Info;
