import { Modal, ModalContent } from "@nextui-org/react";
import { IoCallOutline } from "react-icons/io5";

export default function ViewProContact({
  isOpen,
  onClose,
}: {
  isOpen: any;
  onClose: any;
}) {
  return (
    <Modal
      className="h-fit lg:py-2 lg:w-2/4 flex justify-center items-center"
      size={"xl"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent className="rounded-lg no-scrollbar">
        <div className="lg:w-11/12 lg:mt-5 p-4 flex flex-col justify-center rounded-lg">
        <div className="space-y-2`">
          <h1 className="font-bold text-[24px]">Contact For Orders</h1>
          <p>Want to order products us for details</p>
          <div className="flex items-center gap-5 border-2 rounded-lg p-4 border-[#D8D9E0]">
            <IoCallOutline
              color={"#8B8D98"}
              size={40}
              className="p-2 border-2 border-[#D8D9E0] bg-[#EFF0F3] rounded-lg"
            />
            <div>
              <h1 className="text-lg text-[#62636C] font-semibold">
                Contact Number
              </h1>
              <h1 className="text-[#62636C]">+91 12345 67890</h1>
            </div>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}