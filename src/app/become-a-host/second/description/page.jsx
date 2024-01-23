'use client'

import TextCounterInput from "@/components/host/RegisterRoom/TextCounterInput";
import {useHostData} from "@/context/HostDataContext";

export default function DescriptionPage() {
    const { updateHostData, hostData, isLoading } = useHostData ();

    const handleDescription = (description) => {
        updateHostData ({ propertyExplanation : description });
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        <div className="flex justify-center items-center flex-col w-1/2">
            <TextCounterInput maxLength={500}
                              title="숙소 설명 작성하기"
                              description="숙소의 특징과 장점을 알려주세요"
                              onChange={handleDescription}
                              value={hostData.propertyExplanation}
            />
        </div>
    );
}