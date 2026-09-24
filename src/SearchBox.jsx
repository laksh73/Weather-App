import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'



export default function SearchBox({updateInfo}){

    let [city, setCity] = useState('');
    let [error,setError]= useState(false);

    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="3580c7d4e9035ad77732e379d51546f2"; 

    let getWeatherInfo = async (city)=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let jsonResponse = await response.json();
        let result ={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        setError(false); // no error found
        console.log(result);
        updateInfo(result); 

        }catch(error){
            setError(true)//error found
            console.error("Fetch error:", error);
        }
        
    };

    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit =  (event)=>{
        event.preventDefault();
        console.log(city);
        setCity('');
        getWeatherInfo(city);
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>

                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button  variant="contained" endIcon={<SendIcon />} type="submit">
                    Send
                </Button>
            {error && <p style={{color:"red"}}>No such place exists in database</p>}
            </form>
        </div>
    )
}