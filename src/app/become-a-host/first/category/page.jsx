'use client';

import {SelectStructure} from "@/components/host/RegisterRoom/SelectStructure";
import { useHostData } from "@/context/HostDataContext";
import Image from "next/image";
import {categories} from "@/components/searchPage/categories/categoryList";

export default function CategoryPage() {
    const { updateHostData, hostData, isLoading} = useHostData();

    const handleStructureSelect = (item) => {
        updateHostData({ 'category' : item });
    };


    const categoryItems = categories.map((category) => {
        return {
            name : category.label,
            id : category.id,
            icon : <Image src={category.icon} alt={category.name} width={50} height={50}/>
        }
    });


    if (isLoading) {
        return <div>Loading...</div>; // 로딩 상태 표시
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">다음 중 숙소를 가장 잘 설명한 것은 무엇인가요?</h1>
            <SelectStructure initialData={hostData.category} items={categoryItems} onItemSelect={handleStructureSelect}/>
        </div>
    );
}