import L, { LeafletEvent } from 'leaflet';
import React from 'react';
import { useMap, useMapEvent, GeoJSON } from 'react-leaflet';
import "leaflet-draw";

export const DrawBox = () => {
    const imgLink = require('./icons/icons8-rectangle-48.png');
    const [draw, setDraw] = React.useState(false);
    const [aGeo, setGeo] = React.useState(null);
    const map = useMap();
    const rectangle = new (L as any).Draw.Rectangle(map);

    useMapEvent('draw:created' as any, (e: LeafletEvent) => {
        setGeo(e.layer.toGeoJSON());
        rectangle.disable();
        setDraw(false);
    });

    React.useEffect(() => {
        if (draw) {
            rectangle.enable();
        }
    }, [draw]);

    return (
        <button
            className='leaflet-control'
            style={{
                height: 44,
                width: 44,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0
            }}
            onClick={() => {
                setDraw(!draw);
            }}>
            <img src={imgLink} alt='Rectangle icon by Icon8' height={40} width={40} />
        </button>
    );
}

// <a target="_blank" href="https://icons8.com/icon/w4iOrXQ6LiS9/rectangle">Rectangle</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
