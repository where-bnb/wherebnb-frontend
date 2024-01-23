'use client';

import PriceComponent from "@/components/host/RegisterRoom/PriceComponent";
import {useHostData} from "@/context/HostDataContext";

export default function PricePage() {
    const { updateHostData, hostData, isLoading } = useHostData()

    const handlePrice = (price) => {
        updateHostData ({ price : price });
    }


    if (isLoading) {
        return <div>로딩중...</div>
    }
    return (
        <>
            <PriceComponent priceNumber={hostData.price} onChange={handlePrice} />
        </>
    );
}
