import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { defaultSearchParams } from "../../services/apiService";

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY


function Map() {

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey
    });

    const center = {
        lat: defaultSearchParams.lat,
        lng: defaultSearchParams.lon,
    }
    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ height: '500px', width: '500px' }}
                    center={center}
                    zoom={10}
                ></GoogleMap>
            )}
        </>
    );
}

export default Map;