import Image from "next/image";


export const CardComponent = ({
    image,
    title,
    price,
    startDate,
    lastDate,
    isReservation,
    user,
    score
                              }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg w-72 mr-4 flex flex-col items-center border-2 mb-3">
            <Image className="w-auto" src="/images/placeholder.jpg" width="500" height="500"
             alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <h4 className="pr-20">{title}</h4>
                    {score ? <h4>⭐ {score}</h4> : null}
                </div>
                {price ?
                    <p className="text-gray-700 text-base font-bold">
                        ${price} / 1박
                    </p> : null}
                {startDate&lastDate ?
                    <p className="text-gray-700 text-base font-bold">
                        {startDate} ~ {lastDate}
                    </p> : null}
            </div>
        </div>
    )
}