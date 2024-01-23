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
import Pokemon from "./Pokemon";

async function getPokemons({ pageParam }) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/ability?limit=20&offset=${pageParam}`,
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  let filtered = await data.results.map((pokemon, index) => {
    let paddedIndex =
      pageParam === 0
        ? ("00" + (index + 1)).slice(-3)
        : ("00" + (index + 1 + pageParam)).slice(-3);

    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`;
    return {
      ...pokemon,
      imageUrl: image,
    };
  });
  return filtered;
}

async function getPokemons2({ pageParam }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await api(`/rooms/332/reviews?page=${pageParam}`);
  if (response.status !== 200) {
    // TODO: error handling
  }
  return response.data;
}

const ReviewModal = ({ scores, guestFavorite }) => {
  const reviewModal = useRoomReviewModal();
  const [showModal, setShowModal] = useState(reviewModal.isOpen);
  const { ref, inView } = useInView();

  const {
    data: pokemons,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons2,
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

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.toString()}</div>;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-11/12 my-6 mx-auto max-h-[90vh] overflow-y-auto rounded-lg">
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
              <div>
                <div>
                  <button
                    onClick={handleClose}
                    className="p-5 border-0 hover:opacity-70 transition "
                  >
                    <IoMdClose size={18} />
                  </button>
                </div>
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
              </div>
              {/* content */}
              <div className="px-4 space-y-4">
                <h2 className="text-xl font-semibold">
                  {/* 후기 {reviews.length}개 */}1111
                </h2>
                <ul>
                  <li>
                    {pokemons.pages?.map((page) =>
                      page.content.map((poke, index) => {
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
                    {/* {pokemons.pages?.map((page) =>
                      page.map((pokemon, index) => {
                        if (page.length == index + 1) {
                          return (
                            <Pokemon
                              image={pokemon.imageUrl}
                              name={pokemon.name}
                              key={index}
                              innerRef={ref}
                            />
                          );
                        } else {
                          return (
                            <Pokemon
                              image={pokemon.imageUrl}
                              name={pokemon.name}
                              key={index}
                            />
                          );
                        }
                      }),
                    )} */}
                    {/* {reviews.map((review) => (
                      <Comment key={review.id} review={review} isModal />
                    ))} */}
                    {/* {comments.pages?.map((page) =>
                      page.map((comment, index) => {
                        return <div key={index}>댓글</div>;
                      }),
                    )} */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
