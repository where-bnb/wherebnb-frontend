'use client';




import {useState} from "react";

export const GuestCounter = ({guestNumber}) => {

    const [ guest, setGuest ] = useState (guestNumber)


    function handleDecrement(guest) {
        setGuest(Math.max(0, guest - 1))
    }

    function handleIncrement(guest) {
        setGuest(Math.max(0, guest + 1))
    }

    return (
        <>
            <h4>숙소에 편안하게 숙박할 수 있는 게스트 인원은 몇 명인가요?</h4>
            <div className="flex flex-row justify-center py-3 text-2xl font-bold items-center w-full">
                <div className="flex flex-row justify-around items-center w-56">
                    <button className="border-2 rounded-full p-4 px-7" onClick={() => handleDecrement (guest)}>-
                    </button>
                    <h4>{guest}</h4>
                    <button className="border-2 rounded-full p-4 px-7" onClick={() => handleIncrement (guest)}>+
                    </button>
                </div>
            </div>
        </>
    )
}