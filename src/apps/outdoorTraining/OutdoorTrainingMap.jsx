import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import styled from "styled-components";
import { useOutdoorTraining } from "./OutdoorTrainingContext";
import { useGeolocation } from "../dailyWeather/usePosition";
import { useSearchParams } from "react-router-dom";
import { useOutdoorData } from "./useOutdoorData";

const MapWrapper = styled.div`
  width: 65%;
  margin-left: 2rem;
`;
function OutdoorTrainingMap() {
  const { position, isLoading } = useGeolocation();
  const { setDisplay, mapPosition } = useOutdoorTraining();
  const [searchParams, setSerachParams] = useSearchParams();
  const { usingData, isLoading: loadingData } = useOutdoorData();
  if (isLoading || !position || !position.lat || !position.lng || loadingData) {
    return null;
  }
  console.log(mapPosition);
  const myPosition = [position?.lat, position?.lng];

  const HandleMapClick = () => {
    const map = useMapEvents({
      click: (e) => {
        setDisplay(false), map.locate();
        map.setView(e.latlng);
        let lat = e.latlng.lat;
        searchParams.set("lat", lat);
        setSerachParams(searchParams);
        let lng = e.latlng.lng;
        searchParams.set("lng", lng);
        setSerachParams(searchParams);
      },
    });
    return null;
  };

  function ChangeView({ center, zoom }) {
    const map = useMap();
    if (mapPosition.length === 0) return;
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapWrapper>
      <MapContainer
        style={{ height: "71vh", width: "100%" }}
        center={myPosition}
        zoom={13}
        scrollWheelZoom={false}
      >
        <HandleMapClick />

        <ChangeView center={mapPosition} zoom={14} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {usingData.map((data, i) => (
          <Marker key={i} position={[data.lat, data.lng]}>
            <Popup>
              {data.type === "cycling" && "🚴"}
              {data.type === "running" && "🏃"} {data.type}{" "}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </MapWrapper>
  );
}

export default OutdoorTrainingMap;
