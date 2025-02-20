import styles from './customers.module.css';
import LogoCarousel from "../exibicaoclientes";



export const CustomerSession = () => {
    return (
        <>
            <div id="services" className={styles.client}>
                <h1 className={styles.title}>Alguns de nossos Clientes</h1>
                <div>
                    <LogoCarousel />
                </div>
            </div>
        </>
    )
}

