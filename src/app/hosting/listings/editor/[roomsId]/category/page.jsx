'use client';

import {SelectStructure} from "@/components/host/RegisterRoom/SelectStructure";
import { useHostData } from "@/context/HostDataContext";
import categories from "/public/data/categories";
import Image from "next/image";

export default function EditCategoryPage() {
    const { updateHostData, hostData, isLoading} = useHostData();

    const handleStructureSelect = (item) => {
        updateHostData({ 'category' : item });
    };

    const categoryItems = categories.map((category, key) => {
        return {
            name : category.label,
            id : category.id,
            icon : <Image src={category.icon} key={key} alt={category.name} width={50} height={50}/>
        }
    });


    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center w-full h-full"
            >
                loading...
            </div>)
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">다음 중 숙소를 가장 잘 설명한 것은 무엇인가요?</h1>
            <SelectStructure initialData={hostData.category} items={categoryItems} onItemSelect={handleStructureSelect}/>
        </div>
    );
}