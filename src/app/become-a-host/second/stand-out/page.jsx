import Image from "next/image";

export default function StandOutPage() {
    return (
        <div className="flex flex-row justify-center items-center text-7xl w-full">
            <div className="pl-60 w-full h-auto flex flex-col items-start font-bold">
                <h4 className="text-4xl pb-10">2단계</h4>
                <h1 className="pb-1">숙소의 매력을</h1>
                <h1>돋보이게 하세요</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                <Image src="/images/sleep.png" alt="이미지" width="800" height="900"></Image>
            </div>
        </div>
    );
}
