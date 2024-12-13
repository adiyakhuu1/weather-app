import { SearchInput } from "./SearchInput";

export const Card = ({
  textColor,
  to,
  from,
  temp,
  status,
  theRegion,
  description,
  date,
}) => {
  return (
    <div
      className={`w-[414px] h-[828px] bg-gradient-to-b ${from} ${to} justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-rows-[30] grid-cols-10 rounded-3xl shadow-2xl`}>
      {/* 1 */}
      <div className="flex w-[318px] space-x-28 justify-center  row-start-2 row-end-5 col-start-2 col-end-10 p-5">
        <h1 className={`${textColor} font-extrabold text-2xl`}>{theRegion}</h1>
        <span className={`material-symbols-outlined ${textColor} pt-3 pr-3`}>
          location_on
        </span>
      </div>
      {/* -- */}
      <div
        className={`text-center text-2xl row-start-7 row-end-8 col-start-3 col-end-9 ${textColor}`}>
        {date}
      </div>
      {/* 2 */}
      <div className="row-start-9 row-end-[15] col-start-2 col-end-10">
        <img src={`${status}`} />
      </div>
      {/* -- */}
      {/* 3 */}
      <div className="row-start-[15] row-end-[25] col-start-2 col-end-6 p-5">
        <div className={`${textColor} text-7xl`}>{temp} </div>
      </div>
      {/* -- */}
      {/* 4 */}
      <div className="row-start-[20] row-end-28 col-start-2 col-end-6 p-5">
        <div className={`text-orange-500 text-2xl`}>{description}</div>
      </div>
      {/* -- */}
    </div>
  );
};