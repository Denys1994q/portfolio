import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import location from "../../images/Location.png";

const MapComponent = ({ lat, long }) => {
    return (
        <Map
            initialViewState={{
                latitude: lat,
                longitude: long,
                zoom: 3,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle='mapbox://styles/mapbox/dark-v10'
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
            <Marker longitude={long} latitude={lat} anchor='bottom-left'>
                <img src={location} alt='location-icon' />
            </Marker>
        </Map>
    );
};

export default MapComponent;
