import Image from "next/image";
import Heading from "../ui/Heading";
import HeartButton from "./HeartButton";

const RoomHead = ({ title, locationValue, imageSrc, id }) => {
  return (
    <>
      <Heading title="유서 깊은 발렌시아를 즐기고 해변에서 가깝습니다." />
      <div className="w-full h-[30vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Image"
          fill
          src="/images/room-1.jpg"
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton />
        </div>
      </div>
    </>
  );
};

export default RoomHead;
