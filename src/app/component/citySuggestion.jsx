import { useEffect, useState } from "react";

export const CityList = ({ search, setCity }) => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((response) => response.json())
      .then((data) => {
        const allCities = [];
        data?.data.map((country) => {
          country.cities.map((city) => {
            allCities.push(city);
          });
        });
        // data?.data.forEach((country) => {
        //   country.cities.forEach((city) => {
        //     allCities.push(city);
        //   });
        // });
        console.log("datanii country", data?.data);
        console.log("minii array hotuud", allCities);
        setCities(allCities);
      })
      .catch((error) => console.error("aldaa--------------------:", error));
  }, []);

  useEffect(() => {
    // console.log(search);
    if (search) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCities(filtered.slice(0, 4));
    } else {
      setFilteredCities([]);
    }
  }, [search, cities]);
  // const changeSearch = (city) => {
  //   setSearch(city);
  // };

  return (
    <div className="flex-col-rev z-30 bg-white rounded-lg bg-opacity-75">
      {filteredCities.map((city, index) => (
        <div className="rounded ml-20 mb-2 w-[200px] flex" key={index}>
          <img className="opacity-85" src={`./img/localization.svg`} />
          <button
            className="text-black font-bold w-[200px]"
            onClick={() => {
              setCity(city);
            }}>
            {city}
          </button>
        </div>
      ))}
    </div>
  );
};
