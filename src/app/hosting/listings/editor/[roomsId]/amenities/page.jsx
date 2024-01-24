'use client';

import {
    FaBriefcase,
    FaSnowflake,
    FaWifi
} from "react-icons/fa";
import { PiTelevisionFill} from "react-icons/pi";
import {TbToolsKitchen2, TbWashTumbleDry} from "react-icons/tb";
import {GiFireplace, GiHairStrands , GiWashingMachine} from "react-icons/gi";
import React from "react";
import {SelectStructure} from "@/components/host/RegisterRoom/SelectStructure";
import {useHostData} from "@/context/HostDataContext";

export default function EditAmenitiesPage() {

    const { updateHostData, hostData, isLoading } = useHostData()
    const onItemSelect = (item) => {
        updateHostData({amenities : item});
    }

    const items = [
        { name: "무선인터넷", id:1, icon: <FaWifi /> },
        { name: "주방", id:2,  icon : <TbToolsKitchen2 />},
        { name: "세탁기", id:3,  icon : <GiWashingMachine />},
        { name: "건조기", id:4,  icon : <TbWashTumbleDry />},
        { name: "에어컨", id:5,  icon : <FaSnowflake />},
        { name: "난방", id:6,  icon : <GiFireplace />},
        { name: "업무 전용 공간", id:7,  icon : <FaBriefcase />},
        { name: "TV", id:8,  icon: <PiTelevisionFill /> },
        { name: "헤어드라이어", id:9,  icon: <GiHairStrands /> },
        { name: "다라미", id:10,  icon: <PiTelevisionFill /> },
        // { name: "건물 내 무료 주차", icon : <FaCarAlt />},
        // { name: "건물내 유료 주차", icon : <FaCcAmazonPay />},
        // { name: "수영장", icon : <PiSwimmingPoolBold />},
        // { name: "온수 욕조", icon : <FaBath />},
        // { name: "바베큐 그릴", icon : <MdOutdoorGrill />},
        // { name: "야외 식사 공간", icon : <MdOutlineTableRestaurant />},
        // { name: "당구대", icon : <RiBilliardsFill />},
        // { name: "실내 벽난로", icon : <MdFireplace />},
        // { name: "피아노", icon : <GiPianoKeys />},
        // { name: "운동기구", icon : <FaDumbbell />},
        // { name: "구급 상자", icon : <AiFillMedicineBox />},
        // { name: "소화기", icon : <FaFireExtinguisher />},
    ];


    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center w-full h-full"
            >
                loading...
            </div>)
    }


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">어떤 편의 시설을 제공하시나요?</h1>
            <h2 className="text-2xl font-bold">숙소에 있는 편의 시설을 모두 선택하세요.</h2>
            <SelectStructure initialData={hostData.amenities} items={items} onItemSelect={onItemSelect} isRoomType={false}/>
        </div>
    );
}