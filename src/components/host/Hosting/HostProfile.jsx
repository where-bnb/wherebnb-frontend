"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import Avatar from "../../ui/Avatar";
import {signIn} from "next-auth/react";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import MenuItem from "@/components/navbar/MenuItem";

const HostProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className='relative'>
            <div className='flex flex-row items-center'>
                <div
                    onClick={toggleOpen}
                    className='

                md:py-[7px]
                md:px-[70px]
                border-[1px]
                border-neutral-300
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
            '
                >
                    <AiOutlineMenu size={25} />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
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
                        <div className=''>
                            <>
                                <MenuItem
                                    onClick={() => {}}
                                    label='게스트 모드 전환'
                                />
                                <MenuItem
                                    onClick={() => {}}
                                    label='Log out'
                                />
                            </>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default HostProfile;
