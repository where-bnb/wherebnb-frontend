'use client';

import Image from "next/image";
import {useHostData} from "@/context/HostDataContext";

export const ListingCardComponent = (data) => {


    // 첫 번째 이미지의 'preview' 속성을 사용하거나 기본 이미지로 대체
    const imageUrl = data?.photos !== [] && data?.photos[0]?.preview
        ? data?.photos[0]?.preview
        : "/images/placeholder.jpg";

    return (
        <div className="px-20 rounded overflow-hidden shadow-lg w-1/3 mr-4 flex flex-col items-center border-2 border-b-gray-950 mb-3">
            <Image className="w-auto" src={imageUrl} width="200" height="200" alt="Property Image"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <h4 className="pr-20">{'숙소명 : '+ data.propertyName}</h4>
                </div>
                {data.price ?
                    <p className="text-gray-700 text-base font-bold">
                        $ {data.price} / 1박
                    </p> : null}
                {data.checkInTime && data.checkOutTime ?
                    <p className="text-gray-700 text-base font-bold">
                        {data.checkInTime} ~ {data.checkOutTime}
                    </p> : null}
            </div>
        </div>
    );
};
