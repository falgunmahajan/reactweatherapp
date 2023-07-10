
import './App.css';
import { useState, useEffect, useRef } from 'react';
import Searchbox from './components/Searchbox';
import Displaydata from './components/Displaydata';
import { fetchedWeatherData } from './fetchedWeatherData';
function App() {
  const [city,setCity]=useState("Jammu");
  const [weather,setWeather]=useState();
  const inputRef=useRef('');
  const enterKeyPressed=(e)=>{
    if(e.key==="Enter")
    {
      setCity(inputRef.current.value)
    }
  }
  const buttonClick=()=>{
    setCity(inputRef.current.value)
  }
  useEffect(()=>{
    (async()=>{
      inputRef.current.value=city;
      const data = await fetchedWeatherData(city);
      if(data.country!==undefined)
      {
      setWeather(data)
      }
      else
      {
        setWeather(null)
      }
    })();
  },[city])
  return (
    <div className="App container-fluid text-white vh-100" style={{backgroundImage:`url("https://img.freepik.com/free-vector/flat-style-clouds-blue-shades-background_1017-23284.jpg?size=626&ext=jpg&ga=GA1.1.792179136.1684565200&semt=ais")`,
    backgroundSize:'cover'}}>
      <div className="row">
        <div className="col-md-4 my-5 m-auto">
          <h1>Weather App</h1>
        <Searchbox inputRef={inputRef} enterKeyPressed={enterKeyPressed} buttonClick={buttonClick} />
       { weather?<Displaydata weather={weather}/>:<h1 className='display-1 my-5'>City Not Found</h1>}
        </div>
      </div>
      
    </div>
  );
}

export default App;
