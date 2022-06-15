import { DomEvent, LatLng } from 'leaflet';
import React from 'react';
import { useMap, useMapEvent } from 'react-leaflet';

export const DrawBox = () => {
    const [draw, setDraw] = React.useState(false);
    const [firstPos, setFirstPos] = React.useState<any>();
    const [secondPos, setSecondPos] = React.useState<any>();
    const [geo, setGeo] = React.useState([null]);
    const map = useMap();

    const divref = React.useRef();

    React.useEffect(() => {
        if (draw) {
            
        }
    }, [draw]);

    React.useEffect(() => {
        console.log('firstPos', firstPos);
    }, [firstPos]);

    React.useEffect(() => {
        console.log('secondPos', secondPos);
    }, [secondPos]);
    
    React.useEffect(() => {
        console.log('DrawBox', draw);
    }, [draw]);

    useMapEvent('mousedown', (e) => {
        if (draw && !firstPos) {
            setFirstPos(e.latlng);
        }
        if (draw && firstPos) {
            setSecondPos(e.latlng);
        }
    });

    // useMapEvent('mouseup', (_e) => {
    //     if (firstPos && secondPos) {
    //         console.log('setting geo')
    //     }
    // });

    return <button onClick={() => setDraw(!draw)}>
        DrawBox
    </button>;
}