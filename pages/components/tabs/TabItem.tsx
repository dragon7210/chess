import { useState } from "react";

const TabItem = ({ name }: any) => {
  const [clickState, setClickState] = useState(false);

  return (
    <div
      onClick={() => {
        clickState ? setClickState(false) : setClickState(true);
      }}
    >
      <p
        className={`font-[Manrope] text-[18px] font-[500] mr-[34px] cursor-pointer pb-[10px]
      ${
        clickState
          ? `border-b-4 border-[black]`
          : `hover:border-b-4 hover:border-[black]`
      }
    `}
      >
        {name}
      </p>
    </div>
  );
};

export default TabItem;
