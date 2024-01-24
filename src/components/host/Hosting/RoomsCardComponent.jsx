'use client';
import Image from "next/image";
import {useHostData} from "@/context/HostDataContext";


export const RoomsCardComponent = () => {

    const { hostData } = useHostData();

    return (
        <div className="rounded overflow-hidden shadow-lg w-96 mr-4 flex flex-col items-center border-2 mb-3">
            <Image className="w-auto" src={`${hostData.photos[0]}`} width="500" height="500"
             alt="Sunset in the mountains"/>
            <div className="px-6">
                <div className="flex-col pt-10 font-bold text-xl mb-2 flex items-center justify-items-start">
                    <h4>숙소명 : {hostData.propertyName}</h4>
                    <h4>$ {hostData.price}</h4>
                    <h4>체크인 {hostData.checkInTime}</h4>
                    <h4>체크아웃 {hostData.checkOutTime}</h4>
                </div>
            </div>
        </div>
    )
}
