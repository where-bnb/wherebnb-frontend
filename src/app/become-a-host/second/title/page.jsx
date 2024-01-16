import TextCounterInput from "@/components/host/RegisterRoom/TextCounterInput";

export default function TitlePage() {
  return (
    <div className="flex justify-center items-center flex-col">
        <TextCounterInput maxLength={32}
            title="이제 숙소에 이름을 지어주세요"
            description="숙소 이름은 짦을수록 효과적입니다 나중에 언제든지 변경할 수 있으니 너무 걱정하지 마세요"
        />
    </div>
  );
}