import L, { LeafletEvent } from 'leaflet';
import React, { useEffect } from 'react';
import { useMap, useMapEvent, GeoJSON } from 'react-leaflet';
import "leaflet-draw";

export const DrawBox = () => {
    const [draw, setDraw] = React.useState(false);
    const [aGeo, setGeo] = React.useState(null);
    const map = useMap();
    const coolguy = new (L as any).Draw.Rectangle(map);

    const divref = React.useRef();

    useMapEvent('draw:created' as any, (e: LeafletEvent) => {
        setGeo(e.layer.toGeoJSON());
        coolguy.disable();
        setDraw(false);
    })

    useEffect(() => {
        if (draw) {
            coolguy.enable();
        }
    }, [draw]);

    return (
        <> 
            <button onClick={() => {
                setDraw(true);
            }}>
                DrawBox
            </button>
            {aGeo && <GeoJSON data={aGeo} />}
        </>
    );
}