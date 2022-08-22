import React from 'react';
import dayClear from "../img/1/clear.jpg";
import dayCloudy from "../img/1/cloudy.jpg";
import dayRain from "../img/1/rain.jpg";
import daySnow from "../img/1/snow.jpg";

import nightClear from "../img/0/clear.jpg";
import nightCloudy from "../img/0/cloudy.jpg";
import nightRain from "../img/0/rain.jpg";
import nightSnow from "../img/0/snow.jpg";


const Background = ({data}) => {
   
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

    
    
      if (data?.current?.condition?.text === "clear" || data?.current?.condition?.text.includes("clear")) {
       if(+data.current.is_day === 1)
        var backgroundStyle = bgImage[0];
      } else if (data?.current?.condition?.text === "cloudy" || data?.current?.condition?.text.includes("cloudy")) {
        if(+data.current.is_day === 1)
         var backgroundStyle = bgImage[1];
       } else if (data?.current?.condition?.text === "rain" || data?.current?.condition?.text.includes("rain")) {
        if(+data.current.is_day === 1)
         var backgroundStyle = bgImage[2];
       } else if (data?.current?.condition?.text === "snow" || data?.current?.condition?.text.includes("snow")) {
        if(+data.current.is_day === 1)
         var backgroundStyle = bgImage[3];
       }else if (data?.current?.condition?.text === "clear" || data?.current?.condition?.text.includes("clear")) {
        if(+data.current.is_day === 0)
         var backgroundStyle = bgImage[4];
       }else if (data?.current?.condition?.text === "cloudy" || data?.current?.condition?.text.includes("cloudy")) {
        if(+data.current.is_day === 0)
         var backgroundStyle = bgImage[5];
       }else if (data?.current?.condition?.text === "rain" || data?.current?.condition?.text.includes("rain")) {
        if(+data.current.is_day === 0)
         var backgroundStyle = bgImage[6];
       }else if (data?.current?.condition?.text === "snow" || data?.current?.condition?.text.includes("snow")) {
        if(+data.current.is_day === 0)
         var backgroundStyle = bgImage[7];
       }

      

       console.log(backgroundStyle)

     
    

       
};
export default Background;










