"use client";

import useFilterModal from "@/hooks/useFilterModal";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import {
  HiOutlineTrophy,
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { LiaBuilding } from "react-icons/lia";
import Rheostat from "rheostat";
import "rheostat/initialize";
import "./Rheostat.css";
import PriceInput from "./PriceInput";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";
import SelectButton from "./SelectButton";
import CheckBoxGroup from "./CheckBoxGroup";
import Checkbox from "./Checkbox";
import { useDetailFilter } from "@/hooks/useSearchFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const FilterModal = () => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const filterModal = useFilterModal();
  const detailFilterStore = useDetailFilter((state) => state);
  const {
    setMinPrice,
    setMaxPrice,
    setGuestFavorite,
    addPropertyType,
    removePropertyType,
    removeAll,
  } = useDetailFilter();
  const [showModal, setShowModal] = useState(filterModal.isOpen);
  const [isLoading, setIsLoading] = useState(false);
  const [min, setMin] = useState(13000);
  const [max, setMax] = useState(350000);

  // Detail Filter Modal Open
  useEffect(() => {
    setShowModal(filterModal.isOpen);
  }, [filterModal.isOpen]);

  // Modal Close
  const handleClose = useCallback(() => {
    if (isLoading) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      filterModal.onClose();
    }, 300);
  }, [isLoading, filterModal]);

  if (!filterModal.isOpen) {
    return null;
  }

  // 건물 유형 (Property Type) 상태 관리
  const handlePropertyType = (value, selected) => {
    if (selected) {
      removePropertyType(value);
    } else {
      addPropertyType(value);
    }
  };

  // '선택한 숙소 보기' 버튼 클릭 -> 쿼리 파라미터 삽입
  const handleClick = () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      price_min: detailFilterStore.price_min,
      price_max: detailFilterStore.price_max,
      min_bedrooms: detailFilterStore.min_bedrooms,
      min_beds: detailFilterStore.min_beds,
      min_bathrooms: detailFilterStore.min_bathrooms,
      guest_favorite: detailFilterStore.guest_favorite,
      property_type: detailFilterStore.property_type,
      amenities: detailFilterStore.amenities,
    };

    if (updatedQuery.price_min === 0) {
      delete updatedQuery.price_min;
    }
    if (updatedQuery.price_max === 0) {
      delete updatedQuery.price_max;
    }
    if (updatedQuery.min_bedrooms === 0) {
      delete updatedQuery.min_bedrooms;
    }
    if (updatedQuery.min_beds === 0) {
      delete updatedQuery.min_beds;
    }
    if (updatedQuery.min_bathrooms === 0) {
      delete updatedQuery.min_bathrooms;
    }
    if (updatedQuery.guest_favorite === false) {
      delete updatedQuery.guest_favorite;
    }
    if (updatedQuery.property_type === null) {
      delete updatedQuery.property_type;
    }
    if (updatedQuery.amenities === null) {
      delete updatedQuery.amenities;
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  // '전체 해제' 버튼 클릭 -> 필터 상태 초기화
  const removeAllFilters = () => {
    removeAll();
    setMin(13000);
    setMax(350000);
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        {/* Content */}
        <div
          className={`
                translate
                duration-300 
                h-full
                ${showModal ? "translate-y-0" : "translate-y-full"}
                ${showModal ? "opacity-100" : "opacity-0"}
              `}
        >
          <div className="translate h-[93svh] border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-center p-5 rounded-t justify-center relative border-b">
              <button
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute left-5"
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-md font-semibold">필터</div>
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto overflow-y-scroll">
              <div className="flex flex-col pb-5 border-b-[1px] border-neutral-200 gap-3 mb-5">
                <div className="text-xl font-semibold">숙소 유형</div>
                <div className="text-sm font-light">
                  방, 집 전체 등 원하는 숙소 유형을 검색해보세요.
                </div>
                <div className="h-[60px] flex flex-row justify-around items-center rounded-xl border-neutral-200 border-[1px] overflow-hidden">
                  <button
                    autoFocus
                    className="flex flex-grow h-full focus:bg-black focus:text-white text-center justify-center items-center "
                  >
                    숙소 전체
                  </button>
                  <button className="flex flex-grow h-full focus:bg-black focus:text-white text-center justify-center items-center border-l-[1px]">
                    방
                  </button>
                  <button className="flex flex-grow h-full focus:bg-black focus:text-white text-center justify-center items-center border-l-[1px]">
                    집 전체
                  </button>
                </div>
              </div>
              <div className="flex flex-col pb-5 border-b-[1px] border-neutral-200 gap-3 mb-5">
                <div className="text-xl font-semibold">가격 범위</div>
                <div className="text-sm font-light">
                  1박 요금 (수수료 및 세금 포함)
                </div>
                <div className="flex flex-col items-center ">
                  <Rheostat
                    min={13000}
                    max={350000}
                    values={[13000, 350000]}
                    onValuesUpdated={(e) => {
                      setMin(e.values[0]);
                      setMax(e.values[1]);
                      setMinPrice(min);
                      setMaxPrice(max);
                    }}
                  />
                  <div className="flex flex-row w-[80%] justify-between">
                    <div className="w-[40%]">
                      <PriceInput value={min} id="minVal" label="최저" />
                    </div>

                    <div className=" border-neutral-200 border-[1px] rotate-90 translate-y-full h-[20px]">
                      <hr />
                    </div>

                    <div className="w-[40%]">
                      <PriceInput value={max} id="maxVal" label="최고" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pb-7 border-b-[1px] border-neutral-200 gap-5 mb-5">
                <div className="text-xl font-semibold">침실과 침대</div>
                <div>침실</div>
                <RadioGroup>
                  <RadioButton
                    defaultChecked
                    selected={detailFilterStore.min_bedrooms === 0}
                    value={0}
                    label="상관없음"
                    id="allBedroom"
                    name="bedroom"
                  />
                  <RadioButton
                    selected={detailFilterStore.min_bedrooms === 1}
                    value={1}
                    label="1"
                    id="1Bedroom"
                    name="bedroom"
                  />
                  <RadioButton
                    selected={detailFilterStore.min_bedrooms === 2}
                    value={2}
                    label="2"
                    id="2Bedroom"
                    name="bedroom"
                  />
                  <RadioButton
                    selected={detailFilterStore.min_bedrooms === 3}
                    value={3}
                    label="3"
                    id="3Bedroom"
                    name="bedroom"
                  />
                  <RadioButton
                    selected={detailFilterStore.min_bedrooms === 4}
                    value={4}
                    label="4"
                    id="4Bedroom"
                    name="bedroom"
                  />
                  <RadioButton
                    selected={detailFilterStore.min_bedrooms === 5}
                    value={5}
                    label="5"
                    id="5Bedroom"
                    name="bedroom"
                  />
                  <RadioButton
                    selected={detailFilterStore.min_bedrooms === 6}
                    value={6}
                    label="6+"
                    id="6+Bedroom"
                    name="bedroom"
                  />
                </RadioGroup>

                <div>침대</div>
                <RadioGroup>
                  <RadioButton
                    defaultChecked
                    selected={detailFilterStore.min_beds === 0}
                    value={0}
                    label="상관없음"
                    id="allBed"
                    name="bed"
                  />
                  <RadioButton
                    value={1}
                    selected={detailFilterStore.min_beds === 1}
                    label="1"
                    id="1Bed"
                    name="bed"
                  />
                  <RadioButton
                    value={2}
                    selected={detailFilterStore.min_beds === 2}
                    label="2"
                    id="2Bed"
                    name="bed"
                  />
                  <RadioButton
                    value={3}
                    selected={detailFilterStore.min_beds === 3}
                    label="3"
                    id="3Bed"
                    name="bed"
                  />
                  <RadioButton
                    value={4}
                    selected={detailFilterStore.min_beds === 4}
                    label="4"
                    id="4Bed"
                    name="bed"
                  />
                  <RadioButton
                    value={5}
                    selected={detailFilterStore.min_beds === 5}
                    label="5"
                    id="5Bed"
                    name="bed"
                  />
                  <RadioButton
                    value={6}
                    selected={detailFilterStore.min_beds === 6}
                    label="6+"
                    id="6+Bed"
                    name="bed"
                  />
                </RadioGroup>

                <div>욕실</div>
                <RadioGroup>
                  <RadioButton
                    defaultChecked
                    selected={detailFilterStore.min_bathrooms === 0}
                    value={0}
                    label="상관없음"
                    id="allBathroom"
                    name="bathroom"
                  />
                  <RadioButton
                    value={1}
                    selected={detailFilterStore.min_bathrooms === 1}
                    label="1"
                    id="1Bathroom"
                    name="bathroom"
                  />
                  <RadioButton
                    value={2}
                    selected={detailFilterStore.min_bathrooms === 2}
                    label="2"
                    id="2Bathroom"
                    name="bathroom"
                  />
                  <RadioButton
                    value={3}
                    selected={detailFilterStore.min_bathrooms === 3}
                    label="3"
                    id="3Bathroom"
                    name="bathroom"
                  />
                  <RadioButton
                    value={4}
                    selected={detailFilterStore.min_bathrooms === 4}
                    label="4"
                    id="4Bathroom"
                    name="bathroom"
                  />
                  <RadioButton
                    value={5}
                    selected={detailFilterStore.min_bathrooms === 5}
                    label="5"
                    id="5Bathroom"
                    name="bathroom"
                  />
                  <RadioButton
                    value={6}
                    selected={detailFilterStore.min_bathrooms === 6}
                    label="6+"
                    id="6+Bathroom"
                    name="bathroom"
                  />
                </RadioGroup>
              </div>
              <div className="flex flex-col pb-5 border-b-[1px] border-neutral-200 gap-3 mb-5">
                <div className="text-xl font-semibold">최고 수준의 숙소</div>
                <SelectButton
                  title="게스트 선호"
                  subtitle="웨어비앤비 게스트에게 가장 사랑받는 숙소"
                  icon={HiOutlineTrophy}
                  big={true}
                  onClick={setGuestFavorite}
                  selected={detailFilterStore.guest_favorite}
                />
              </div>
              <div className="flex flex-col pb-5 border-b-[1px] border-neutral-200 gap-3 mb-5">
                <div className="text-xl font-semibold">건물 유형</div>
                <div className="grid gap-4 grid-cols-2 2xl:grid-cols-4 w-full">
                  <SelectButton
                    title="단독 또는 다세대 주택"
                    icon={HiOutlineHome}
                    selected={detailFilterStore.property_type.includes(1)}
                    onClick={handlePropertyType}
                    value={1}
                  />
                  <SelectButton
                    title="아파트"
                    icon={HiOutlineBuildingOffice2}
                    selected={detailFilterStore.property_type.includes(2)}
                    onClick={handlePropertyType}
                    value={2}
                  />
                  <SelectButton
                    title="게스트용 별채"
                    icon={HiOutlineHomeModern}
                    selected={detailFilterStore.property_type.includes(3)}
                    onClick={handlePropertyType}
                    value={3}
                  />
                  <SelectButton
                    title="호텔"
                    icon={LiaBuilding}
                    selected={detailFilterStore.property_type.includes(4)}
                    onClick={handlePropertyType}
                    value={4}
                  />
                </div>
              </div>
              <div className="flex flex-col pb-5 gap-3 mb-5">
                <div className="text-xl font-semibold">편의시설</div>
                <CheckBoxGroup>
                  <Checkbox value="1" label="무선인터넷" />
                  <Checkbox value="2" label="주방" />
                  <Checkbox value="3" label="세탁기" />
                  <Checkbox value="4" label="건조기" />
                  <Checkbox value="5" label="에어컨" />
                  <Checkbox value="6" label="난방" />
                  <Checkbox value="7" label="업무 전용 공간" />
                  <Checkbox value="8" label="TV" />
                  <Checkbox value="9" label="헤어드라이어" />
                  <Checkbox value="10" label="다리미" />
                </CheckBoxGroup>
              </div>
            </div>
            {/* Footer */}
            <div className="flex flex-row justify-between px-6 py-4 border-t-[1px] border-neutral-200">
              <button
                onClick={removeAllFilters}
                className="hover:bg-neutral-100 rounded-lg px-3 py-1"
              >
                전체 해제
              </button>
              <button
                onClick={handleClick}
                className="bg-black opacity-85 hover:opacity-100 text-white px-5 py-3 rounded-lg"
              >
                선택한 숙소 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
