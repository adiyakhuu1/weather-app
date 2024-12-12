"use client";
import Image from "next/image";
import { useEffect } from "react";
import { SearchInput } from "./component/SearchInput";
import { Card } from "./component/card";
import { WhiteCircle } from "./component/WhiteCircle";
// import "./App.css";

export default function Home() {
  // useEffect(() => {
  //   fetch();
  // });
  const Main = () => {
    return (
      <div className="flex w-[auto] h-[1200px] justify-content-center relative">
        <div className="w-[50%] h-[1200px] bg-white relative">
          <div className="absolute top-10 left-10">
            <SearchInput />
          </div>
          <Card
            color="white"
            from="from-slate-200"
            to="to-white"
            temp="26"
            status="./img/sunny.png"
          />
        </div>

        <div className="w-[50%] h-[1200px] bg-[#0f141e] relative">
          <Card
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
