import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { DrawingBar } from './DrawingBar';

const MapPage = () => {


  return (
    <MapContainer id={'map'} center={[55, -122]} zoom={6}>
      <DrawingBar />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default MapPage;