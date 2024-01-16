import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import RoomIcon from "./RoomIcon";
import { LuBedDouble } from "react-icons/lu";

const amenities = ["WiFi", "TV", "Air Conditioning"];

const RoomInfo = ({ category }) => {
  const { icon: Icon, label, description } = category;
  return (
    <div className="col-span-4 flex flex-col gap-8">
      {/* 방 정보요약 */}
      <div className="flex flex-col gap-1">
        <div className="text-xl font-medium">
          발렌시아(Valencia), 스페인의 방
        </div>
        <div className=" text-neutral-500">더블 침대 1개공용 욕실</div>
      </div>
      {/* 평점정보 요약 */}
      <div className="border-[1px] rounded-xl py-6">
        <div className="flex flex-row items-center justify-between font-medium  text-center">
          <div className="w-1/3">게스트 선호</div>
          <div className="w-1/3 border-x-[1px]">4.86</div>
          <div className="w-1/3">177개</div>
        </div>
      </div>
      {/* 호스트 정보 요약 */}
      <div className="flex flex-row gap-4 items-center">
        <div>
          <Avatar src="/images/placeholder.jpg" />
        </div>
        <div>
          <div className="font-medium">호스트: Sagrario 님</div>
          <div className="text-neutral-500 text-sm">호스팅 경력 8년</div>
        </div>
      </div>
      <hr />
      {/* 숙소 카테고리 */}
      {category && (
        <>
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-4">
              <Icon size={30} className="text-neutral-700" />
              <div>
                <div className="font-medium">{label}</div>
                <div className="text-neutral-500 text-sm">{description}</div>
              </div>
            </div>
          </div>
          <hr />
        </>
      )}
      {/* 숙소정보 - propertyExplanation */}
      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">숙박 장소</div>
        <div className="w-1/2 border-[1px] rounded-xl py-6 px-4">
          <LuBedDouble size={25} />
          <div className="mt-2 space-y-1">
            <div className="text-sm">침실</div>
            <div className="text-neutral-500 text-xs">킹사이즈 침대 1개</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">숙소 정보</div>
        <div className="text-sm">
          지산고택은 하회마을 안에 있으며 경상북도 민속자료 140호로
          지정되어있으며, 고택의 역사는 약 200년 가까이 되었습니다.
        </div>
        <div className="text-sm">더 보기</div>
      </div>
      <hr />
      {/* 숙소 침실정보 - propertyDetail */}
      {/* 숙소정보 - amenities */}
      <div className="flex flex-col gap-4">
        <div className="text-xl font-medium">숙소 편의시설</div>
        {amenities.map((amenity) => {
          return <RoomIcon key={amenity} label={amenity} />;
        })}
        <div>
          <button className="rounded-lg py-3 px-6 bg-white  border-black border-[0.5px] hover:bg-neutral-400/20 text-sm">
            편의시설 x개 모두보기
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default RoomInfo;
