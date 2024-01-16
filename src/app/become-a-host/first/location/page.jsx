import SimpleMarkerMap from "@/components/host/RegisterRoom/GoogleMapComponent";
import GoogleMapComponent from "@/components/host/RegisterRoom/GoogleMapComponent";
import Input from "@/components/host/DesignSystem/Input";

export default function LocationPage() {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <Input placeholder="도/특별,광역시." />
                <Input placeholder="도시(해당하는 경우)" />
                <Input placeholder="군/구(해당하는 경우)" />
                <Input placeholder="도로명 주소" />
                <Input placeholder="아파트 층수/호수(해당하는 경우)" />
                <Input placeholder="우편번호" />
            </div>
            <GoogleMapComponent />
        </div>
    );
}