import Image from "next/image";

const Person = ({ name }: any) => {
  return (
    <div className="flex">
      <Image src="/img/person.png" alt="person" width={43} height={43} />
      <p className="font-[GilroyLight] font-[700] text-[16px] text-[#BDBDBD] mt-[11px] ml-[10px]">
        {name}
      </p>
    </div>
  );
};

export default Person;
