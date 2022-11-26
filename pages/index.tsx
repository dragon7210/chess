import Mark from "./components/mark/Mark";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto bg-[url('/img/background.png')] h-[900px]">
      <div className="pt-[55px] ml-[90px]">
        <Mark />
      </div>
      <div className="mt-[119px] text-center">
        <p className="font-[Gilroy] text-[46px] font-[700]">
          Welcome to Chess Games
        </p>
        <p className="font-[Gilroy] text-[16px] text-[#717171] mt-[6px]">
          Sign in with your wallet to be able to authenticate and play games
        </p>
        <div className="mt-[60px]">
          <button className="bg-[#438FFE] rounded-[30px] flex px-[44px] py-[21px] mx-auto">
            <Image
              src="/Icon/metamask.png"
              alt="metamask"
              width={26}
              height={24}
            />
            <p className="ml-[47px] font-[Gilroy] text-[18px] text-[white] font-[600] mr-[53px]">
              Sign in with metamask
            </p>
          </button>
        </div>
        <div className="mt-[40px]">
          <button className="bg-[white] rounded-[30px] flex px-[43px] py-[20px] mx-auto border-[1px] border-[black]">
            <Image
              src="/Icon/coinbase.png"
              alt="metamask"
              width={26}
              height={24}
            />
            <p className="ml-[25px] font-[Gilroy] text-[18px] text-[black] font-[600] mr-[29px]">
              Sign in with Coinbase Wallet
            </p>
          </button>
        </div>
        <div className="mt-[35px]">
          <button>
            <p className="font-[Gilroy] text-[18px] text-[black] font-[600]">
              <u>Show more options</u>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
