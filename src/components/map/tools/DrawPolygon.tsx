import React from 'react';
import L, { LeafletEvent } from 'leaflet';
import { useMap, useMapEvent } from 'react-leaflet';
import 'leaflet-draw';

export const DrawPolygon = () => {
	const imgLink = require('./icons/polygon.png');
	const [draw, setDraw] = React.useState(false);
	const [aGeo, setGeo] = React.useState(null);
	const map = useMap();
	const polygon = new (L as any).Draw.Polygon(map);

	useMapEvent('draw:created' as any, (e: LeafletEvent) => {
		setGeo(e.layer.toGeoJSON());
		polygon.disable();
		setDraw(false);
	});
    
    useMapEvent('draw:drawvertex' as any, (e: LeafletEvent) => {
        console.log('=====drawvertex=====',e);
    });

    useMapEvent('click' as any, (e: LeafletEvent) => {
        console.log('=====CLICK=====', e);
    });

	React.useEffect(() => {
		if (draw) {
			polygon.enable();
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
            onClick={() => setDraw(!draw)}>
            <img src={imgLink} alt='Polygon icon by Bharat Icons' height={40} width={40} />
        </button>
    );
};

//<a href="https://www.flaticon.com/free-icons/polygon" title="polygon icons">Polygon icons created by Bharat Icons - Flaticon</a>
