import L from 'leaflet';
import { DomEvent } from 'leaflet';
import React from 'react';
import { LayersControlProvider } from '../../contexts/map/layerControlContext';
import { DrawBox } from './tools/DrawBox';
import { DrawPolygon } from './tools/DrawPolygon';

export const DrawingBar = () => {
  const divref = React.useRef();

  React.useEffect(() => {
    L.DomEvent.disableClickPropagation((divref as any)?.current);
    L.DomEvent.disableScrollPropagation((divref as any)?.current);
  }, [divref.current]);

  return (
    <LayersControlProvider value={null as any}>
      <div
          ref={divref as any}
          className="leaflet-right leaflet-top leaflet-control"
          style={{ display: 'static' }}
        >
          <DrawBox />
          <DrawPolygon />
        </div>
    </LayersControlProvider>
  )
}