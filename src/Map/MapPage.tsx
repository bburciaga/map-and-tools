import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapPage = () => {


  return (
    <MapContainer id={'map'} center={[55, -122]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default MapPage;