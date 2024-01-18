// pages/hosting.jsx 또는 적절한 경로의 파일

import {CardComponent} from "@/components/host/RegisterRoom/CardComponent";

export default function inbox() {
    // 페이지 내용
    return (
        <div className="">
            <h4 className="mb-3 ml-10 text-4xl font-bold">예약 내역</h4>
            <div className="flex flex-wrap">
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
                <CardComponent title={"그냥집"} startDate={"2023.12.12"} score={"5.6"} lastDate={"2023.12.14"} price={5000} />
            </div>
        </div>
    );
}
