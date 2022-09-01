import dayClear from "../img/1/clear.jpg";
import dayCloudy from "../img/1/cloudy.jpg";
import dayRain from "../img/1/rain.jpg";
import daySnow from "../img/1/snow.jpg";
import nightClear from "../img/0/clear.jpg";
import nightCloudy from "../img/0/cloudy.jpg";
import nightRain from "../img/0/rain.jpg";
import nightSnow from "../img/0/snow.jpg";

const backgroundImage = ({ data }) => {
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

  backgroundStyle = "";

  if (
    data?.weather[0]?.main === "Sunny" ||
    data?.weather[0]?.main.includes("Sunny")
  ) {
    if (+data.current.is_day === 1) var backgroundStyle = bgImage[0];
  }

  if (
    data?.weather[0]?.main === "Clouds" ||
    data?.weather[0]?.main.includes("clouds")
  ) {
    // if(+data.current.is_day === 1)
    var backgroundStyle = bgImage[1];
  }

  if (
    data?.weather[0]?.main === "Rain" ||
    data?.weather[0]?.main.includes("Rain")
  ) {
    // if (+data.current.is_day === 1)
    var backgroundStyle = bgImage[2];
  }

  if (
    data?.weather[0]?.main === "Snow" ||
    data?.weather[0]?.main.includes("snow")
  ) {
    // if (+data.current.is_day === 1) 
    var backgroundStyle = bgImage[3];
  }

  if (
    data?.weather[0]?.main === "Clear" ||
    data?.weather[0]?.main.includes("clear")
  ) {
    // if (+data.current.is_day === 0) 
    var backgroundStyle = bgImage[4];
  }

  if (
    data?.weather[0]?.main === "Overcast" ||
    data?.weather[0]?.main.includes("cloudy")
  ) {
    // if (+data.current.is_day === 0) 
    var backgroundStyle = bgImage[5];
  }

  if (
    data?.weather[0]?.main === "Mist" ||
    data?.weather[0]?.main.includes("rain")
  ) {
    // if (+data.current.is_day === 0) 
    var backgroundStyle = bgImage[6];
  }

  if (
    data?.weather[0]?.main === "Snow" ||
    data?.weather[0]?.main.includes("snow")
  ) {
    // if (+data.current.is_day === 0) 
    var backgroundStyle = bgImage[7];
  }

  return backgroundStyle;
};

export default backgroundImage;
