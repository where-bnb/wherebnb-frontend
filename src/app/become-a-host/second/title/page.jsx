'use client';
import TextCounterInput from "@/components/host/RegisterRoom/TextCounterInput";
import {useHostData} from "@/context/HostDataContext";

export default function TitlePage() {
    const { updateHostData, isLoading, hostData } = useHostData ();

    const handleTitle = (title) => {
        updateHostData ({ propertyName : title });
    }


    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div className="flex justify-center items-center flex-col">
            <TextCounterInput maxLength={32}
                              title="이제 숙소에 이름을 지어주세요"
                              description="숙소 이름은 짦을수록 효과적입니다 나중에 언제든지 변경할 수 있으니 너무 걱정하지 마세요"
                              onChange={handleTitle}
                              isTitle={true}
                              value={hostData.propertyName}
            />
        </div>
    );
}