'use client';
import {FaHouseChimneyWindow} from "react-icons/fa6";
import {MdCabin, MdCastle, MdHouseboat, MdOutlineApartment} from "react-icons/md";
import {GiBarn, GiCaveEntrance} from "react-icons/gi";
import {TbCamper} from "react-icons/tb";
import {FaBuilding, FaHotel, FaHouseUser} from "react-icons/fa";
import {LuContainer} from "react-icons/lu";
import {useEffect, useState} from "react";
import {useHostData} from "@/context/HostDataContext";

export const SelectStructure = ({ initialData, items, onItemSelect, isRoomType = true }) => {

    const { isLoading } = useHostData();

    const [selectedItem, setSelectedItem] = useState(initialData || []);


    useEffect (() => {
        onItemSelect (selectedItem);
    }, [selectedItem]);
    // 항목을 3개씩 나누어서 보여주기
    const chunkItems = (items, size) => {
        const result = [];
        for (let i = 0; i < items.length; i += size) {
            result.push(items.slice(i, i + size));
        }
        return result;
    }

    const chunkedItems = chunkItems(items, 3);

    const handleSelect = (item) => {
        if(isRoomType) {
            setSelectedItem (item.id);
        } else {
            if(selectedItem.includes(item.id)) {
                setSelectedItem (selectedItem.filter((element) => element !== item.id));
            } else {
                setSelectedItem (selectedItem.concat(item.id));
            }
        }
    };




    if (isLoading) {
        return <div>Loading...</div>; // 로딩 상태 표시
    }



    return (
        <div className="flex flex-col items-center">

            <div className="flex flex-col">
                {
                    chunkedItems.map((chunk, index) => (
                        <div key={index} className="flex flex-row w-100">
                            {isRoomType ?
                                    chunk.map ((item, index) => (
                                        <button key={index}
                                                className={`border-2 w-60 h-auto p-4 m-3 text-3xl flex justify-items-start flex-col items-start hover:bg-emerald-300 ${selectedItem == item.id ? 'bg-emerald-600' : 'bg-white'}`}
                                                onClick={() => handleSelect (item)}
                                        >
                                            {item.icon}
                                            <span className="h-5"></span>
                                            <h4 className="font-bold text-xl">{item.name}</h4>
                                        </button>
                                    ))
                                :
                                    chunk.map ((item, index) => (
                                        <button key={index}
                                                className={`border-2 w-60 h-auto p-4 m-3 text-3xl flex justify-items-start flex-col items-start hover:bg-emerald-300 ${selectedItem.some(selected => selected === item.id) ? 'bg-emerald-600' : 'bg-white'}`}
                                                onClick={() => handleSelect (item)}
                                        >
                                            {item.icon}
                                            <span className="h-5"></span>
                                            <h4 className="font-bold text-xl">{item.name}</h4>
                                        </button>
                                    ))
                                }
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
