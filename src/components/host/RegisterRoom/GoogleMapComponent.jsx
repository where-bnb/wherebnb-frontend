"use client";

import React, {useEffect, useState} from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

const containerStyle = {
    width: '900px',
    height: '700px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function GoogleMapComponent() {
    const [location, setLocation] = useState(center);
    const [savedLocation, setSavedLocation] = useState(null);

    useEffect (() => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
() => {
                console.error("Error")
            }
            );
        } else {
            console.error("Error");
        }
    }, []);

    const fetchAddress = async (lat, lng) => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`);
            const data = await response.json();
            if (data.status === "OK") {
                console.log("Address:", data.results[0]);
                const addressData = data.results[0].address_components;

            } else {
                console.error("Geocoding API error:", data.status);
            }
        } catch (error) {
            console.error("Geocoding API request failed:", error);
        }
    };

    const handleMapClick = (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setLocation(newLocation);
        fetchAddress(newLocation.lat, newLocation.lng);
    };
    const handleDragEnd = () => {
        setSavedLocation(location);
        // Save the location to local storage or send it to a server
        console.log("Location saved", location);
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
                onClick={handleMapClick}
                onDragEnd={handleDragEnd}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapComponent;
