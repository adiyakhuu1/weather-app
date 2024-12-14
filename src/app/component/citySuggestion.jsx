import { useEffect, useState } from "react";

export const CityList = ({ search }) => {
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
    console.log(search);
    if (search) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCities(filtered.slice(0, 5));
    } else {
      setFilteredCities([]);
    }
  }, [search, cities]);

  return (
    <div className="searchin">
      {filteredCities.map((city) => (
        <div>
          <button>{city}</button>
        </div>
      ))}
    </div>
  );
};
