import styles from './navbar.module.css';
import React, { useState, useEffect } from 'react';
import Logo from '../../images/alfateclogo.png';

export const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isFixed ? styles.fixed : ''}`}>
            <div className={styles.logo}>
                <img src={Logo} alt="Logo Alfatec" />
            </div>
            <nav>
                <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Inicio</a>
                <a href="#quemsomos" onClick={(e) => scrollToSection(e, 'quemsomos')}>Sobre</a>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Serviços</a>
                <a href="#customers" onClick={(e) => scrollToSection(e, 'customers')}>Clientes</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contato</a>
            </nav>
        </header>
    );
};
