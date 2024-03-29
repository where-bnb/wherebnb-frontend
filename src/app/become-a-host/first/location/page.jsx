'use client';

import SimpleMarkerMap from "@/components/host/RegisterRoom/GoogleMapComponent";
import GoogleMapComponent from "@/components/host/RegisterRoom/GoogleMapComponent";
import {useHostData} from "@/context/HostDataContext";

export default function LocationPage() {

    const { updateHostData, hostData } = useHostData();

    const center = {
        lat: (hostData.latitude == 0) ? 37.5665 : hostData.latitude,
        lng: (hostData.longitude == 0) ? 126.9780 : hostData.longitude
    };
    const handleLocationSelect = (item, location) => {
        updateHostData({
            ...item,
            ...location
        });
    };

    const initialData = {
        "country": hostData.country,
        "state": hostData.state,
        "city": hostData.city,
        "street": hostData.street,
        "zipcode": hostData.zipcode,
        "details": hostData.details,
    }

    const { isLoading } = useHostData()

    if (isLoading) {
        return <div>Loading...</div>; // 로딩 상태 표시
    }

    return (
        <div className="flex flex-row justify-between px-20">
            <GoogleMapComponent initialData={initialData} center={center} onLocationSelect={handleLocationSelect} />
        </div>
    );
}