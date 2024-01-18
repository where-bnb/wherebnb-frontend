import TextCounterInput from "@/components/host/RegisterRoom/TextCounterInput";

export default function EditDescriptionPage() {
    return (
        <div className="flex justify-center items-center flex-col w-full mt-40">
            <TextCounterInput maxLength={500}
                              title="숙소 설명 작성하기"
                              description="숙소의 특징과 장점을 알려주세요"
            />
        </div>
    );
}