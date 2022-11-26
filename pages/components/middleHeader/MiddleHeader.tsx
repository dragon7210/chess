import { useState } from "react";
import Modal from "../modalcom";

const MiddleHeader = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <div className="mt-[45px] flex justify-end mr-[100px]">
      <button
        className="flex bg-[#438FFE] py-[7.5px] px-[12px] rounded-[8px] ml-[12px]"
        onClick={() => setModal(true)}
      >
        <p className="text-[white] font-[GilroyRight] text-[14px] font-[600]">
          + Create New Room
        </p>
      </button>
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

export default MiddleHeader;
