import styles from './customers.module.css';
import Cliente1 from '../../images/clientes/ambev.jpg';
import Cliente2 from '../../images/clientes/aliança.jpg';
import Cliente3 from '../../images/clientes/ctv.png';
import Cliente4 from '../../images/clientes/eaglestar.jpg';
import Cliente5 from '../../images/clientes/hidrovias.jpg';
import Cliente6 from '../../images/clientes/biomanguinhos-ok.jpg';
import Cliente7 from '../../images/clientes/MODEC.jpg';
import Cliente8 from '../../images/clientes/oos.jpg';
import Cliente9 from '../../images/clientes/petrobras.png';
import Cliente10 from '../../images/clientes/prosafe.jpg';
import Cliente11 from '../../images/clientes/swift.jpg';
import Cliente12 from '../../images/clientes/VENTURA.jpg';


export const Customers = () => {
    return (
        <div id="customers" className={styles.customersContainer}>
            <h1>Alguns de nossos Clientes</h1>
            <div className={styles.logoGrid}>
                <div className={styles.logoItem}>
                    <img src={Cliente1} alt="ambev"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente2} alt="alianca"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente3} alt="ctv"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente4} alt="eaglestar"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente5} alt="hidrovias"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente6} alt="manguinhos"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente7} alt="modec"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente8} alt="oos"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente9} alt="petrobras"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente10} alt="prosafe"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente11} alt="swift"/>
                </div>
                <div className={styles.logoItem}>
                    <img src={Cliente12} alt="ventura"/>
                </div>
            </div>
        </div>
    );
};