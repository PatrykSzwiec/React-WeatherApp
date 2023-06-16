import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({ city, temp, icon, description}) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={description}
        src={`/images/weather-icons/${icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{city}</h2>
        <p>
          <strong>Temp:</strong> {temp}°C
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;