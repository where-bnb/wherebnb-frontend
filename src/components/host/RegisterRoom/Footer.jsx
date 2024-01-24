// app/footer/page.jsx.jsx.tsx
"use client";


import Button from "@/components/ui/Button";
import {usePathname, useRouter} from "next/navigation";
import {useHostData} from "@/context/HostDataContext"; // 임포트 경로는 실제 경로에 맞게 수정해주세요.

const Footer = () => {

    const { handleSubmit } = useHostData()
    const router = useRouter();
    const pathname = usePathname();
    const handleButtonClick = async () => {
        console.log("Current Pathname: ", pathname);
        switch (pathname) {
            case "/become-a-host/first/overview":
                router.push("/become-a-host/first/about-your-place");
                break;
            case "/become-a-host/first/about-your-place":
                router.push("/become-a-host/first/property-type");
                break;
            case "/become-a-host/first/property-type":
                router.push("/become-a-host/first/category");
                break;
            case "/become-a-host/first/category":
                router.push("/become-a-host/first/location");
                break;
            case "/become-a-host/first/location":
                router.push("/become-a-host/first/floor-plan");
                break;
            case "/become-a-host/first/floor-plan":
                router.push("/become-a-host/second/stand-out");
                break;
            case "/become-a-host/second/stand-out":
                router.push("/become-a-host/second/amenities");
                break;
            case "/become-a-host/second/amenities":
                router.push("/become-a-host/second/title");
                break;
            case "/become-a-host/second/title":
                router.push("/become-a-host/second/description");
                break;
            case "/become-a-host/second/description":
                router.push("/become-a-host/third/finish-setup");
                break;
            case "/become-a-host/third/finish-setup":
                router.push("/become-a-host/third/price");
                break;
            case "/become-a-host/third/price":
                router.push("/become-a-host/third/checkinout");
                break;
            case "/become-a-host/third/checkinout":
                router.push("/become-a-host/third/photos");
                break;
            case "/become-a-host/third/photos":
                router.push("/become-a-host/third/receipt");
                break;
            case "/become-a-host/third/receipt":
                await handleSubmit();
                break;
            case "/become-a-host/third/publish-celebration":
                handleSubmit();
                break;
            // 기타 케이스 추가 가능
            default:
                // 기본적으로 아무것도 하지 않거나 기본 경로로 리디렉션
                break;
        }
    };


    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-200 px-6 py-4 flex justify-between items-center">
            {/* 여기에 추가적인 컨텐츠나 로고를 넣을 수 있습니다. */}
            <div></div>

            <div className="flex justify-end">
                <Button
                    label="다음"
                    onClick={handleButtonClick}
                />
            </div>
        </footer>
    );
};

export default Footer;
