import ImgCabecalho from '../../images/header.png';
import styles from './hero.module.css';

const Hero = () => {
    return (
        <div className={styles.cabecalhoContainer}>
            <img src={ImgCabecalho} alt="imgcabecalho" />
        </div>
    );
}

export default Hero;
