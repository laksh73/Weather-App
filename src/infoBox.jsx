
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    
    // const INIT_URL = "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1000&auto=format&fit=crop";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1000&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1000&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1000&auto=format&fit=crop";


    return(
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image = {info.humidity>80 ? RAIN_URL : info.temp>20 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{info.humidity>80 ? <ThunderstormIcon/> : info.temp>20 ? <SunnyIcon/> : <AcUnitIcon/>}`
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temprature: {info.temp} &deg;C</p>
                    <p>Humidity: {info.humidity} </p>
                    <p>Min Temp: {info.tempMin}&deg;C</p>
                    <p>Min Temp: {info.tempMax}&deg;C</p>
                    <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>

            </div>
        </div>
    );
}