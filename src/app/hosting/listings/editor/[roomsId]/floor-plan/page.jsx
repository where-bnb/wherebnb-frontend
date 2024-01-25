'use client';

import {useHostData} from "@/context/HostDataContext";
import {FloorPlan} from "@/components/host/RegisterRoom/FloorPlan";
import {Available} from "@/components/host/RegisterRoom/Available";

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
        <div className="flex flex-col items-center px-80">
            <FloorPlan initialData={floorPlan} onFloorPlan={handleFloorPlan}/>
            <Available />
        </div>
    );
}