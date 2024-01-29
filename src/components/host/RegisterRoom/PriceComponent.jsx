'use client';

import {useState} from "react";

export default function PriceComponent({priceNumber, onChange}) {

    const [price, setPrice] = useState(priceNumber);

    const handlePriceChange = (event) => {
        setPrice(parseInt(event.target.value));
        onChange(parseInt(event.target.value));
    }

    return (
        <div className="flex flex-col items-center text-4xl">
            <h1 className="text-bold mb-10">이제 요금을 설정하세요</h1>
            <h1 className="mb-10 text">언제든지 변경하실 수 있습니다</h1>
            <input
                type="number"
                className="border-2 rounded-xl border-black w-4/6 px-32 h-20 text-4xl text-center"
                value={price}
                onChange={handlePriceChange}
            />
        </div>
    );
}