import { Button, useDisclosure } from "@nextui-org/react";
import ViewProContact from "../ViewProContact";

export default function ProPriceAndContact() {
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  return (
    <div className="flex sticky bottom-0 z-50 bg-white flex-row w-full border-1 p-4 rounded-lg shadow-large items-center justify-between">
      <div>
        <h1 className="text-lg font-bold">Power Plus</h1>
        <h1>₹2,000</h1>
      </div>
      <Button onClick={onOpen2} className="bg-[#3657C3] text-white">Contact Us</Button>
      <ViewProContact isOpen={isOpen2} onClose={onClose2} />
    </div>
  )
}