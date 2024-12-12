export const WhiteCircle = ({ size }) => {
  return (
    <div
      className={`w-[${size}] h-[${size}] border-[1px] rounded-full border-gray-200 bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}></div>
  );
};
