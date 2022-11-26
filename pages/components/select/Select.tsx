const Select = ({ selectSize }: any) => {
  return (
    <div className="flex justify-center">
      <div className={`w-[${selectSize}]`}>
        <select className="border-[#E7E7E7] border-[1px] w-full px-[18px] py-[7px] rounded-[6px]">
          <option value="1">
            <p className="font-[GilroyLight] text-[#535353] text-[14px]">
              Public
            </p>
          </option>
        </select>
      </div>
    </div>
  );
};

export default Select;
