import {SelectStructure} from "@/components/host/RegisterRoom/SelectStructure";
import {FaHouseChimneyWindow} from "react-icons/fa6";
import {MdCabin, MdCastle, MdHouseboat, MdOutlineApartment} from "react-icons/md";
import {GiBarn, GiCaveEntrance} from "react-icons/gi";
import {TbCamper} from "react-icons/tb";
import {FaBuilding, FaHotel, FaHouseUser} from "react-icons/fa";
import {LuContainer} from "react-icons/lu";

export default function StructurePage() {

    const items = [
        { name: "숙박(연: 펜션, 한옥 등)", icon: <FaHouseChimneyWindow /> },
        { name: "아파트", icon: <MdOutlineApartment /> },
        { name: "헛간", icon : <GiBarn />},
        { name: "통나무집", icon : <MdCabin />},
        { name: "캠핑카", icon : <TbCamper />},
        { name: "캐슬", icon : <MdCastle />},
        { name: "빌딩", icon : <FaBuilding />},
        { name: "컨테이너하우스", icon : <LuContainer />},
        { name: "하우스보트", icon : <MdHouseboat />},
        { name: "게스트하우스", icon : <FaHouseUser />},
        { name: "호텔", icon : <FaHotel />},
        { name: "동굴", icon : <GiCaveEntrance />},
    ];

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">다음 중 숙소를 가장 잘 설명한 것은 무엇인가요?</h1>
            <SelectStructure items={items}/>
        </div>
    );
}