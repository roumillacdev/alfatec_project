import styles from './navbar.module.css';
import Logo from '../../images/alfateclogo.png';
import Menu from "../menu";

export const Navbar = () => {
    return (
        <>
            <img src={Logo} alt="Logo" className={styles.logo}/>
            <div className={styles.navbar}>
                <Menu />
            </div>
        </>
    );
}
