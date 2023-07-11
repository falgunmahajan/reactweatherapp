
import './App.css';
import { useState, useEffect, useRef } from 'react';
import Searchbox from './components/Searchbox';
import Displaydata from './components/Displaydata';
import { fetchedWeatherData } from './fetchedWeatherData';
function App() {
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState("");
  const [isLoading,setIsLoading]=useState(false);
  const inputRef=useRef('');
  const searchCity=()=>{
    if((/^[a-zA-Z\s]*$/).test(inputRef.current.value))
    {
      setIsLoading(true)
      setCity(inputRef.current.value)
    }
    
  }
 
  
  useEffect(()=>{
    (async()=>{
      // inputRef.current.value=city;
      if(city)
      {
      setIsLoading(true)
      const data = await fetchedWeatherData(city,setWeather);
      setWeather(data)
      console.log(weather)
      setIsLoading(false)
      }
    })();
  },[city])
  return (
    <div className="App container-fluid text-white vh-100" style={{backgroundColor:"#00008b99"}}>
      <div className="row">
        <div className="col-md-4 my-5 m-auto">
          <h1>Weather App</h1>
        <Searchbox inputRef={inputRef} searchCity={searchCity} />
       <Displaydata inputRef={inputRef} isLoading={isLoading} weather={weather} city={city}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
