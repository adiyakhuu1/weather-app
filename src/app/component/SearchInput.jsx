import { Fragment } from "react";
import { CityList } from "./citySuggestion";
export const SearchInput = ({
  search,
  onChangeText,
  onPressEnter,
  setCity,
}) => {
  return (
    <div className="pl-6 border-none rounded-3xl w-[414px] lg:w-[567px] mx-auto h-[80px] bg-slate-200 flex items-center ">
      <img src="./img/search.svg" className="w-12 h-12 " />
      <input
        placeholder="The City Name"
        className="w-[100%] h-[100%] bg-slate-200 border-none rounded-3xl"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      />
    </div>
  );
};
