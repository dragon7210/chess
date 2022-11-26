import Mark from "../mark/Mark";

const Header = () => {
  return (
    <div className="pt-[28px] ml-[100px] flex justify-between">
      <Mark />
      <div className="mr-[120px]">
        <button className="bg-[#438FFE] px-[8px] py-[7px] rounded-[4px]">
          <p className="font-[GilroyLight] text-[14px] font-[600]">0.04ETH</p>
        </button>
        <button className="bg-[white] px-[16px] py-[7px] rounded-[4px]">
          <p className="font-[GilroyLight] text-[14px] font-[600]">
            0xa41...91214
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;
