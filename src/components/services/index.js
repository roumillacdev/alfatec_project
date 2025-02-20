import styles from './services.module.css';
import Circleimg from "../circleimg";
import Imagem1 from '../../images/edificio.jpg';
import Imagem2 from '../../images/alfatec_paulo.jpg';
import Imagem3 from '../../images/offshore_alfatec.jpg';

export const Services = () => {
    return (
        <div id="services" className={styles.services}>
            <h1 className={styles.title}>Atendemos Onshore e Offshore</h1>
            <p className={styles.description}>
                A Alfatec Brasil Elevadores começou sua trajetória ​com apenas três profissionais dedicados e, hoje,
                ​conta com uma equipe altamente capacitada e ​treinada para atender a todos os clientes, sejam eles
                ​comerciais, industriais ou residenciais.
            </p>

            <div className={styles.columns}>
                <div className={styles.column}>
                    <Circleimg src={Imagem1} />
                    <h2>Edifícios Residenciais</h2>
                    <p>Oferecemos serviços de ​manutenção preventiva e ​corretiva, identificando e ​resolvendo problemas
                        ​antes que se tornem ​graves. Realizamos ​inspeções regulares e ​utilizamos peças originais
                        ​para assegurar o bom ​funcionamento e a ​longevidade do seu ​elevador.</p>
                </div>
                <div className={styles.column}>
                    <Circleimg src={Imagem2} />
                    <h2>Industrias e Edifícios ​Comerciais</h2>
                    <p>A manutenção de ​elevadores em edifícios ​comerciais é crucial para ​garantir a segurança e a
                        ​eficiência no transporte de ​pessoas. Nossa equipe ​altamente capacitada ​garante que os
                        elevadores ​atendam às demandas ​diárias de um ambiente ​comercial com máxima ​segurança e
                        desempenho.</p>
                </div>
                <div className={styles.column}>
                    <Circleimg src={Imagem3} />
                    <h2>Navios, Plataformas e ​Flotéis</h2>
                    <p>Atendemos as principais ​demandas do setor para a ​realização de serviços em ​elevadores
                        tracionados e ​do tipo cremalheira de ​todos os fabricantes em ​navios (carga e de
                        ​passageiros), portos, ​plataformas de petróleo e ​estaleiros.</p>
                </div>
            </div>
        </div>
    );
};
