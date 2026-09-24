import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){

    const[weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 40.84,
        temp: 41.84,
        tempMin: 40.84,
        tempMax: 42.84,
        humidity: 46,
        weather: "clear sky",
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}