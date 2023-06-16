import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

import { useCallback, useState} from 'react';

const WeatherBox = props => {

  const [weather, setWeather] = useState();

  // eslint-disable-next-line
  const handleCityChange = useCallback((city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32fe6d9b5e49112a35dd803d0c5e160c&units=metric`)
    .then(res => res.json())
      .then(data => {
          const weatherData = {
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main
          };
          console.log(weatherData);
          setWeather(weatherData);
      });
  });

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary {...weather} />
      <Loader />
    </section>
  )
};

export default WeatherBox;