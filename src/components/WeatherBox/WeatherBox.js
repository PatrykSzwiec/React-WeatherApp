import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';

import { useCallback, useState} from 'react';

const WeatherBox = () => {

  const [weather, setWeather] = useState();

  //state for verify if we wait for infomation from server api
  const [pending, setPending] = useState(false);

  const [error, setError] = useState(false);

  // eslint-disable-next-line
  const handleCityChange = useCallback((city) => {

    setPending(true);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32fe6d9b5e49112a35dd803d0c5e160c&units=metric`)
    .then(res => {
      if(res.status === 200) {
        setError(false);
        return res.json()
        .then(data => {
          const weatherData = {
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            description: data.weather[0].main
          };
          setWeather(weatherData);
          setPending(false);
        });
      } else {
      setError(true);
      }
    });
  });

  return (
    <section>
      <PickCity action={handleCityChange} />
      {(weather && !pending) && <WeatherSummary {...weather} />}
      {error && <ErrorBox>There is no such city!</ErrorBox>}
      {(pending && pending && !error) && <Loader />}
    </section>
  )
};

export default WeatherBox;