import {RoomsEditComponent} from "@/components/host/Hosting/RoomsEditComponent";

export default function EditLayout({children}) {
    return (
        <>
            <RoomsEditComponent/>
            <div className="pl-96 min-h-screen">
                {children}
            </div>
        </>
    );
}