import Layout from "../components/layout";
import Tabs from "../components/tabs";
import AvailableTable from "../components/availableTable";
import { availablegames, Tabledata } from "../components/constant";

const Available = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[url('/img/background.png')] h-[900px]">
      <Layout />
      <Tabs availablegames={availablegames} />
      <AvailableTable tableData={Tabledata} />
    </div>
  );
};

export default Available;
