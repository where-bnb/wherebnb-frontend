"use client";

import { useMemo, useState } from "react";
import Avatar from "../ui/Avatar";
import Image from "next/image";
import RoomIcon from "./RoomIcon";
import { LuCigarette, LuCigaretteOff } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import { IoBanOutline } from "react-icons/io5";
import { translatePropertyDetails } from "@/utils/helpers";
import { FaDog } from "react-icons/fa";
import { TbDoor, TbDoorExit } from "react-icons/tb";
import { categories } from "../searchPage/categories/categoryList";
import dynamic from "next/dynamic";
import useRoomReviewModal from "@/hooks/useRoomReviewModal";
import useRoomDescModal from "@/hooks/useRoomDescModal";
import useRoomContentModal from "@/hooks/useRoomContentModal";

const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const RoomInfo = ({
  address,
  propertyType,
  category,
  propertyDetail,
  guestFavorite,
  totalScore,
  reviewLength,
  host,
  propertyExplanation,
  amenities,
}) => {
  const { country, city } = address;
  const {
    bedroom,
    bed,
    bathroom,
    maxPeople,
    smokeAvailable,
    petAvailable,
    checkInTime,
    checkOutTime,
  } = propertyDetail;

  const reviewModal = useRoomReviewModal();
  const descModal = useRoomDescModal();
  const contentModal = useRoomContentModal();

  const translatedthumbnailInfo = useMemo(() => {
    return translatePropertyDetails({ bedroom, bed, bathroom });
  }, []);

  const categoryComonent = useMemo(() => {
    return categories.find((items) => items.name === category);
  }, [category]);

  let roomCategory;

  if (categoryComonent) {
    const { icon, label, description } = categoryComonent;
    roomCategory = (
      <>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-4">
            <Image src={icon} alt={label} width={26} height={26} />
            <div>
              <div className="font-medium">{label}</div>
              <div className="text-neutral-500 text-sm">{description}</div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }

  return (
    <div className="col-span-4 flex flex-col gap-6">
      {/* 방 정보요약 */}
      <div className="flex flex-col gap-1">
        <div className="text-xl font-medium">
          {city}, {country}의 {propertyType}
        </div>
        <div className="text-neutral-500 flex gap-1">
          {Object.entries(translatedthumbnailInfo).map(([label, value]) => (
            <div key={label}>{`${label} ${value}`}</div>
          ))}
        </div>
      </div>
      {/* 게스트선호 - On */}
      <div className="border-[1px] rounded-xl py-6">
        <div
          className="flex flex-row items-center justify-between font-medium  text-center cursor-pointer"
          onClick={reviewModal.onOpen}
        >
          {guestFavorite ? (
            <div className="w-1/3">✨ 게스트 선호 ✨</div>
          ) : (
            <div className="w-1/3">좋은 선택 👍</div>
          )}
          <div className="w-1/3 border-x-[1px]">
            <div className="flex justify-center flex-col items-center">
              <span>{totalScore}</span>
              <StarRatings
                rating={totalScore}
                starDimension="10px"
                starSpacing="0"
                starRatedColor="#008489"
              />
            </div>
          </div>
          <div className="w-1/3">
            <div>{reviewLength}개</div>
            <div className="text-xs underline">후기</div>
          </div>
        </div>
      </div>
      {/* 호스트 정보 요약 */}
      <div className="flex flex-row gap-4 items-center">
        <div>
          {/* todo: host image */}
          <Avatar src="/images/placeholder.jpg" />
        </div>
        <div>
          <div className="font-medium">호스트: {host.hostName}님</div>
          <div className="text-neutral-500 text-sm">
            호스팅 경력 {host.hostCareer}
          </div>
        </div>
      </div>
      <hr />
      {/* 숙소 카테고리 */}
      {roomCategory}
      {/* 숙소정보 - propertyExplanation */}
      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">숙소 특징</div>
        <div className="border-[1px] rounded-xl py-6 px-4 grid grid-cols-5">
          {/* 숙소 인원 */}
          <div className="col-span-1">
            <div className="flex gap-2 items-end justify-center">
              <IoMdPerson size={25} /> <span>x {maxPeople}</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-neutral-500 text-xs">
                최대수용 인원 {maxPeople}명
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-2 items-center justify-center">
              {smokeAvailable ? (
                <LuCigarette size={25} />
              ) : (
                <LuCigaretteOff size={25} />
              )}
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-neutral-500 text-xs text-center">
                {smokeAvailable ? "흡연 가능" : "금연"}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-2 items-center justify-center">
              {petAvailable ? <FaDog size={25} /> : <IoBanOutline size={25} />}
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-neutral-500 text-xs text-center">
                {petAvailable ? "반려동물 동반" : "반려동물 금지"}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-2 items-center justify-center">
              <TbDoor size={25} />
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-neutral-500 text-xs text-center">
                체크인<span className="mr-2">{checkInTime}시</span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex gap-2 items-center justify-center">
              <TbDoorExit size={25} />
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-neutral-500 text-xs text-center">
                체크아웃<span className="mr-2">{checkOutTime}시</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">숙소 정보</div>
        <div className="text-sm max-h-24 text-overflow">
          {propertyExplanation}
        </div>
        <div
          className="underline cursor-pointer text-sm font-semibold"
          onClick={descModal.onOpen}
        >
          더 보기
        </div>
      </div>
      <hr />
      {/* 숙소정보 - amenities */}
      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">숙소 편의시설</div>
        {amenities.map((amenity) => {
          return <RoomIcon key={amenity} label={amenity} />;
        })}
        <div>
          <button
            className="rounded-lg py-3 px-6 bg-white  border-black border-[0.5px] hover:bg-neutral-400/20 text-sm"
            onClick={contentModal.onOpen}
          >
            편의시설 {amenities.length}개 모두보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
