import React, { useState, useEffect } from "react";
import styles from "./menu.module.css";

const MenuBar = () => {
    const [selected, setSelected] = useState("#inicio"); // Estado para controlar o item selecionado

    const handleScroll = (event, targetId) => {
        event.preventDefault(); // Impede a navegação padrão do link

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop; // Calcula a posição do elemento
            window.scrollTo({
                top: offsetTop, // Move para a posição do elemento
                behavior: "smooth", // Rolagem suave
            });
        }

        setSelected(targetId); // Atualiza o item selecionado
    };

    const handleScrollPosition = () => {
        const sections = ["#inicio", "#quemsomos", "#servicos", "#clientes", "#contato"];
        let found = false;

        sections.forEach((id) => {
            const element = document.querySelector(id);
            if (element && window.scrollY >= element.offsetTop - 10) {
                setSelected(id); // Atualiza a seleção com base na posição do scroll
                found = true;
            }
        });

        if (!found) {
            setSelected(""); // Reseta a seleção caso nenhuma seção seja encontrada
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPosition);
        return () => window.removeEventListener("scroll", handleScrollPosition);
    }, []);

    return (
        <nav className={styles.menu}>
            <a
                href="#inicio"
                className={selected === "#inicio" ? styles.selected : ""}
                onClick={(e) => handleScroll(e, "#inicio")}
            >
                Inicio
            </a>
            <a
                href="#quemsomos"
                className={selected === "#quemsomos" ? styles.selected : ""}
                onClick={(e) => handleScroll(e, "#quemsomos")}
            >
                Quem Somos
            </a>
            <a
                href="#servicos"
                className={selected === "#servicos" ? styles.selected : ""}
                onClick={(e) => handleScroll(e, "#servicos")}
            >
                Serviços
            </a>
            <a
                href="#clientes"
                className={selected === "#clientes" ? styles.selected : ""}
                onClick={(e) => handleScroll(e, "#clientes")}
            >
                Clientes
            </a>
            <a
                href="#contato"
                className={selected === "#contato" ? styles.selected : ""}
                onClick={(e) => handleScroll(e, "#contato")}
            >
                Contato
            </a>
        </nav>
    );
};

export default MenuBar;
