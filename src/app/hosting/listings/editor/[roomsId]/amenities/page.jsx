import {
    FaBath,
    FaBriefcase,
    FaCarAlt,
    FaCcAmazonPay,
    FaDumbbell, FaFireExtinguisher,
    FaHouseUser,
    FaSnowflake,
    FaWifi
} from "react-icons/fa";
import {PiSwimmingPoolBold, PiTelevisionFill} from "react-icons/pi";
import {TbToolsKitchen2} from "react-icons/tb";
import {GiFireplace, GiPianoKeys, GiWashingMachine} from "react-icons/gi";
import {MdFireplace, MdOutdoorGrill, MdOutlineTableRestaurant} from "react-icons/md";
import {RiBilliardsFill} from "react-icons/ri";
import React from "react";
import {AiFillMedicineBox} from "react-icons/ai";
import {SelectStructure} from "@/components/host/RegisterRoom/SelectStructure";

export default function AmenitiesEditPage() {

    const items = [
        { name: "무선인터넷", icon: <FaWifi /> },
        { name: "TV", icon: <PiTelevisionFill /> },
        { name: "주방", icon : <TbToolsKitchen2 />},
        { name: "세탁기", icon : <GiWashingMachine />},
        { name: "건물 내 무료 주차", icon : <FaCarAlt />},
        { name: "건물내 유료 주차", icon : <FaCcAmazonPay />},
        { name: "에어컨", icon : <FaSnowflake />},
        { name: "업무 전용 공간", icon : <FaBriefcase />},
        { name: "수영장", icon : <PiSwimmingPoolBold />},
        { name: "온수 욕조", icon : <FaBath />},
        { name: "바베큐 그릴", icon : <MdOutdoorGrill />},
        { name: "야외 식사 공간", icon : <MdOutlineTableRestaurant />},
        { name: "화로", icon : <GiFireplace />},
        { name: "당구대", icon : <RiBilliardsFill />},
        { name: "실내 벽난로", icon : <MdFireplace />},
        { name: "피아노", icon : <GiPianoKeys />},
        { name: "운동기구", icon : <FaDumbbell />},
        { name: "구급 상자", icon : <AiFillMedicineBox />},
        { name: "소화기", icon : <FaFireExtinguisher />},
    ];


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">어떤 편의 시설을 제공하시나요?</h1>
            <h2 className="text-2xl font-bold">숙소에 있는 편의 시설을 모두 선택하세요.</h2>
            <SelectStructure items={items}/>
        </div>
    );
}