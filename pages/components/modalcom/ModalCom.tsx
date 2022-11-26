import Modal from "react-modal";
import Select from "../select";

const ModalCom = ({ modal, setModal }: any) => {
  const customStyles = {
    content: {
      width: "495px",
      height: "365px",
      margin: "auto",
      padding: "28px",
    },
  };

  return (
    <Modal isOpen={modal} style={customStyles}>
      <p className="font-[GilroyLight] font-[700] text-[18px]">
        Create New Room
      </p>
      <div className="mt-[26px]">
        <p className="mb-[10px] font-[Manrope] text-[14px] font-[700]">
          Entry Fee
        </p>
        <Select selectSize="438px" />
      </div>
      <div className="mt-[24px]">
        <p className="mb-[10px] font-[Manrope] text-[14px] font-[700]">
          Room Privacy
        </p>
        <Select selectSize="438px" />
      </div>
      <div className="flex mt-[37px] justify-end ">
        <button
          className="rounded-[6px] mr-[10px] border-[#929292] border-2"
          onClick={() => {
            setModal(false);
          }}
        >
          <p className="text-[14px] text-[#929292] font-[600] font-[GilroyLight] px-[16px] py-[5px] ">
            Cancel
          </p>
        </button>
        <button
          className="rounded-[6px] w-[80px] bg-[#438FFE]"
          onClick={() => {
            setModal(false);
          }}
        >
          <p className="text-[14px] text-[white] font-[600] font-[GilroyLight] px-[16px] py-[5px] ">
            Save
          </p>
        </button>
      </div>
    </Modal>
  );
};

export default ModalCom;
