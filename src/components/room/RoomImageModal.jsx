import { IoChevronBack } from "react-icons/io5";
import Image from "next/image";
import HeartButton from "../ui/HeartButton";

const RoomImageModal = ({
  setShowImageModal,
  showImageModal,
  photos,
  propertyId,
  currentUser,
}) => {
  const handleClose = () => {
    setShowImageModal(false);
  };

  const modalClass = showImageModal ? "translate-y-0" : "translate-y-full";

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto bg-white transition-transform duration-300 ease-in-out
    ${modalClass}`}
    >
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-20 p-4">
        <div className="flex justify-between px-4">
          <button
            onClick={handleClose}
            className="border-0 hover:opacity-70 transition"
          >
            <IoChevronBack size={18} />
          </button>
          <div className="flex gap-1 items-center">
            <HeartButton listingId={propertyId} currentUser={currentUser}>
              <span className="text-sm underline inline-block">저장</span>
            </HeartButton>
          </div>
        </div>
      </div>
      {/* Image Content Here */}
      <div className="max-w-2xl mx-auto my-8 h-full flex flex-col gap-2">
        <div className="relative h-4/5">
          {photos[0] && (
            <Image
              alt={`Image 1`}
              fill
              src={photos[0]}
              className="object-cover"
            />
          )}
        </div>
        <div className="grid grid-rows-1 grid-cols-2 gap-2 h-1/2">
          <div className="col-span-1 relative">
            {photos[1] && (
              <Image
                alt={`Image 2`}
                fill
                src={photos[1]}
                className="object-cover"
              />
            )}
          </div>
          <div className="col-span-1 relative">
            {photos[1] && (
              <Image
                alt={`Image 2`}
                fill
                src={photos[1]}
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-2 h-4/5">
          <div className="row-span-2 relative">
            {photos[0] && (
              <Image
                alt={`Image 1`}
                fill
                src={photos[0]}
                className="object-cover"
              />
            )}
          </div>
          <div className="row-span-1 col-span-1 relative">
            {photos[1] && (
              <Image
                alt={`Image 2`}
                fill
                src={photos[1]}
                className="object-cover"
              />
            )}
          </div>
          <div className="row-span-1 col-span-1 relative">
            {photos[2] && (
              <Image
                alt={`Image 3`}
                fill
                src={photos[2]}
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomImageModal;
