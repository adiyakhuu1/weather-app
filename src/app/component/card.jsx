import { SearchInput } from "./SearchInput";
import { MdHome } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { CityList } from "./citySuggestion";

export const Card = ({
  disappear,
  textColor,
  border,
  to,
  from,
  temp,
  status,
  theCountry,
  theCity,
  description,
  date,
  justify,
  feelsLike,
  isTrue,
  count,
  refreshing,
}) => {
  return (
    <div
      className={`opacity-90 w-[414px] h-[828px] ${border} ${justify} bg-gradient-to-b ${from} ${to} justify-center ${disappear} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-rows-[30] grid-cols-10 rounded-3xl shadow-2xl z-20`}
    >
      {/* 1 */}
      <div className="flex w-[318px] space-x-28 justify-center  row-start-2 row-end-5 col-start-2 col-end-10 p-5">
        <div>
          <h2 className={`${textColor} font-mediumt text-1xl`}>{theCountry}</h2>
          <h1 className={`${textColor} font-extrabold text-2xl`}>{theCity}</h1>
        </div>
        <span className={`material-symbols-outlined ${textColor} pt-3 pr-3`}>
          location_on
        </span>
      </div>
      {/* -- */}
      <div
        className={`text-center text-xl row-start-6 row-end-7 col-start-3 col-end-9 ${textColor}`}
      >
        {date}
      </div>
      {/* 2 */}
      <div className=" row-start-9 row-end-[15] col-start-2 col-end-10">
        <img src={`${status}`} />
      </div>
      {/* -- */}

      <div
        className={`${textColor} animate-pulse text-sm row-start-[14] row-end-[15] col-start-3 col-end-8 w-[20]`}
      >
        {/* {count} */}
        {refreshing}
      </div>

      {/* 3 */}
      <div className="flex row-start-[15] row-end-[25] col-start-2 col-end-8 p-5">
        <div className={`${textColor} text-7xl`}>{temp}</div>
        {isTrue && (
          <div className="font-light text-[12px]">FEELS LIKE{feelsLike}°C</div>
        )}
      </div>
      {/* -- */}
      {/* 4 */}
      <div className="row-start-[22] row-end-[23] col-start-2 col-end-8 p-5">
        <div className={`text-orange-500 text-2xl`}>{description}</div>
      </div>
      {/* -- */}
      <div className="flex row-start-[23] row-end-24 col-start-2 col-end-8 p-5 w-[350px] justify-center gap-14">
        {/* <img className={`${textColor} w-8`} src="./img/home.svg" />
        <img className={`${textColor} w-8`} src="./img/localization.svg" />
        <img className={`${textColor} w-8`} src="./img/fav.svg" />
        <img className={`${textColor} w-8`} src="./img/person.svg" /> */}
        <MdHome className="text-gray-500 text-3xl" />
        <FaLocationDot className="text-gray-500 text-2xl" />
        <MdFavorite className="text-gray-500 text-3xl" />
        <IoMdPerson className="text-gray-500 text-3xl" />
      </div>
    </div>
  );
};
