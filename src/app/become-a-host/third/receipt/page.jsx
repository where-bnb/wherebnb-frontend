'use client'

import {CardComponent} from "@/components/host/RegisterRoom/CardComponent";
import {useHostData} from "@/context/HostDataContext";

export default function ReceiptPage() {

    const { hostData, isLoading } = useHostData()

    if(isLoading) {
        return <div>로딩중...</div>
    }


    const location = hostData?.state + ' ' + hostData.city + ' ' + hostData.street + ' ' + hostData.details

    return (
        <div className="flex flex-col justify-center items-center">
            <h4 className="text-4xl font-bold">숙소 검토하기</h4>
            <h4>게스트에게 표시되는 정보는 다음과 같습니다 모든정보가 정확한지 확인하세요</h4>
            <div className="mt-10 flex flex-row gap-10 justify-center">
                <CardComponent/>
                <div className="flex flex-col text-bold text-4xl">
                    <h4 className="mt-10 font-bold">위치</h4>
                    <h4 className="mb-10 text-xl">{location}</h4>
                    <h4 className="font-bold">CheckIn</h4>
                    <h4 className="mb-10 text-xl">{hostData.checkInTime + '시 체크인 '}</h4>
                    <h4 className="font-bold">CheckOut</h4>
                    <h4 className="mb-10 text-xl">{hostData.checkOutTime + '시 체크아웃'}</h4>
                </div>
            </div>
        </div>
    )
}