import { useRouter } from "next/router";

const AvailableTable = ({ tableData }: any) => {
  const router = useRouter();
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
              <p className="text-[#929292] font-[GilroyLight]">ENTRY FEE</p>
            </th>
            <th>
              <p className="text-[#929292] font-[GilroyLight]">
                NO. OF PLAYERS
              </p>
            </th>
            <th>
              <p className="text-[#929292] font-[GilroyLight]">DATE CREATED</p>
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
                    {element.entry}ETH
                  </p>
                </td>
                <td>
                  <p className="my-[26px] text-[#535353] font-[600]">
                    {element.No}
                  </p>
                </td>
                <td>
                  <p className="my-[26px] text-[#535353] font-[600]">
                    {element.date}
                  </p>
                </td>
                <td>
                  <button
                    className="bg-[#438FFE] rounded-[8px] w-[123px]"
                    onClick={() => router.push("/joinGame")}
                  >
                    <p className="text-[white] font-[600] text-[12px] font-[GilroyLight] py-[10px] px-[20px]">
                      Request to join
                    </p>
                  </button>
                </td>
                <td>
                  <button
                    className="rounded-[8px] border-2 border-[#438FFE] w-[123px]"
                    onClick={() => router.push("/spectating")}
                  >
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

export default AvailableTable;
