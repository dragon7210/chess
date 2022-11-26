const UnavailableTable = ({ tableData }: any) => {
  return (
    <div className="mx-[100px] bg-[#FBFBFB] px-[40px] py-[26px]">
      <table className="w-[100%] table-fixed">
        <thead>
          <tr className="text-left ">
            <th>
              <p className="text-[#929292] font-[GilroyLight]">GAMEID</p>
            </th>
            <th>
              <p className="text-[#929292] font-[GilroyLight]">LIMIT</p>
            </th>
            <th>
              <p className="text-[#929292] font-[GilroyLight]">WINNER</p>
            </th>
            <th>
              <p className="text-[#929292] font-[GilroyLight]">AMOUNT WON</p>
            </th>
            <th>
              <p className="text-[#929292] font-[GilroyLight]">DATE ENDED</p>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((element: any, index: number) => {
            return (
              <tr key={index} className="border-b-[2px] border-[#F2F2F2]">
                <td>
                  <p className="my-[26px] text-[#535353] font-[600]">
                    {element.gameId}
                  </p>
                </td>
                <td>
                  <p className="my-[26px] text-[#535353] font-[600]">
                    {element.limit}
                  </p>
                </td>
                <td>
                  <p className="my-[26px] text-[#535353] font-[600]">
                    {element.winner}
                  </p>
                </td>
                <td>
                  <p className="my-[26px] text-[#535353] font-[600]">
                    {element.won}ETH
                  </p>
                </td>
                <td>
                  <p className="my-[26px] text-[#535353] font-[600]">
                    {element.date}
                  </p>
                </td>
                <td>
                  <button className="bg-[#BFBFBF] rounded-[8px] w-[123px]">
                    <p className="text-[white] font-[600] text-[12px] font-[GilroyLight] py-[10px] px-[20px]">
                      Request to join
                    </p>
                  </button>
                </td>
                <td>
                  <button className="rounded-[8px] border-2 border-[#438FFE] w-[123px]">
                    <p className="text-[#438FFE] font-[600] text-[12px] font-[GilroyLight] py-[10px] px-[20px]">
                      Spectate
                    </p>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UnavailableTable;
