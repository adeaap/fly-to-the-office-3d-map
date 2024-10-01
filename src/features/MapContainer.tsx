import * as React from "react";

import { Map } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapContainer() {
  const mapRef = React.useRef<any>(null);
  const [flying, setflying] = React.useState(false);
  const [maphasLoaded, setmaphasLoaded] = React.useState(false);

  function flyToTheOffice() {
    if (mapRef.current && !flying) {
      setflying(true);
      mapRef.current.flyTo({
        center: [11.533704810004139, 48.13285430406418],
        zoom: 20,
        bearing: 130,
        pitch: 75,
        duration: 12000,
        essential: true,
      });
    }
  }

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 11.5185,
          latitude: 48.1105,
          zoom: 17,
          pitch: 10,
          bearing: 45,
        }}
        interactive={true}
        mapStyle="mapbox://styles/mapbox/standard"
        interactiveLayerIds={["data"]}
        mapboxAccessToken={TOKEN}
        onLoad={() => setmaphasLoaded(true)}
      ></Map>
      <div className="control-panel-left">
        <h3>This map is interactive.</h3>
        <small>Feel free to move around, zoom in and out.</small>
      </div>
      <div className="control-panel">
        <h3>Project developed</h3>
        <h3>
          by
          <a href="https://www.linkedin.com/in/adea-pistulli/" target="_new">
            <strong> Adea Pistulli</strong>
          </a>
        </h3>

        <div className="source-link">
          <a
            href="https://github.com/adeaap/fly-to-the-office-3d-map"
            target="_new"
          >
            View Source Code ↗
          </a>
        </div>
      </div>

      {!flying && maphasLoaded && (
        <div className="fly-to-office">
          <button onClick={flyToTheOffice}>Fly to the office!</button>
        </div>
      )}
    </>
  );
}
