"use client";

import useRoomReviewModal from "@/hooks/useRoomReviewModal";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import rightBay from "../../../public/images/right-bay.jpeg";
import leftBay from "../../../public/images/left-bay.jpeg";
import Image from "next/image";
import { MdOutlineSanitizer } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { FaCommentDots, FaTag } from "react-icons/fa";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import Comment from "./Comment";
import { api } from "@/lib/axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import LoadingSpinner from "./LoadingSpinner";
import LoadingDotsSpinner from "./LoadingDotSpinner";

async function getComments({ pageParam }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await api(`/rooms/332/reviews?page=${pageParam}`);
  if (response.status !== 200) {
    // TODO: error handling
  }
  return response.data;
}

const ReviewModal = ({ scores, guestFavorite, reviewCount }) => {
  const reviewModal = useRoomReviewModal();
  const [showModal, setShowModal] = useState(reviewModal.isOpen);
  const { ref, inView } = useInView();

  const {
    data: comments,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["reviews"],
    queryFn: getComments,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.last) {
        return allPages.length;
      } else {
        return undefined;
      }
    },
    enabled: reviewModal.isOpen,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  useEffect(() => {
    setShowModal(reviewModal.isOpen);
  }, [reviewModal.isOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      reviewModal.onClose();
    }, 300);
  };

  if (!reviewModal.isOpen) {
    return null;
  }

  if (isError) {
    return <div>Error! {error.toString()}</div>;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-11/12 max-w-2xl my-6 mx-auto max-h-[90vh] overflow-y-auto rounded-lg">
          <div
            className={`
            translate
            duration-300
            h-1/2
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
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
                {guestFavorite && (
                  <div className="my-4 text-center">
                    <div className="flex justify-center items-end">
                      <div className="h-[80px]">
                        <Image
                          alt="left"
                          src={leftBay}
                          style={{
                            height: "100%",
                            width: "auto",
                          }}
                        />
                      </div>
                      <div className="font-bold text-[56px]">
                        {scores.totalScore}
                      </div>
                      <div className="h-[80px]">
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
                  <div className="pl-4 flex gap-2 py-6">
                    <FaStar size={26} />
                    <p className="text-2xl">
                      {scores.totalScore} · 후기 {reviewCount}개
                    </p>
                  </div>
                )}
                <div className="mb-6 p-4 border-y grid grid-cols-6">
                  <div className="border-r">
                    <div className="pl-4 flex flex-col justify-between gap-4">
                      <div className="text-xs">
                        <div>청결도</div>
                        <div>{scores.cleanScore}</div>
                      </div>
                      <MdOutlineSanitizer size={20} />
                    </div>
                  </div>
                  <div className="border-r">
                    <div className="pl-4 flex flex-col justify-between gap-4">
                      <div className="text-xs">
                        <div>정확도</div>
                        <div>{scores.accuracyScore}</div>
                      </div>
                      <CiCircleCheck size={20} />
                    </div>
                  </div>
                  <div className="border-r">
                    <div className="pl-4 flex flex-col justify-between gap-4">
                      <div className="text-xs">
                        <div>체크인</div>
                        <div>{scores.checkInScore}</div>
                      </div>
                      <IoKeyOutline size={20} />
                    </div>
                  </div>
                  <div className="border-r">
                    <div className="pl-4 flex flex-col justify-between gap-4">
                      <div className="text-xs">
                        <div>의사소통</div>
                        <div>{scores.communicationScore}</div>
                      </div>
                      <FaCommentDots size={20} />
                    </div>
                  </div>
                  <div className="border-r">
                    <div className="pl-4 flex flex-col justify-between gap-4">
                      <div className="text-xs">
                        <div>위치</div>
                        <div>{scores.locationScore}</div>
                      </div>
                      <FaLocationDot size={20} />
                    </div>
                  </div>
                  <div>
                    <div className="pl-4 flex flex-col justify-between gap-4">
                      <div className="text-xs">
                        <div>가격 대비 만족도</div>
                        <div>{scores.priceScore}</div>
                      </div>
                      <FaTag size={20} />
                    </div>
                  </div>
                </div>
                {/* content */}
                <div className="px-4 space-y-4">
                  <h2 className="text-xl font-semibold">
                    후기 {reviewCount}개
                  </h2>
                  <ul>
                    <li>
                      {comments.pages?.map((page) =>
                        page.content.map((poke) => {
                          if (!page.last) {
                            return (
                              <Comment
                                key={poke.reviewId}
                                review={poke}
                                isModal
                                innerRef={ref}
                              />
                            );
                          } else {
                            return (
                              <Comment
                                key={poke.reviewId}
                                review={poke}
                                isModal
                              />
                            );
                          }
                        }),
                      )}
                    </li>
                    {isFetching && (
                      <div className="mb-2">
                        <LoadingDotsSpinner />
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
