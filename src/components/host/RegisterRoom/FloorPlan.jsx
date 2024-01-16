'use client';
import {useState} from "react";

export const FloorPlan = () => {
    const [floorPlan, setFloorPlan] = useState({
        guestCount: 1,
        bedroomCount: 0,
        bedCount: 0,
        bathroomCount: 0,
    });

    const handleIncrement = (field) => {
        setFloorPlan({
            ...floorPlan,
            [field]: floorPlan[field] + 1
        });
    };

    const handleDecrement = (field) => {
        setFloorPlan({
            ...floorPlan,
            [field]: Math.max(0, floorPlan[field] - 1)
        });
    };

    const fields = [
        { name: 'guestCount', label: '게스트' },
        { name: 'bedroomCount', label: '침실' },
        { name: 'bedCount', label: '침대' },
        { name: 'bathroomCount', label: '욕실' }
    ];


    return (
        <div
            className="flex flex-col justify-center items-center w-full h-full"
        >
            <h1 className="text-5xl font-bold mb-10">숙소 기본 정보를 알려주세요</h1>
            <h1 className="text-2xl">침대 유형과 같은 세부사항은 나중에 추가하실 수 있습니다</h1>
            {fields.map((field) => (
                <div className="flex flex-row justify-between py-3 text-2xl font-bold items-center w-full" key={field.name}>
                    <h4>{field.label}</h4>
                    <div className="flex flex-row justify-around items-center w-56">
                        <button className="border-2 rounded-full p-4 px-7" onClick={() => handleDecrement(field.name)}>-</button>
                        <h4>{floorPlan[field.name]}</h4>
                        <button className="border-2 rounded-full p-4 px-7" onClick={() => handleIncrement(field.name)}>+</button>
                    </div>
                </div>
            ))}


        </div>
    )
}