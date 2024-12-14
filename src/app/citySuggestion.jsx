import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const CityList = ({ search }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data?.data);
      });
  }, []);
  let theCities = [];
  useEffect(() => {
    if (data) {
      data?.data.map((city) => {
        theCities.push(city.country);
      });
    }
    console.log(theCities);
    // theCities.map((city1) => {
    //   city1.includes(search);
    // });
  });

  return (
    {theCities.slice(0,5).map((city)=>{
        return
    })}
  )
};
