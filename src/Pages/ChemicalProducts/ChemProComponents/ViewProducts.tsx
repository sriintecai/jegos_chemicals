import {
  Accordion,
  AccordionItem,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import PowerfulClean from "./ViewProducts/PowerfulClean";
import ProPriceAndContact from "./ViewProducts/ProPriceAndContact";
export default function ViewProducts({
  isOpen,
  onClose,
}: {
  isOpen: any;
  onClose: any;
}) {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
        <Modal
          className="relative"
          size={"xl"}
          isOpen={isOpen}
          onClose={onClose}
          placement={"center"}
        >
          <ModalContent className="lg:w-1/2 mx-4">
            <div className="h-[80dvh] overflow-y-scroll">
              <div className="flex justify-center items-center p-4">
                <div className="flex overflow-x-scroll gap-6 flex-row w-full">
                  <div className="flex pb-4 gap-4">
                    <Image
                      isZoomed
                      src={"/PRODUCTS/PRD_1.svg"}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <ModalBody>
                <PowerfulClean />
                <div>
                  <h1 className=" font-semibold">Frequently Asked Questions</h1>
                  <Accordion className="">
                    <AccordionItem
                    classNames={{
                      title:"lg:text-[20px] text-[16px]",
                      content:"lg:text-[16px] text-[14px]",
                    }}
                      key="1"
                      aria-label="Accordion 1"
                      title="Powerful solutions for removing grime, grease?"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 2"
                      title="Advanced chemicals to protect your machinery and infrastructure"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Accordion 3"
                      title="Powerful solutions for removing grime, grease?"
                    >
                      {defaultContent}
                    </AccordionItem>
                  </Accordion>
                </div>
              </ModalBody>
              <ModalFooter className="sticky bottom-0">
                <ProPriceAndContact />
              </ModalFooter>
            </div>
          </ModalContent>
        </Modal>
  );
}
