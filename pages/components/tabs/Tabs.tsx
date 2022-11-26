type Props = {
  names: any;
};

const Tabs: React.FC<Props> = ({ names }) => {
  return (
    <div className="flex">
      {names.map((name: string, index: number) => (
        <div key={index}>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
