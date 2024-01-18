import {GuestCounter} from "@/components/host/Hosting/GuestCounter";

export default function EditGuestsPage() {
    return (
        <div className="flex flex-col justify-center items-center pt-50">
            <GuestCounter guestNumber={0}/>
        </div>
    );
}