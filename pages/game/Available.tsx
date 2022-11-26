import Header from "../components/header";
import MiddleHeader from "../components/middleHeader";
import Tabs from "../components/tabs";
import { availablegames } from "../components/constant";

const Available = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[url('/img/background.png')] h-[900px]">
      <Header />
      <MiddleHeader />
      <Tabs names={availablegames} />
    </div>
  );
};

export default Available;
