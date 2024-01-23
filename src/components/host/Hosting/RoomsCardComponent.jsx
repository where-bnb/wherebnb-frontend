import Image from "next/image";


export const RoomsCardComponent = ({
    image,
    title,
    score
                              }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg w-auto mr-4 flex flex flex-col items-center border-2 mb-3">
            <Image className="w-auto" src="/images/placeholder.jpg" width="500" height="500"
             alt="Sunset in the mountains"/>
            <div className="px-6">
                <div className="pt-10 font-bold text-xl mb-2 flex items-center justify-center">
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}