import styles from './headercontact.module.css';
import {WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons';

export const HeaderContact = () => {
    return (
        <>
            <div id="inicio" className={styles.headerContact}>
                <a
                    href="https://www.instagram.com/alfatecbrasilelevadores/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramButton}
                >
                   <InstagramOutlined /> Instagram
                </a>
                <a
                    href="https://wa.me/5521967406210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                >
                    <WhatsAppOutlined/> Whatsapp
                </a>
            </div>
        </>
    );
};
