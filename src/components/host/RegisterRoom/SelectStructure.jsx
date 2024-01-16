'use client';
import {FaHouseChimneyWindow} from "react-icons/fa6";
import {MdCabin, MdCastle, MdHouseboat, MdOutlineApartment} from "react-icons/md";
import {GiBarn, GiCaveEntrance} from "react-icons/gi";
import {TbCamper} from "react-icons/tb";
import {FaBuilding, FaHotel, FaHouseUser} from "react-icons/fa";
import {LuContainer} from "react-icons/lu";
import {useState} from "react";

export const SelectStructure = ({ items }) => {

    // 항목을 3개씩 나누어서 보여주기
    const chunkItems = (items, size) => {
        const result = [];
        for (let i = 0; i < items.length; i += size) {
            result.push(items.slice(i, i + size));
        }
        return result;
    }

    const chunkedItems = chunkItems(items, 3);

    return (
        <div className="flex flex-col items-center">

            <div className="flex flex-col">
                {
                    chunkedItems.map((chunk, index) => (
                        <div key={index} className="flex flex-row w-100">
                            {
                                chunk.map((item, index) => (
                                    <button key={index}
                                            className="
                                            hover:bg-cyan-300 border-2 w-60 h-auto
                                            p-4 m-3 text-3xl flex justify-items-start
                                            flex-col items-start click:bg-cyan-500"
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