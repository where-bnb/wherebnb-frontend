// src/context/HostDataContext.js
'use client';

import React, {createContext, useContext, useEffect, useState} from 'react';
import {useRouter, usePathname } from "next/navigation";

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
        if (pathname.startsWith('hosting/listing/editor/:propertyId')) {
            const propertyId = pathname.split('/')[4]; // Assuming the propertyId is the 4th segment in the URL

            setIsLoading(true);

            // Fetch initial data from the backend server
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/hosting/listing/editor/${propertyId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setHostData(data); // Update the state with the fetched data
                })
                .catch(error => console.error('Error fetching initial data:', error))
                .finally(() => {
                    setIsLoading(false);
                });
        }
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
        console.log("=>(HostDataContext.jsx:115) 자선수입장");
        const formData = new FormData();
        hostData.photos.forEach(photo => {
            console.log("=>(HostDataContext.jsx:119) photo", photo);
            formData.append('photos', photo);
        });

        // 기타 데이터를 JSON 문자열로 변환하여 추가
        const otherData = { ...hostData, photos: undefined };
        formData.append('data', JSON.stringify(otherData));
        console.log("=>(HostDataContext.jsx:124) formData.get('photos')", formData.get('photos'));
        console.log("=>(HostDataContext.jsx:124) formData.get('photos')", formData.get('data'));
        console.log("=>(HostDataContext.jsx:126) formData.getAll('photos')", formData.getAll('photos'));
        console.log("=>(HostDataContext.jsx:127) otherData", otherData);

        try {
            console.log("보내는중?")
            // 서버에 POST 요청
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/become-a-host`, {
                method: 'POST',
                body: formData,
            });
            console.log("=>(HostDataContext.jsx:135) response", response);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("=>(HostDataContext.jsx:131) response data", responseData);
            // 서버 응답 처리
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEditSubmit = async () => {
        let endpoint = '';
        let method = 'PATCH';
        let body = JSON.stringify(hostData);

        if (pathname.includes('/hosting/listing/editor/')) {
            const propertyId = pathname.split('/')[4];

            // Check the URL and set the appropriate endpoint and body
            if (pathname.endsWith('/status')) {
                endpoint = `/hosting/listing/editor/${propertyId}/status`;
            } else if (pathname.endsWith('/title')) {
                endpoint = `/hosting/listing/editor/${propertyId}/propertyName`;
                body = JSON.stringify({ propertyName: hostData.propertyName });
                // propertyName : String
            } else if (pathname.endsWith('/property-type')) {
                endpoint = `/hosting/listing/editor/${propertyId}/propertyType`;
                // propertyType : String
                body = JSON.stringify({ propertyType: hostData.propertyType });
            } else if (pathname.endsWith('/floor-plan')) {
                endpoint = `/hosting/listing/editor/${propertyId}/propertyDetail`;
                body = JSON.stringify({
                    maxPeople: hostData.maxPeople,
                    bedroom: hostData.bedroom,
                    bed: hostData.bed,
                    bathroom: hostData.bathroom,
                    selfCheckIn: hostData.selfCheckIn,
                    petAvailable: hostData.petAvailable,
                    smokeAvailable: hostData.smokeAvailable,
                    checkInTime: hostData.checkInTime,
                    checkOutTime: hostData.checkOutTime,
                });
                // selfCheckIn : boolean
                // petAvailable : boolean
                // smokeAvailable : boolean
                // checkInTime : int       // 0~23
                // checkOutTime : int   // 0~23
                // maxPeople : int
                // bedroom : int
                // bed : int
                // bathroom : int
            } else if (pathname.endsWith('/checkinout')) {
                endpoint = `/hosting/listing/editor/${propertyId}/propertyDetail`;
                body = JSON.stringify({
                    maxPeople: hostData.maxPeople,
                    bedroom: hostData.bedroom,
                    bed: hostData.bed,
                    bathroom: hostData.bathroom,
                    selfCheckIn: hostData.selfCheckIn,
                    petAvailable: hostData.petAvailable,
                    smokeAvailable: hostData.smokeAvailable,
                    checkInTime: hostData.checkInTime,
                    checkOutTime: hostData.checkOutTime,
                });
            } else if (pathname.endsWith('/description')) {
                endpoint = `/hosting/listing/editor/${propertyId}/propertyExplanation`;
                body = JSON.stringify({ propertyExplanation: hostData.propertyExplanation });
            } else if (pathname.endsWith('/photos')) {
                endpoint = `/hosting/listing/editor/${propertyId}/photos`;
                method = 'POST'; // Assuming photo upload might use POST
                // For file upload, the body needs to be FormData
                const formData = new FormData();
                hostData.photos.forEach(photo => formData.append('photos', photo));
                body = formData;
            } else if (pathname.endsWith('/amenities')) {
                endpoint = `/hosting/listing/editor/${propertyId}/amenities`;
                body = JSON.stringify({ amenities: hostData.amenities });
            } else if (pathname.endsWith('/location')) {
                endpoint = `/hosting/listing/editor/${propertyId}/address`;
                body = JSON.stringify({
                    country: hostData.country,
                    state: hostData.state,
                    city: hostData.city,
                    street: hostData.street,
                    details: hostData.details,
                    zipcode: hostData.zipcode,
                    latitude: hostData.latitude,
                    longitude: hostData.longitude,
                });
            } else if (pathname.endsWith('/price')) {
                endpoint = `/hosting/listing/editor/${propertyId}/price`;
                body = JSON.stringify({ price: hostData.price });
                // price : int
            }

            console.log("=>(HostDataContext.jsx:262) body", body);
            // Send the request to the server
            try {
                const headers = method === 'POST' ? {} : { 'Content-Type': 'application/json' };
                const response = await fetch(endpoint, {
                    method,
                    headers,
                    body,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const responseData = await response.json();
                console.log("Response:", responseData);
                // Handle the server response here
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <HostDataContext.Provider value={{ hostData, isLoading, updateHostData, updateImages, handleSubmit, handleEditSubmit }}>
            {children}
        </HostDataContext.Provider>
    );
};
