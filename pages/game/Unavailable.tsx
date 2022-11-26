import Layout from "../components/layout";
import Tabs from "../components/tabs/Tabs";
import UnavailableTable from "../components/unavailableTable";
import { Tabledata1, unavailablegames } from "../components/constant";

const Unavailable = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[url('/img/background.png')] h-[900px]">
      <Layout />
      <Tabs availablegames={unavailablegames} />
      <UnavailableTable tableData={Tabledata1} />
    </div>
  );
};

export default Unavailable;
