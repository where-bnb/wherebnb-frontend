import TextCounterInput from "@/components/host/RegisterRoom/TextCounterInput";

export default function EditTitlePage() {
    return (
        <div className="flex justify-center items-center flex-col w-full mt-40">
            <TextCounterInput maxLength={32}
                              title="숙소 제목"
                              description=""
            />
        </div>
    );
}