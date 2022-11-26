import Header from "../components/header";
import MiddleHeader from "../components/middleHeader";
import Tabs from "../components/tabs";
import Table from "../components/table";
import { availablegames, Tabledata } from "../components/constant";

const Available = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[url('/img/background.png')] h-[900px]">
      <Header />
      <MiddleHeader />
      <Tabs availablegames={availablegames} />
      <Table tableData={Tabledata} />
    </div>
  );
};

export default Available;
