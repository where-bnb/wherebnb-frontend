import {HostDataProvider} from "@/context/HostDataContext";

export default function EditorLayout({ children }) {

    return(
        <>
            <HostDataProvider>
                {children}
            </HostDataProvider>
        </>
    );

}