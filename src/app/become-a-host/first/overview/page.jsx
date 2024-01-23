import Image from "next/image";

export default function Page() {
    return (
        <div className="flex gap-20 flex-row justify-center items-center text-7xl">
            <div className="w-full font-bold">
                <h1 className="mb-2">간단하게</h1>
                <h1 className="mb-2">에어비엔비</h1>
                <h1 className="mb-2">호스팅을</h1>
                <h1 className="mb-2">시작할 수 있습니다</h1>
            </div>
            <div className="w-full">
                <Image src="/images/hiking.png" width="800" height="900"></Image>
            </div>
        </div>
    );
}