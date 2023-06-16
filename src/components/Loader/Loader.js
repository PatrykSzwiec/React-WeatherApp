import styles from './Loader.module.scss';

const Loader = () => {
  return (<img
    className={styles.loader}
    alt="????"
    src='/images/loader.png'/>
  );
};

export default Loader;