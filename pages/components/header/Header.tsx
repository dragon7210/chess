import Mark from "../mark/Mark";

const Header = () => {
  return (
    <div className="pt-[28px] mx-[100px] flex justify-between pb-[11px] border-[5B5953] border-b-[1px]">
      <Mark color="black" />
      <div>
        <button className="bg-[#438FFE] px-[8px] py-[7px] rounded-[4px]">
          <p className="font-[GilroyLight] text-[14px] font-[600] mt-[2px] text-[white]">
            0.04ETH
          </p>
        </button>
        <button className="bg-[white] px-[16px] py-[7px] rounded-[4px]">
          <p className="font-[GilroyLight] text-[14px] font-[600] mt-[2px]">
            0xa41...91214
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
