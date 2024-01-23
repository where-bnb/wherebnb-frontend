// src/context/HostDataContext.js
'use client';

import React, {createContext, useContext, useEffect, useState} from 'react';
import {useRouter, usePathname} from "next/navigation";

const HostDataContext = createContext ();

export const useHostData = () => useContext (HostDataContext);

export const HostDataProvider = ({ children }) => {

    const router = useRouter ();
    const pathname = usePathname ();


    // 초기 hostData 구조 정의
    const initialHostData = {
        userId : null,
        propertyName : '',
        propertyType : 0,
        category : 0,
        propertyExplanation : '',
        country : '',
        state : '',
        city : '',
        street : '',
        details : '',
        zipcode : '',
        latitude : '',
        longitude : '',
        maxPeople : 1,
        selfCheckIn : false,
        petAvailable : false,
        smokeAvailable : false,
        checkInTime : 0,       // 0~23
        checkOutTime : 0,   // 0~23
        bedroom : 0,
        bed : 0,
        bathroom : 0,
        price : 0,
        amenities : [],
        photos : []  // 이미지 파일들을 저장할 배열
    };

    const loadInitialData = () => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem ('hostData');
            console.log ("=>(HostDataContext.jsx:47) JSON.parse(savedData)", JSON.parse (savedData));
            return savedData ? JSON.parse (savedData) : initialHostData;
        }
        return initialHostData;
    };

    const [hostData, setHostData] = useState(loadInitialData);
    const [ saveDataTimeout, setSaveDataTimeout ] = useState (null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem('hostData');
            if (savedData) {
                const loadedData = JSON.parse(savedData);
                setHostData(loadedData);
            }
        }
        setIsLoading(false);
    }, []);


    useEffect (() => {
        // 특정 URL에 접속했는지 확인
        if (pathname === '/become-a-host/first/overview') {
            setHostData (initialHostData); // 초기 데이터로 설정
            console.log ("=>(HostDataContext.jsx:60) HostData", hostData);
            localStorage.removeItem ('hostData'); // 로컬 스토리지 데이터 삭제
        }
    }, [ pathname ]);


    useEffect (() => {
        if (saveDataTimeout) {
            clearTimeout (saveDataTimeout);
        }

        // 상태 변경 후 지정된 시간(예: 500ms)이 지난 후에만 로컬 스토리지에 저장
        const timeout = setTimeout (() => {
            localStorage.setItem ('hostData', JSON.stringify (hostData));
        }, 500);

        setSaveDataTimeout (timeout);
        console.log ("=>(HostDataContext.jsx:44) hostData", hostData);

        return () => {
            // 컴포넌트가 언마운트되면 타이머 제거
            clearTimeout (timeout);
        };
    }, [ hostData ]);

    const updateHostData = (newdata) => {
        setHostData (prevData => ({ ...prevData, ...newdata }));
    };

    const updateImages = (images) => {
        setHostData (prevData => ({ ...prevData, photos : images }));
    }

    const handleSubmit = async () => {
        const formData = new FormData ();
        hostData.photos.forEach (photo => {
            formData.append ('photos', photo); // 이미지 추가
        });

        // 기타 데이터를 JSON 문자열로 변환하여 추가
        const otherData = { ...hostData, photos : undefined };
        formData.append ('data', JSON.stringify (otherData));

        try {
            // 서버에 POST 요청
            const response = await fetch ('/become-a-host', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                },
                body : formData,
            });
            console.log("=>(HostDataContext.jsx:131) response", response);
            // 서버 응답 처리
        } catch (error) {
            console.error ('Error:', error);
        }
    };

    return (
        <HostDataContext.Provider value={{ hostData, isLoading, updateHostData, updateImages, handleSubmit }}>
            {children}
        </HostDataContext.Provider>
    );
};
