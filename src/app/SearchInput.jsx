export const SearchInput = ({ search, onChangeText, onPressEnter }) => {
  return (
    <div className="pl-6 border-none rounded-3xl w-[567px] h-[80px] bg-slate-200 flex items-center">
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
