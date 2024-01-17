import Image from "next/image";
import Heading from "../ui/Heading";
import HeartButton from "./HeartButton";
import { TiThSmall } from "react-icons/ti";

const RoomHead = ({ title, photos }) => {
  return (
    <section className="space-y-4">
      <Heading title={title} />
      <div className="w-full h-[35vh] overflow-hidden rounded-xl relative">
        <div className="grid grid-rows-2 grid-cols-2 gap-2 h-full">
          <div className="row-span-2 relative">
            {photos[0] && (
              <Image
                alt={`Image ${title} 1`}
                fill
                src={photos[0]}
                className="object-cover"
              />
            )}
          </div>
          <div className="row-span-1 col-span-1 relative">
            {photos[1] && (
              <Image
                alt={`Image ${title} 2`}
                fill
                src={photos[1]}
                className="object-cover"
              />
            )}
          </div>
          <div className="row-span-1 col-span-1 relative">
            {photos[2] && (
              <Image
                alt={`Image ${title} 3`}
                fill
                src={photos[2]}
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div className="absolute top-5 right-5">
          <HeartButton />
        </div>
        <div className="absolute bottom-3 right-3">
          <button className="bg-white flex justify-between items-center gap-2 text-sm text-neutral-500 px-2 py-1 border-none rounded-lg hover:text-black">
            <TiThSmall />
            <span>사진 모두 보기</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomHead;
