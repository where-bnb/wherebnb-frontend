import Image from "next/image";

export default function Page() {
    return (
        <div className="flex items-center">
            <div className="w-full font-bold">
                <h1 className="text-3xl mb-10">1단계</h1>
                <h1 className="text-6xl mb-10">숙소 정보를 알려주세요</h1>
                <h4>먼저 숙소 유형을 선택하고 게스트가 예약할 수 있는 숙소가
                    공간 전체인지 개인실 또는 다인실인지 알려주세요
                    그런 다음 위치와 수용 가능 인원을 알려주세요</h4>
            </div>
        </div>
    );
}