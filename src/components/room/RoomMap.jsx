"use client";
import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  CircleF,
  InfoWindowF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "30vh",
};

const RoomMap = ({ latitude, longitude }) => {
  const [lat, setLat] = useState(latitude);
  const [lng, setLng] = useState(longitude);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo(
    () => ({
      clickableIcons: true,
      scrollwheel: false,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    }),
    [],
  );

  const pinIcon = {
    url: "/assets/home-pin.png",
    scaledSize: { width: 50, height: 50 },
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const handleClickMarker = () => {
    setIsInfoWindowOpen(true);
  };

  if (!isLoaded) {
    return (
      <div className="w-full min-h-[30vh] bg-neutral-200 flex items-center justify-center text-accent">
        지도정보를 불러오는 중입니다.
      </div>
    );
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={13}
        center={mapCenter}
        mapContainerStyle={containerStyle}
        onClick={() => setIsInfoWindowOpen(false)}
      >
        <MarkerF
          position={mapCenter}
          icon={pinIcon}
          onClick={handleClickMarker}
        >
          {isInfoWindowOpen && (
            <InfoWindowF
              onCloseClick={() => setIsInfoWindowOpen(false)}
              position={mapCenter}
              options={{ className: "custom-info-window" }}
            >
              <div className="px-2 py-1 rounded-xl font-medium">
                정확한 위치는 예약 완료 후에 표시됩니다.
              </div>
            </InfoWindowF>
          )}
        </MarkerF>
        <CircleF
          center={mapCenter}
          radius={400}
          options={{
            fillColor: "#008489",
            strokeColor: "transparent",
            fillOpacity: 0.3,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default RoomMap;
