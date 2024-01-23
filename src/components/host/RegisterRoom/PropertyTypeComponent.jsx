'use client';

import {useEffect, useState} from "react";
import {useHostData} from "@/context/HostDataContext";

export default function PropertyTypeComponent() {


    const { isLoading } = useHostData()
    const propertyTypeList = [
        { id : 1, name : "주택" },
        { id : 2, name : "아파트" },
        { id : 3, name : "별채" },
        { id : 4, name : "호텔" },
    ];

    const { updateHostData, hostData } = useHostData ()

    const [ property, setProperty ] = useState ()

    useEffect(() => {
        setProperty(hostData.propertyType);
    }, []);


    useEffect (() => {
        console.log("=>(PropertyTypeComponent.jsx:25) property", property);
        updateHostData ({ propertyType : property });
    }, [ property ]);





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
            <h1 className="text-4xl font-bold">어떤 숙소를 제공하시나요?</h1>
            <h2 className="text-2xl font-bold">게스트가 어떤 공간을 사용할 수 있는지 알려주세요.</h2>
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center w-full font-bold text-2xl">
                    {propertyTypeList.map ((propertyType, key) => (
                        <button
                            key={key}
                            className={`${property === propertyType.id ? 'bg-emerald-600' : 'bg-white'} border-2 w-full border-black mb-10 py-10 hover:bg-emerald-300 rounded-xl`}
                            onClick={() => setProperty (propertyType.id)}>
                            {propertyType.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}