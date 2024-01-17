import Image from "next/image";
import leftBay from "../../../public/images/left-bay.jpeg";
import rightBay from "../../../public/images/right-bay.jpeg";
import { MdOutlineSanitizer } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { FaCommentDots, FaTag } from "react-icons/fa";
import { FaLocationDot, FaStar } from "react-icons/fa6";

import Comment from "./Comment";

const RoomReview = ({ guestFavorite, scores, reviews }) => {
  return (
    <section>
      {guestFavorite && (
        <div className="mt-4 mb-16 text-center py-12">
          <div className="flex justify-center items-end">
            <div className="h-[120px]">
              <Image
                alt="left"
                src={leftBay}
                style={{
                  height: "100%",
                  width: "auto",
                }}
              />
            </div>
            <div className="font-bold text-[84px]">{scores.totalScore}</div>
            <div className="h-[120px]">
              <Image
                alt="right"
                src={rightBay}
                style={{
                  height: "100%",
                  width: "auto",
                }}
              />
            </div>
          </div>
          <div className="mt-4 text-xs">게스트 선호</div>
          <div className="text-xs text-neutral-500">
            평점, 후기, 신뢰도 기준
            <br />
            웨어비앤비에서 가장 사랑받는 숙소
          </div>
        </div>
      )}
      {!guestFavorite && (
        <div className="pl-4 mb-6 flex gap-2 py-6">
          <FaStar size={26} />
          <p className="text-2xl">
            {scores.totalScore} · 후기 {reviews.length}개
          </p>
        </div>
      )}
      <div className="mb-10 pb-10 border-b grid grid-cols-6">
        <div className="border-r">
          <div className="pl-4 flex flex-col justify-between gap-6">
            <div className="text-xs">
              <div>청결도</div>
              <div>{scores.cleanScore}</div>
            </div>
            <MdOutlineSanitizer size={30} />
          </div>
        </div>
        <div className="border-r">
          <div className="pl-4 flex flex-col justify-between gap-6">
            <div className="text-xs">
              <div>정확도</div>
              <div>{scores.accuracyScore}</div>
            </div>
            <CiCircleCheck size={30} />
          </div>
        </div>
        <div className="border-r">
          <div className="pl-4 flex flex-col justify-between gap-6">
            <div className="text-xs">
              <div>체크인</div>
              <div>{scores.checkInScore}</div>
            </div>
            <IoKeyOutline size={30} />
          </div>
        </div>
        <div className="border-r">
          <div className="pl-4 flex flex-col justify-between gap-6">
            <div className="text-xs">
              <div>의사소통</div>
              <div>{scores.communicationScore}</div>
            </div>
            <FaCommentDots size={30} />
          </div>
        </div>
        <div className="border-r">
          <div className="pl-4 flex flex-col justify-between gap-6">
            <div className="text-xs">
              <div>위치</div>
              <div>{scores.locationScore}</div>
            </div>
            <FaLocationDot size={30} />
          </div>
        </div>
        <div>
          <div className="pl-4 flex flex-col justify-between gap-6">
            <div className="text-xs">
              <div>가격 대비 만족도</div>
              <div>{scores.priceScore}</div>
            </div>
            <FaTag size={30} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <Comment key={review.id} review={review} />
        ))}
      </div>
      <div>
        <button className="rounded-lg py-3 px-6 bg-white  border-black border-[0.5px] hover:bg-neutral-400/20 text-sm">
          후기 x개 모두보기
        </button>
      </div>
    </section>
  );
};

export default RoomReview;
