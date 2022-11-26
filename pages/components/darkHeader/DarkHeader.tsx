import Mark from "../mark/Mark";

const DarkHeader = () => {
  return (
    <div className="pt-[28px] mx-[100px] flex justify-between  border-[5B5953] border-b-[1px] pb-[11px]">
      <Mark color="white" />
      <div>
        <button className="bg-[#438FFE] px-[8px] py-[7px] rounded-[4px]">
          <p className="font-[GilroyLight] text-[14px] font-[600] mt-[2px] text-[white]">
            0.04ETH
          </p>
        </button>
        <button className="bg-[#4E4D4B] px-[16px] py-[7px] rounded-[4px]">
          <p className="font-[GilroyLight] text-[14px] font-[600] mt-[2px] text-[white]">
            0xa41...91214
          </p>
        </button>
      </div>
    </div>
  );
};

export default DarkHeader;
