import { SearchInput } from "./SearchInput";

export const Card = ({ color, textColor, to, from, temp, status }) => {
  return (
    <div
      className={`w-[414px] h-[828px] bg-gradient-to-b ${from} ${to} justify-center absolute top-[230px] left-[350px] grid p-4 rounded-3xl shadow-2xl`}
    >
      {/* 1 */}
      <div className="flex w-[auto] space-x-28 justify-center  row-start-1 row-end-2 col-start-1 col-end-4">
        <h1 className={`${textColor} font-extrabold text-6xl`}>Krakow</h1>
        <span className={`material-symbols-outlined ${textColor} pt-3 pr-3`}>
          location_on
        </span>
      </div>
      {/* -- */}
      {/* 2 */}
      <div className="row-start-2 row-end-6 col-start-1 col-end-4">
        <img src={`${status}`} />
      </div>
      {/* -- */}
      {/* 3 */}
      <div className="row-start-4 row-end-6 col-start-1 col-end-3 p-5">
        <div className={`${textColor} text-7xl`}>{temp}</div>
      </div>
      {/* -- */}
      {/* 4 */}
      <div className="row-start-5 row-end-6 col-start-1 col-end-3 p-5">
        <div className={`text-orange-500 text-2xl`}>Bright</div>
      </div>
      {/* -- */}
    </div>
  );
};
