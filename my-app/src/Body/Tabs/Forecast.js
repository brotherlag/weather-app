import { useEffect, useState } from "react";
import TimeSelector from "./TimeSelector";
import Data from "./Data";
import Map from "./Map";
import { getForecast } from "../../services/apiService";
import { useSelector } from "react-redux";

function Forecast() {
    const [forecastData, setForecastData] = useState(null);

    const searchParams = useSelector((state) => state.searchParams);
    const forecastSelectedData = useSelector((state) => state.forecastSelectedData);

    useEffect(() => {
        (async function () {
            const response = await getForecast(searchParams);
            const data = await response.json();
            setForecastData(data);
        })();
    }, [searchParams]);

    const weatherData = forecastData ? {
        ...forecastData?.list[0],
        coord: forecastData.city.coord,
    } : null;

    return (
        <>
            <TimeSelector
                data={forecastData}
            />
            <Data data={forecastSelectedData || weatherData}
            />
            <Map weatherData={forecastSelectedData || weatherData}
            />
        </>
    );
}

export default Forecast;