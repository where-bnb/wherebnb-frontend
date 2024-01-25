import Image from "next/image";

export default function ThirdPage() {
    return (
        <div className="flex flex-row justify-center items-center text-7xl w-full">
            <div className="pl-52 mr-10 w-full flex flex-col items-start">
                <h4 className="text-4xl pb-4">3단계</h4>
                <h1 className="pb-1 text-4xl font-bold">등록을 완료하세요</h1>
                <h1 className="pb-1 text-xl">마지막으로 예약 설정을 선택하고 요금을 설정한 후 숙소 등록을 완료할 차례입니다</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                <Image src="/images/guesthouse.png" alt="이미지" width="700" height="700"></Image>
            </div>
        </div>
    );
}