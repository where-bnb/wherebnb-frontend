'use client';

import Image from "next/image";
import {useHostData} from "@/context/HostDataContext";

export const CardComponent = () => {
    const { hostData }  = useHostData();


    // 첫 번째 이미지의 'preview' 속성을 사용하거나 기본 이미지로 대체
    const imageUrl = hostData.photos !== [] && hostData.photos.length > 0 && hostData.photos[0].preview
        ? hostData.photos[0].preview
        : "/images/placeholder.jpg";

    return (
        <div className="px-20 rounded overflow-hidden shadow-lg xl:w-3/5 md:w-full mr-4 flex flex-col items-center border-2 border-b-gray-950 mb-3">
            <Image className="w-auto" src={imageUrl} width="200" height="200" alt="Property Image"/>
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2">{'숙소명 : '+ hostData.propertyName}</h4>
                {hostData.price ?
                    <p className="text-gray-700 text-base font-bold">
                        $ {hostData.price} / 1박
                    </p> : null}
                {hostData.checkInTime && hostData.checkOutTime ?
                    <>
                        <p className="text-gray-700 text-base font-bold">
                            체크인 {hostData.checkInTime}
                        </p>
                        <p className="text-gray-700 text-base font-bold">
                            체크아웃 {hostData.checkOutTime}
                        </p>
                    </>
                    : null}
            </div>
        </div>
    );
};
