"use client";
import useRoomDescModal from "@/hooks/useRoomDescModal";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const RoomDescModal = ({ propertyExplanation }) => {
  const descModal = useRoomDescModal();
  const [showModal, setShowModal] = useState(descModal.isOpen);

  useEffect(() => {
    setShowModal(descModal.isOpen);
  }, [descModal.isOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      descModal.onClose();
    }, 300);
  };

  if (!descModal.isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={`justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70`}
      >
        <div className="relative w-3/5  max-w-2xl my-6 mx-auto overflow-y-auto rounded-lg">
          <div
            className={`
          translate
          duration-300
          h-1/2
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
        `}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="bg-white shadow-sm sticky top-0 z-[100]">
                <button
                  onClick={handleClose}
                  className="p-5 border-0 hover:opacity-70 transition "
                >
                  <IoMdClose size={18} />
                </button>
              </div>
              {/* Content */}
              <section className="p-6">
                <h2 className="text-2xl font-semibold">숙소 설명</h2>
                <p className="mt-2">{propertyExplanation}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDescModal;
