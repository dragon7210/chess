import Image from "next/image";

const Mark = ({ color }: any) => {
  return (
    <div className="flex">
      <p
        className={`font-[Gilroy] text-[18px] font-[700] mt-[3px] text-[${color}]`}
      >
        CHESS
      </p>
      <Image
        className="mx-[6px]"
        src="/icon/chess.png"
        alt="chess"
        width={32}
        height={32}
      />
      <p
        className={`font-[Gilroy] text-[18px] font-[700] mt-[3px] text-[${color}]`}
      >
        GAMES
      </p>
    </div>
  );
};

export default Mark;
