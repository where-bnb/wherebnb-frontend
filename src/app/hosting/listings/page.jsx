// pages/hosting.jsx 또는 적절한 경로의 파일




import {RoomsCardComponent} from "@/components/host/Hosting/RoomsCardComponent";

export default function ListingPage() {
    // 페이지 내용
    return (
        <div className="">
            <h4 className="mb-3 ml-28 text-4xl font-bold">숙소 관리</h4>
            <div className="p-20 flex flex-wrap">
                <RoomsCardComponent/>
            </div>
        </div>
    );
}
