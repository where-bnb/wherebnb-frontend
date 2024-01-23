'use client';

import Image from "next/image";
import {useHostData} from "@/context/HostDataContext";

export const CardComponent = () => {
    const { hostData } = useHostData();

    const { propertyName, price, startDate, lastDate, score, photos } = hostData;

    // 첫 번째 이미지의 'preview' 속성을 사용하거나 기본 이미지로 대체
    const imageUrl = photos && photos.length > 0 && photos[0].preview
        ? photos[0].preview
        : "/images/placeholder.jpg";

    return (
        <div className="px-20 rounded overflow-hidden shadow-lg w-1/2 mr-4 flex flex-col items-center border-2 border-b-gray-950 mb-3">
            <Image className="w-auto" src={imageUrl} width="500" height="500" alt="Property Image"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <h4 className="pr-20">{'숙소명 : '+ propertyName}</h4>
                    {score ? <h4>⭐ {score}</h4> : null}
                </div>
                {price ?
                    <p className="text-gray-700 text-base font-bold">
                        $ {price} / 1박
                    </p> : null}
                {startDate && lastDate ?
                    <p className="text-gray-700 text-base font-bold">
                        {startDate} ~ {lastDate}
                    </p> : null}
            </div>
        </div>
    );
};
