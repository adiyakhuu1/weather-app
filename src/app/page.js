"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchInput } from "./component/SearchInput";
import { Card } from "./component/card";
import { WhiteCircle } from "./component/WhiteCircle";
// import "./App.css";

export default function Home() {
  const [weatherData, setWeatherData] = useState("");
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=47.9077&lon=106.8832&appid=4c6110eacb4190cc13310d65804a9bf3`
        );
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      };
      fetchData();
    } catch (e) {
      console.error("aldaa-----------------", e);
    }
  }, []);
  const Main = () => {
    return (
      <div className="flex w-[auto] h-[1200px] justify-content-center relative">
        <div className="w-[50%] h-[1200px] bg-white relative">
          <div className="absolute top-10 left-10">
            <SearchInput />
          </div>
          <Card
            theRegion={weatherData.timezone}
            color="white"
            from="from-slate-200"
            to="to-white"
            temp={Math.floor(weatherData.current.temp - 273.15)}
            status="./img/sunny.png"
          />
        </div>

        <div className="w-[50%] h-[1200px] bg-[#0f141e] relative">
          <Card
            theRegion={weatherData.timezone}
            color="black"
            from="from-[#1f2937]"
            to="to-[#111827]"
            textColor="text-white"
            temp="14"
            status="./img/moon.png"
          />
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
