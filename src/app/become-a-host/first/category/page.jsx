'use client';

import {SelectStructure} from "@/components/host/RegisterRoom/SelectStructure";
import { useHostData } from "@/context/HostDataContext";
import categories from "/public/data/categories";
import Image from "next/image";

export default function CategoryPage() {
    const { updateHostData, hostData, isLoading} = useHostData();

    const handleStructureSelect = (item) => {
        updateHostData({ 'category' : item });
    };

    // const items = [
    //     { name: "숙박(연: 펜션, 한옥 등)", icon: <FaHouseChimneyWindow /> },
    //     { name: "아파트", icon: <MdOutlineApartment /> },
    //     { name: "헛간", icon : <GiBarn />},
    //     { name: "통나무집", icon : <MdCabin />},
    //     { name: "캠핑카", icon : <TbCamper />},
    //     { name: "캐슬", icon : <MdCastle />},
    //     { name: "빌딩", icon : <FaBuilding />},
    //     { name: "컨테이너하우스", icon : <LuContainer />},
    //     { name: "하우스보트", icon : <MdHouseboat />},
    //     { name: "게스트하우스", icon : <FaHouseUser />},
    //     { name: "호텔", icon : <FaHotel />},
    //     { name: "동굴", icon : <GiCaveEntrance />},
    // ];

    const categoryItems = categories.map((category) => {
        return {
            name : category.label,
            id : category.id,
            icon : <Image src={category.icon} alt={category.name} width={50} height={50}/>
        }
    });


    if (isLoading) {
        return <div>Loading...</div>; // 로딩 상태 표시
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">다음 중 숙소를 가장 잘 설명한 것은 무엇인가요?</h1>
            <SelectStructure initialData={hostData.category} items={categoryItems} onItemSelect={handleStructureSelect}/>
        </div>
    );
}