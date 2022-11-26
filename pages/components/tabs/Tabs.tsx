import { useState } from "react";

const Tabs = ({ availablegames }: any) => {
  const [clickState, setClickState] = useState<number>(0);
  return (
    <div className="flex mt-[31px] ml-[100px]">
      {availablegames.map((element: string, index: number) => {
        return (
          <div
            key={index}
            onClick={() => {
              setClickState(index);
            }}
          >
            <p
              className={`font-[Manrope] text-[18px] font-[500] mr-[34px] cursor-pointer pb-[10px]
        ${
          clickState === index
            ? `border-b-4 border-[black]`
            : `hover:border-b-4 hover:border-[black]`
        }
      `}
            >
              {element}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
