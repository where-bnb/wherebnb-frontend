"use client";

import {useState} from "react";
import {useCallback} from "react";
import MenuItem from "@/components/navbar/MenuItem";
const HostMenu = () => {
    const [ isOpen, setIsOpen ] = useState (false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div
                    onClick={() => {
                    }}
                    className='
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    '
                >
                    투데이
                </div>
                <div
                    onClick={() => {
                    }}
                    className='
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    '
                >
                    달력
                </div>
                <div
                    onClick={() => {
                    }}
                    className='
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    '
                >
                    숙소
                </div>
                <div
                    onClick={() => {
                    }}
                    className='
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    '
                >
                    메시지
                </div>
                <div
                    onClick={toggleOpen}
                    className='
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    '
                >
                    메뉴
                </div>
            </div>
            {isOpen && (
                <div
                    className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-14
                text-sm
            '
                >
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem
                                onClick={() => {}}
                                label='예약'
                            />
                            <MenuItem
                                onClick={() => {}}
                                label='인사이트'
                            />
                            <MenuItem
                                onClick={() => {}}
                                label='새로운 숙소 등록하기'
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HostMenu;
