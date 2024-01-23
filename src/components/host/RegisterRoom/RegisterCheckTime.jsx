'use client';

import {useHostData} from "@/context/HostDataContext";
import {useEffect, useState} from "react";
import Input from "@/components/host/DesignSystem/Input";

export const RegisterCheckTimeComponent = () => {
    const { updateHostData, hostData ,isLoading } = useHostData ()

    const [ checkInTime, setCheckInTime ] = useState (hostData.checkInTime)
    const [ checkOutTime, setCheckOutTime ] = useState (hostData.checkOutTime)


    useEffect (() => {
        updateHostData ({ 'checkInTime' : checkInTime })
    }, [checkInTime]);

    useEffect (() => {
        updateHostData ({ 'checkOutTime' : checkOutTime })
    }, [checkOutTime]);


    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center w-full h-full"
            >
                loading...
            </div>)
    }
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">체크인, 체크아웃 시간은 어떻게 되나요?</h1>
                <h2 className="text-2xl font-bold">게스트가 언제부터 언제까지 숙박할 수 있는지 알려주세요.</h2>
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center w-full font-bold text-2xl mt-20">
                        <h4 className="text-xl font-bold">체크인을 입력하주세요</h4>
                        <Input className="border-2 w-full border-black mb-10 py-10 hover:bg-emerald-300 rounded-xl"
                               placeholder={'체크인 시간을 입력하세요'}
                               value={checkInTime}
                               onChange={(e) => setCheckInTime(parseInt(e.target.value) || 0)}
                               isCheckInOut={true}
                        />

                        <h4 className="mt-10 text-xl font-bold">체크아웃을 입력하주세요</h4>
                        <Input
                            className="border-2 w-full border-black mb-10 py-10 hover:bg-emerald-300 rounded-xl"
                            placeholder={'체크아웃 시간을 입력하세요'}
                            value={checkOutTime}
                            onChange={(e) => setCheckOutTime(parseInt(e.target.value) || 0)}
                            isCheckInOut={true}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}