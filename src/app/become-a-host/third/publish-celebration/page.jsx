import Image from "next/image";

export default function CelebrationPage() {
    return (
        <div className="flex gap-20 flex-row justify-center items-center text-7xl px-20">
            <div className="w-full">
                <Image src="/images/HostRegisterImage.png" alt="image" width="500" height="700"></Image>
            </div>
            <div className="font-bold w-full h-full flex flex-col justify-center items-center text-4xl">
                <h1 className="mb-10">축하합니다!</h1>
                <h1 className="text-sm">에어비엔비 호스트가 되신것을 진심으로 환영합니다. 숙소 호스팅을 통해 게스트에게 놀라운 경험을 선하는 데 동참해주셔서 감사합니다.</h1>
            </div>
        </div>
    );
}