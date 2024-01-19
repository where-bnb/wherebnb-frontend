import Image from "next/image";

export default function CelebrationPage() {
    return (
        <div className="flex gap-20 flex-row justify-center items-center text-7xl">
            <div className="w-full">
                <h1>1단계</h1>
                <h1>간단하게</h1>
                <h1>에어비엔비</h1>
                <h1>호스팅을</h1>
                <h1>시작할 수 있습니다</h1>
            </div>
            <div className="w-full">
                그림이요
                <Image></Image>
            </div>
        </div>
    );
}