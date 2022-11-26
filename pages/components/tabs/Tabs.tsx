import TabItem from "./TabItem";

const Tabs = ({ availablegames }: any) => {
  return (
    <div className="flex mt-[31px] ml-[100px]">
      {availablegames.map((element: string, index: number) => {
        return <TabItem key={index} name={element} />;
      })}
    </div>
  );
};

export default Tabs;
