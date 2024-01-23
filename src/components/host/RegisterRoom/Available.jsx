'use client';

import {useHostData} from "@/context/HostDataContext";
import {useEffect, useState} from "react";
import {LuCigarette} from "react-icons/lu";
import {FaUserCheck} from "react-icons/fa";
import {MdOutlinePets} from "react-icons/md";

export const Available = () => {
    const { updateHostData } = useHostData ()
    const { hostData } = useHostData ()


    const [ petAvailable, setPetAvailable ] = useState (hostData.petAvailable);
    const [ smokeAvailable, setSmokeAvailable ] = useState (hostData.smokeAvailable);
    const [ selfCheckIn, setSelfCheckIn ] = useState (hostData.selfCheckIn);

    useEffect (() => {
        updateHostData ({ 'petAvailable' : petAvailable })
    }, [petAvailable]);
    useEffect (() => {
        updateHostData ({ 'smokeAvailable' : smokeAvailable })
    }, [smokeAvailable]);
    useEffect (() => {
        updateHostData ({ 'selfCheckIn' : selfCheckIn })
    }, [selfCheckIn]);
    // 항목을 3개씩 나누어서 보여주기



    return (
        <div className="flex flex-row mt-10">
            <button
                    className={`border-2 w-60 h-auto p-4 m-3 text-3xl flex justify-items-start flex-col items-start hover:bg-emerald-300 ${smokeAvailable ? 'bg-emerald-600' : 'bg-white'}`}
                    onClick={() => setSmokeAvailable(!smokeAvailable)}
            >
                <LuCigarette />
                <span className="h-5"></span>
                <h4 className="font-bold text-xl">흡연가능</h4>
            </button>
            <button
                    className={`border-2 w-60 h-auto p-4 m-3 text-3xl flex justify-items-start flex-col items-start hover:bg-emerald-300 ${selfCheckIn ? 'bg-emerald-600' : 'bg-white'}`}
                    onClick={() => setSelfCheckIn(!selfCheckIn)}
            >
                <FaUserCheck />
                <span className="h-5"></span>
                <h4 className="font-bold text-xl">셀프체크인</h4>
            </button>
            <button
                    className={`border-2 w-60 h-auto p-4 m-3 text-3xl flex justify-items-start flex-col items-start hover:bg-emerald-300 ${petAvailable ? 'bg-emerald-600' : 'bg-white'}`}
                    onClick={() => setPetAvailable(!petAvailable)}
            >
                <MdOutlinePets />
                <span className="h-5"></span>
                <h4 className="font-bold text-xl">애완동물 동반</h4>
            </button>
        </div>
    )
}