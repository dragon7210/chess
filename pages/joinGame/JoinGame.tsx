import DarkHeader from "../components/darkHeader";
import Person from "../components/Person";
import Image from "next/image";

const JoinGame = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#262522] pb-[60px]">
      <DarkHeader />
      <div className="flex">
        <div className="w-[390px]">
          <button className="flex mt-[38px] ml-[100px]">
            <p className="text-[#FFFFFF] font-[GilroyLight] font-[700] text-[13px]">
              Go Back
            </p>
          </button>
        </div>
        <div>
          <div className="flex mt-[24px] justify-between ">
            <Person name="Opponent" />
            <button className="bg-[#383531] px-[30px] py-[8px] rounded-[8px]">
              <p className="text-[#BDBDBD] text-[16px] font-[GilroyLight] font-[600]">
                00:00:00
              </p>
            </button>
          </div>
          <div className="mt-[22px]">
            <Image
              className="mx-auto"
              alt="back2"
              src="/img/back2.png"
              width={640}
              height={640}
            />
          </div>
          <div className="flex mt-[24px] justify-between ">
            <Person name="My Avatar" />
            <button className="bg-[#383531] px-[30px] py-[8px] rounded-[8px]">
              <p className="text-[#BDBDBD] text-[16px] font-[GilroyLight] font-[600]">
                00:00:00
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGame;
