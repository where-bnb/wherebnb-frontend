'use client';

import {FloorPlan} from "@/components/host/RegisterRoom/FloorPlan";
import {useHostData} from "@/context/HostDataContext";

export default function FloorPlanPage() {
    const { updateHostData, hostData, isLoading } = useHostData ()

    if(isLoading){
        return <div>Loading...</div>
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