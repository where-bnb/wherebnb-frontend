'use client';

import {GuestCounter} from "@/components/host/Hosting/GuestCounter";
import {useHostData} from "@/context/HostDataContext";
import {FloorPlan} from "@/components/host/RegisterRoom/FloorPlan";

export default function EditFloorPlanPage() {

    const { updateHostData, hostData, isLoading } = useHostData ()

    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center w-full h-full"
            >
                loading...
            </div>)
    }

    const floorPlan = {

        maxPeople : hostData.maxPeople,
        bedroom : hostData.bedroom,
        bed : hostData.bed,
        bathroom : hostData.bathroom,

    }
    const handleFloorPlan = (floorPlan) => {
        updateHostData ({
            ...floorPlan
        })
    }


    return (
        <div>
            <FloorPlan initialData={floorPlan} onFloorPlan={handleFloorPlan}/>
        </div>
    );
}