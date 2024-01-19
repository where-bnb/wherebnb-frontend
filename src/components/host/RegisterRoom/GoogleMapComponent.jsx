// "use client";
//
// import React, {useEffect, useState} from 'react';
// import {GoogleMap, Marker, LoadScript} from '@react-google-maps/api';
// import Input from "@/components/host/DesignSystem/Input";
//
//
// const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
//
// const containerStyle = {
//     width : '900px',
//     height : '700px'
// };
//
// const center = {
//     lat : -3.745,
//     lng : -38.523
// };
//
// function GoogleMapComponent() {
//     const [ location, setLocation ] = useState (center);
//     const [ savedLocation, setSavedLocation ] = useState (null);
//
//     const [ address, setAddress ] = useState (
//         {
//             "country" : '',
//             "state" : '',
//             "city" : '',
//             "street" : '',
//             "zipcode" : '',
//             "details" : '',
//             "latitude" : 0,
//             "longitude" : 0
//         }
//     );
//
//     useEffect (() => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition (
//                 (position) => {
//                     setLocation ({
//                         lat : position.coords.latitude,
//                         lng : position.coords.longitude
//                     });
//                 },
//                 () => {
//                     console.error ("Error")
//                 }
//             );
//         } else {
//             console.error ("Error");
//         }
//     }, []);
//
//
//     const processAddressComponents = (components, formattedAddress, geometry) => {
//         console.log("formattedAddress, ", formattedAddress);
//
//         const parts = formattedAddress.split(" ");
//
//         console.log("parts, ", parts)
//         const addressState = {
//             "country" : '',
//             "state" : '',
//             "city" : '',
//             "street" : '',
//             "zipcode" : '',
//             "details" : '',
//             "latitude" : 0,
//             "longitude" : 0
//         };
//
//         if (parts.length > 0) {
//             addressState.country = parts[0]; // 첫 번째 요소는 나라
//         }
//         if (parts.length > 1) {
//             // 두 번째 요소가 '도'로 끝나면 주(도)에 할당
//             if (parts[1].endsWith('도')) {
//                 addressState.state = parts[1];
//             } else {
//                 addressState.city = parts[1];
//             }
//         }
//         if (parts.length > 2) {
//             // 두 번째 요소가 '도'로 끝나면 세 번째 요소는 시에 할당
//             if (addressState.state) {
//                 addressState.city = parts[2];
//             } else {
//                 addressState.street = parts.slice(2).join(" ");
//             }
//         }
//         addressState.longitude = geometry.location.lng;
//         addressState.latitude = geometry.location.lat;
//
//         components.forEach(component => {
//             if (component.types.includes('postal_code')) {
//                 addressState.zipcode = component.long_name;
//             }
//         });
//
//         setAddress(addressState);
//         console.log(addressState);
//     };
//
//     const fetchAddress = async (lat, lng) => {
//         try {
//             const response = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`);
//             const data = await response.json ();
//             if (data.status === "OK") {
//                 console.log ("Address:", data.results[0]);
//                 const addressData = data.results[0].address_components;
//                 const formattedAddress = data.results[0].formatted_address;
//                 const geometry = data.results[0].geometry;
//                 processAddressComponents(addressData, formattedAddress, geometry);
//
//             } else {
//                 console.error ("Geocoding API error:", data.status);
//             }
//         } catch (error) {
//             console.error ("Geocoding API request failed:", error);
//         }
//     };
//
//     const handleMapClick = (event) => {
//         const newLocation = {
//             lat : event.latLng.lat (),
//             lng : event.latLng.lng ()
//         };
//         setLocation (newLocation);
//         fetchAddress (newLocation.lat, newLocation.lng);
//     };
//     const handleDragEnd = () => {
//         setSavedLocation (location);
//         // Save the location to local storage or send it to a server
//         console.log ("Location saved", location);
//     };
//
//     return (
//         <>
//             <div className="flex flex-col gap-10 w-2/5 pr-10">
//                 <Input value={address.state + address.state ? null : address.city} placeholder="도/특별,광역시."/>
//                 <Input value={address.city} placeholder="도시(해당하는 경우)"/>
//                 <Input value={address.street} placeholder="도로명 주소"/>
//                 <Input value={address.details} placeholder="아파트 층수/호수(해당하는 경우)"/>
//                 <Input value={address.zipcode} placeholder="우편번호"/>
//             </div>
//             <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
//                 <GoogleMap
//                     mapContainerStyle={containerStyle}
//                     center={location}
//                     zoom={10}
//                     onClick={handleMapClick}
//                     onDragEnd={handleDragEnd}
//                 >
//                     <Marker position={location}/>
//                 </GoogleMap>
//             </LoadScript>
//         </>
//     );
// }
//
// export default GoogleMapComponent;

'use client'

import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, Marker, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import axios from "axios";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

const containerStyle = {
    width: '900px',
    height: '700px'
};

const center = {
    lat: 36.745,
    lng: 127.523
};

function GoogleMapComponent() {
    const [location, setLocation] = useState(center);
    const searchBoxRef = useRef(null);
    const [searchBoxValue, setSearchBoxValue] = useState("");

    // Function to get address from lat and lng
    const getAddressFromLatLng = async (lat, lng) => {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
                params: {
                    latlng: `${lat},${lng}`,
                    key: GOOGLE_MAPS_API_KEY
                }
            });

            if (response.data.status === "OK") {
                return response.data.results[0].formatted_address;
            }
        } catch (error) {
            console.error("Error fetching address:", error);
        }
        return "";
    };

    const onSearchBoxLoad = useCallback((ref) => {
        searchBoxRef.current = ref;
    }, []);

    const onPlacesChanged = () => {
        const places = searchBoxRef.current.getPlaces();
        console.log("places", places);
        const place = places[0];

        if (place && place.geometry) {
            setLocation({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            });

            // Update address state based on selected place
            // Example: setAddress({ city: place.address_components[...], ... });
        }
    };


    const handleMapClick = async (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        await setLocation(newLocation);
        const address = await getAddressFromLatLng(newLocation.lat, newLocation.lng);
        setSearchBoxValue(address); // Update the search box value
    };

    return (
        <>
            <LoadScript
                googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                libraries={['places']}
            >
                <div className="flex flex-col gap-10 w-2/5 pr-10">
                    <StandaloneSearchBox
                        onLoad={onSearchBoxLoad}
                        onPlacesChanged={onPlacesChanged}
                    >
                        <input
                            type="text"
                            placeholder="Search places..."
                            className="input"
                            value={searchBoxValue}
                            onChange={(e) => setSearchBoxValue(e.target.value)}
                        />
                    </StandaloneSearchBox>
                    {/* Display address details from state */}
                </div>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={10}
                    onClick={handleMapClick}
                >
                    <Marker position={location}/>
                </GoogleMap>
            </LoadScript>
        </>
    );
}

export default GoogleMapComponent;

