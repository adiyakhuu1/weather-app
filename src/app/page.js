"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SearchInput } from "./component/SearchInput";
import { Card } from "./component/card";
import { WhiteCircle } from "./component/WhiteCircle";
import { CityList } from "./component/citySuggestion";
import { Manrope, Montserrat } from "next/font/google";
// import "./App.css";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  const Main = () => {
    const [weatherData, setWeatherData] = useState({});
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("ulaanbaatar");
    const [statusDay, setStatusDay] = useState(null);
    const [statusNight, setStatusNight] = useState(null);
    const [refresh, setRefresh] = useState(0);
    const [refreshing, setRefreshing] = useState("");
    const [count, setCount] = useState(9);

    const API_key = `6f9cc5eb8a37493783a72448241312`;

    // auto refresh +
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setRefresh((p) => p + 1);
    //   }, 10000);
    //   return () => clearInterval(interval);
    // }, [refresh, weatherData]);
    // auto refresh -
    // counting +
    useEffect(() => {
      const interval = setInterval(() => {
        if (count === 1) {
          console.log("Refreshing");

          // setTimeout(() => {
          //   setRefreshing("");
          // }, 500);
          setCount(10);
          setRefreshing("Updating..");
          setRefresh((p) => p + 1);
        } else {
          setRefreshing(`Refreshing in ${count}s`);

          setCount((p) => p - 1);
        }

        // if (count === 1) {
        //   setCount(10);
        // }
        console.log(count);
      }, 1000);

      return () => clearInterval(interval);
    }, [count, weatherData]);
    // counting -
    // data fetching +
    useEffect(() => {
      document.title = "Realtime Weather";
    }, []);
    useEffect(() => {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${city}&days=1&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          changeStatusDay(data);
          changeStatusNight(data);
          console.log("tatsan tsag agaar:", data);
          console.log("odoogiin hot:", city);
        })
        .catch((e) => {
          console.log("asdisjduif", e);
        });

      // autoRefresh();

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
    }, [city, statusDay, statusNight, refresh]);
    // data fetching -

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
      <div
        className={`flex w-[auto] h-[1200px] justify-content-center relative ${montserrat.className}`}
      >
        <div className="w-[50%] h-[1200px] bg-white relative mx-auto">
          {weatherData && (
            <>
              <Card
                justify={`mx-auto`}
                date={weatherData?.current?.last_updated}
                theCity={weatherData?.location?.name}
                theCountry={weatherData?.location?.country}
                color="white"
                from="from-slate-200"
                to="to-white"
                textColor="text-black"
                temp={weatherData?.current?.temp_c}
                feelsLike={weatherData?.current?.feelslike_c}
                isTrue={true}
                status={statusDay}
                description={weatherData?.current?.condition?.text}
                count={count}
                refreshing={refreshing}
              />
            </>
          )}
          <div className="fixed mx-auto mt-10px lg:mr-3 mt-5 lg:absolute lg:top-10 lg:left-10 z-30">
            <SearchInput
              search={search}
              onChangeText={onChangeText}
              onPressEnter={onPressEnter}
              setCity={setCity}
            />
            <CityList search={search} setCity={setCity} />
          </div>
        </div>

        <div className="w-[50%] h-[1200px] bg-[#0f141e] relative rounded-3xl hidden lg:block">
          {weatherData && (
            <>
              <Card
                count={count}
                date={weatherData?.current?.last_updated}
                theCity={weatherData?.location?.name}
                theCountry={weatherData?.location?.country}
                color="black"
                from="from-[#1f2937]"
                to="to-[#111827]"
                textColor="text-white"
                temp={weatherData?.forecast?.forecastday[0]?.day?.mintemp_c}
                status={statusNight}
                border={`rounded-3xl`}
                description={
                  weatherData?.forecast?.forecastday[0]?.hour[0]?.condition
                    ?.text
                }
                refreshing={refreshing}
                // disappear={`lg:hidden]`}
              />
              <WhiteCircle size="w-[1340px] h-[1340px]" />
              <WhiteCircle size="w-[940px] h-[940px]" />
              <WhiteCircle size="w-[340px] h-[340px]" />
              <WhiteCircle
                size="w-[140px] h-[140px]"
                color="bg-white"
                logo={true}
              />
            </>
          )}
        </div>

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
