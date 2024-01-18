'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";


export const RoomsEditComponent = () => {

    const Router = useRouter();

    const urls = [
        '/hosting/listings/editor/1/photos',
        '/hosting/listings/editor/1/title',
        '/hosting/listings/editor/1/description',
        '/hosting/listings/editor/1/roomtype',
        '/hosting/listings/editor/1/guests',
        '/hosting/listings/editor/1/price',
        '/hosting/listings/editor/1/amenities',
        '/hosting/listings/editor/1/location',
    ];

    // 버튼 레이블 배열
    const labels = ["사진", "제목", "설명", "숙소유형", "게스트 수", "가격", "편의시설", "위치"];

    return (
        <>
            <aside className="fixed top-20 left-0 flex h-screen bg-gray-200 border-r-2">
                <div className="px-4 w-80 pt-5 bg-white flex flex-col items-center overflow-y-auto scrollbarHide">
                    <h2 className="text-3xl font-bold">숙소 수정 페이지</h2>
                    <nav className="pt-10 flex flex-col text-2xl font-bold w-full items-start">
                        {urls.map ((url, index) => (
                            <button
                                key={url}
                                onClick={() => Router.push (url)}
                                className="p-8 mb-2 w-full text-gray-700 hover:bg-gray-100"
                            >
                                {labels[index]}
                            </button>
                        ))}
                    </nav>
                        <button className="text-red-500 p-8 mb-2 w-full rounded-3xl hover:bg-red-300">삭제</button>
                </div>
            </aside>
        </>
    )
}