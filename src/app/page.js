"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchInput } from "./component/SearchInput";
import { Card } from "./component/card";
import { WhiteCircle } from "./component/WhiteCircle";
import { CityList } from "./component/citySuggestion";
// import "./App.css";

export default function Home() {
  const Main = () => {
    const [weatherData, setWeatherData] = useState({});
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("ulaanbaatar");
    const [statusDay, setStatusDay] = useState(null);
    const [statusNight, setStatusNight] = useState(null);

    const API_key = `6f9cc5eb8a37493783a72448241312`;
    useEffect(() => {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${city}&days=1&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          changeStatusDay(data);
          changeStatusNight(data);
          console.log(data);
        });

      // try {
      //   const fetchData = async () => {
      //     const response = await fetch(
      //       `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}&aqi=no`
      //     );
      //     const data = await response.json();
      //     setWeatherData(data);
      //     console.log(data);
      //   };
      //   fetchData();
      // } catch (e) {
      //   console.error("aldaa-----------------", e);
      // }
    }, [city, statusDay, statusNight]);

    const onChangeText = (event) => {
      setSearch(event.target.value);
    };
    const onPressEnter = (e) => {
      if (e.code === "Enter") {
        setCity(search);
        changeStatusDay();
        changeStatusNight();
      }
    };
    const changeStatusDay = (weatherData) => {
      console.log(weatherData?.current?.condition?.text);
      if (
        weatherData?.current?.condition?.text
          .toLowerCase()
          .includes("overcast") ||
        weatherData?.current?.condition?.text.toLowerCase().includes("cloud")
      ) {
        setStatusDay("./img/cloudy.png");
        console.log("it's cloudy");
      } else if (
        weatherData?.current?.condition?.text
          .toLowerCase()
          .includes("shower") ||
        weatherData?.current?.condition?.text.toLowerCase().includes("rain")
      ) {
        setStatusDay("./img/rain.png");
        console.log("it's raining");
      } else {
        setStatusDay("./img/sunny.png");
        console.log("it's sunny");
      }
    };
    const changeStatusNight = (weatherData) => {
      console.log(
        weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
      );
      if (
        weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
          .toLowerCase()
          .includes("mist") ||
        weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
          .toLowerCase()
          .includes("cloud") ||
        weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
          .toLowerCase()
          .includes("overcast")
      ) {
        setStatusNight("./img/moon-cloudy.png");
        console.log("it's cloudy");
      } else if (
        weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
          .toLowerCase()
          .includes("shower") ||
        weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
          .toLowerCase()
          .includes("rain")
      ) {
        setStatusNight("./img/moon-cloudy-rainy.png");
        console.log("it's raining");
      } else {
        setStatusNight("./img/moon.png");
        console.log("night has a clear sky");
      }
    };

    // console.log("the search:", search, "the city:", city);
    return (
      <div className="flex w-[auto] h-[1200px] justify-content-center relative">
        <div className="w-[50%] h-[1200px] bg-white relative">
          <div className="absolute top-10 left-10">
            <SearchInput
              search={search}
              onChangeText={onChangeText}
              onPressEnter={onPressEnter}
            />
            <CityList search={search} />
          </div>
          {weatherData && (
            <Card
              date={weatherData?.current?.last_updated}
              theCity={weatherData?.location?.name}
              theCountry={weatherData?.location?.country}
              color="white"
              from="from-slate-200"
              to="to-white"
              textColor="text-black"
              temp={weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c}
              status={statusDay}
              description={weatherData?.current?.condition?.text}
            />
          )}
        </div>

        <div className="w-[50%] h-[1200px] bg-[#0f141e] relative">
          {weatherData && (
            <Card
              date={weatherData?.current?.last_updated}
              theCity={weatherData?.location?.name}
              theCountry={weatherData?.location?.country}
              color="black"
              from="from-[#1f2937]"
              to="to-[#111827]"
              textColor="text-white"
              temp={weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}
              status={statusNight}
              description={
                weatherData?.forecast?.forecastday[0]?.hour[0]?.condition?.text
              }
            />
          )}
        </div>

        <WhiteCircle
          size="w-[340px] h-[340px]"
          disappear={`hidden 2xl:block`}
        />
        <WhiteCircle
          size="w-[140px] h-[140px]"
          color="bg-white"
          logo={true}
          disappear={`hidden 2xl:block`}
        />
        {/* <WhiteCircle size="340px" /> */}
      </div>
    );
  };
  return (
    <div>
      <Main />
      {/* <Main mode={"white"} /> */}
    </div>
  );
}
