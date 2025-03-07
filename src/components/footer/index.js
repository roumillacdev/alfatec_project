import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer id="contact" className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <div className={styles.logo}>Alfatec</div>
                </div>

                <div className={styles.menuSection}>
                    <div className={styles.menuColumn}>
                        <h4>Fale Conosco</h4>
                        <a
                            href="mailto:contato@alfatecbrasilelevadores.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            E-mail
                        </a>
                        <a
                            href="https://wa.me/5521967406210"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Whatsapp
                        </a>
                    </div>
                    <div className={styles.menuColumn}>
                        <h4>Redes Sociais</h4>
                        <a
                            href="https://www.instagram.com/alfatecbrasilelevadores/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;