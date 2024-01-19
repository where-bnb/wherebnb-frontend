import SimpleMarkerMap from "@/components/host/RegisterRoom/GoogleMapComponent";
import GoogleMapComponent from "@/components/host/RegisterRoom/GoogleMapComponent";
import Input from "@/components/host/DesignSystem/Input";

export default function LocationPage() {
    return (
        <div className="flex flex-row justify-between px-20">
            <GoogleMapComponent />
        </div>
    );
}