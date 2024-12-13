export const WhiteCircle = ({ size, color, logo }) => {
  return (
    <div
      className={`${size} border-[1px] rounded-full border-gray-200 ${color} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
    >
      <div className="flex gap-2 absolute top-[50%] left-[45%] translate-x-[-50%] translate-y-[-50%]">
        {logo && <img src="./img/pinecone-logo/Vector.png" />}
        {logo && <img src="./img/pinecone-logo/Vector-1.png" />}
      </div>
    </div>
  );
};
