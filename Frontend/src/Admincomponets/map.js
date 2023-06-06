import { useRef, useState } from 'react';
import Osm from './osm_provide';
import  {MapContainer, TileLayer , Marker , Popup} from 'react-leaflet';
import markerLogo from 'leaflet';



const markerIcon = new markerLogo.Icon({
    iconUrl: require("../images/truck.png"),
    iconSize: [35, 45],
    iconAnchor:[17, 46],
    popupAnchor:[0 , -46]
});





const  Geomap = () => {

const [center , setCenter] = useState({lat: 20.2930412, lng: 85.8178939});
const position = [20.2930412 ,  85.8178939];
const ZOOM_LEVEL = 15;
const mapRef = useRef();

    return ( 
         <>
             <div className='col p-0'>
                <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                   <TileLayer url={Osm.maptiler.url} attribution={Osm.maptiler.attribution}/>
                   <Marker
                    position={position}
                    icon={markerIcon}
                   >
                        <Popup>
                            <b>First Marker</b>
                        </Popup>
                   </Marker>
                  
                </MapContainer>
             </div>
         </>
     );
}

export default Geomap;