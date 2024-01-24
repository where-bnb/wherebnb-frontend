// pages/hosting.jsx 또는 적절한 경로의 파일
'use client';
import {CardComponent} from "@/components/host/RegisterRoom/CardComponent";
import {ListingCardComponent} from "@/components/host/Hosting/ListingCardComponent";

export default function inbox() {
    // 페이지 내용
    return (
        <div className="">
            <h4 className="mb-3 ml-10 text-4xl font-bold">예약 내역</h4>
            <div className="flex flex-wrap">
                <CardComponent />
            </div>
        </div>
    );
}
