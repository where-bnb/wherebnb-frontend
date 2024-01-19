import {RoomsEditComponent} from "@/components/host/Hosting/RoomsEditComponent";

export default function EditLayout({children}) {
    return (
        <>
            <RoomsEditComponent/>
            <div className="pl-96 pr-24 min-h-fit">
                {children}
            </div>
        </>
    );
}