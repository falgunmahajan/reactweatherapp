import axios from 'axios';

const apiKey = "d42251a0a9d8f7e6b274dd1ecf3c1edc";
const url = "https://api.openweathermap.org/data/2.5/weather";
const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;
const fetchedWeatherData = async (city) => {
    try{
        const res = await axios.get(`${url}?q=${city}&appid=${apiKey}&units=metric`);
        const { weather,
            main: {
                temp, temp_min, temp_max, humidity },
            wind: { speed },
            sys: { country },
            name } = res.data;
            const{description,icon}=weather[0]
        return {
            country,
            name,
            iconUrl:iconUrl(icon),
            description,
            temp,
            temp_max,
            temp_min,
            speed,
            humidity,
        }

    }
    catch(err){
        console.log(err.response.data)
        return err.response.data
    }
  
}
export {
    fetchedWeatherData
}