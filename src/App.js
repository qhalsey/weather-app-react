import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";



class App extends React.Component {

  getWeather = () => {
    const api_call = await fetch('api.openweathermap.org/data/2.5/weather?q=HuntingtonBeach,us&appid=${API_KEY}&units=metric');
    const data = await api_call.json();
    console.log(data);
  }
  render(){
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
