'use client';

import PriceComponent from "@/components/host/RegisterRoom/PriceComponent";
import {useHostData} from "@/context/HostDataContext";

export default function EditPricePage() {

    const { updateHostData, hostData, isLoading } = useHostData()

    const handlePrice = (price) => {
        updateHostData ({ price : price });
    }


    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center w-full h-full"
            >
                loading...
            </div>)
    }
    return (
        <>
            <PriceComponent priceNumber={hostData.price} onChange={handlePrice} />
        </>
    );
}