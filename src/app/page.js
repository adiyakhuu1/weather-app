"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchInput } from "./component/SearchInput";
import { Card } from "./component/card";
import { WhiteCircle } from "./component/WhiteCircle";
// import "./App.css";

export default function Home() {
  const Main = () => {
    const [weatherData, setWeatherData] = useState({});
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("ulaanbaatar");

    const API_key = `6f9cc5eb8a37493783a72448241312`;
    useEffect(() => {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${city}&days=1&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
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
    }, [city]);

    const onChangeText = (event) => {
      setSearch(event.target.value);
    };
    const onPressEnter = (e) => {
      if (e.code === "Enter") {
        setCity(search);
      }
    };
    console.log("the search:", search, "the city:", city);
    return (
      <div className="flex w-[auto] h-[1200px] justify-content-center relative">
        <div className="w-[50%] h-[1200px] bg-white relative">
          <div className="absolute top-10 left-10">
            <SearchInput
              search={search}
              onChangeText={onChangeText}
              onPressEnter={onPressEnter}
            />
          </div>
          {weatherData && (
            <Card
              date={weatherData?.forecast?.forecastday[0]?.date}
              theRegion={weatherData?.location?.name}
              color="white"
              from="from-slate-200"
              to="to-white"
              temp={weatherData?.forecast?.forecastday[0]?.day?.maxtemp_c}
              status="./img/sunny.png"
              description={weatherData?.current?.condition?.text}
            />
          )}
        </div>

        <div className="w-[50%] h-[1200px] bg-[#0f141e] relative">
          {weatherData && (
            <Card
              date={weatherData?.forecast?.forecastday[0]?.date}
              theRegion={weatherData?.location?.name}
              color="black"
              from="from-[#1f2937]"
              to="to-[#111827]"
              textColor="text-white"
              temp={weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}
              status="./img/moon.png"
              description={
                weatherData?.forecast?.forecastday[0]?.day?.condition?.text
              }
            />
          )}
        </div>

        <WhiteCircle size="w-[340px] h-[340px]" />
        <WhiteCircle size="w-[140px] h-[140px]" color="bg-white" logo={true} />
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
