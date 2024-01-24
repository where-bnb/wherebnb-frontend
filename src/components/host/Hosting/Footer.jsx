// app/footer/page.jsx.jsx.tsx
"use client";


import Button from "@/components/ui/Button";
import {useHostData} from "@/context/HostDataContext"; // 임포트 경로는 실제 경로에 맞게 수정해주세요.

const Footer = () => {

    const { handleEditSubmit } = useHostData()



    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-gray-200 px-6 py-4 flex justify-between items-center">
            {/* 여기에 추가적인 컨텐츠나 로고를 넣을 수 있습니다. */}
            <div className="flex justify-end">
                <Button
                    label="제출"
                    onClick={handleEditSubmit}
                />
            </div>
        </footer>
    );
};

export default Footer;
