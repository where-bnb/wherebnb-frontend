'use client';

import TextCounterInput from "@/components/host/RegisterRoom/TextCounterInput";
import {useHostData} from "@/context/HostDataContext";

export default function EditDescriptionPage() {
    const { updateHostData, hostData, isLoading } = useHostData ();

    const handleDescription = (description) => {
        updateHostData ({ propertyExplanation : description });
    }

    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center w-full h-full"
            >
                loading...
            </div>)
    }

    return (
        <div className="flex justify-center items-center flex-col w-full">
            <TextCounterInput maxLength={500}
                              title="숙소 설명 작성하기"
                              description="숙소의 특징과 장점을 알려주세요"
                              onChange={handleDescription}
                              value={hostData.propertyExplanation}
            />
        </div>
    );
}