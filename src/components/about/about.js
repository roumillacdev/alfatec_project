import styles from './about.module.css';

export const About = () => {
    return (
        <div id="quemsomos" className={styles.about}>
            <h1 className={styles.title}>A Empresa</h1>
            <p className={styles.description}>
                A Alfatec Brasil Elevadores começou sua trajetória ​com apenas três profissionais dedicados e, hoje,
                ​conta com uma equipe altamente capacitada e ​treinada para atender a todos os clientes, sejam eles
                ​comerciais, industriais ou residenciais.
            </p>

            <div className={styles.columns}>
                <div className={styles.column}>
                    <h2>Nosso Objetivo</h2>
                    <p>Nosso principal objetivo é proporcionar soluções inovadoras e personalizadas, completamente
                        adaptadas às necessidades específicas de cada cliente. Trabalhamos com a mais alta tecnologia e
                        uma abordagem focada na excelência, garantindo a entrega de serviços de elevadores que superem
                        as expectativas. Buscamos constantemente melhorar a segurança, o conforto e a eficiência de
                        nossos projetos, sem abrir mão da qualidade em todas as etapas do processo. Nosso compromisso é
                        assegurar que cada cliente se sinta seguro e satisfeito, oferecendo soluções que atendem não
                        apenas às suas exigências, mas também antecipam suas necessidades futuras.</p>
                </div>
                <div className={styles.column}>
                    <h2>Nossos Valores</h2>
                    <p>Nossa missão é proporcionar a melhor experiência em serviços de manutenção e reparo de
                        elevadores, sempre em conformidade com as legislações e normas vigentes. Somos uma empresa
                        legalizada junto aos órgãos fiscalizadores e regulamentadores do município do estado do Rio de
                        Janeiro, como CREA e GEM</p>
                </div>
            </div>
        </div>
    );
};
