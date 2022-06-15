import { DomEvent } from 'leaflet';
import React from 'react';
import { LayersControlProvider } from '../../contexts/map/layerControlContext';
import { DrawBox } from './tools/DrawBox';

export const DrawingBar = () => {
  const divref = React.useRef();

  React.useEffect(() => {
    DomEvent.disableClickPropagation((divref as any)?.current);
    DomEvent.disableScrollPropagation((divref as any)?.current);
  });

  return (
    <LayersControlProvider value={null as any}>
      <div
          ref={divref as any}
          className="leaflet-bar leaflet-control"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <DrawBox />
        </div>
    </LayersControlProvider>
  )
}