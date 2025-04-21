import styles from '../css/servicios.module.css';
import serviciosData from '../assets/js/servicios.json';
import ServicioItem from './ServicioItem';

const Servicios = () => {
    return (
        <article id="Servicios" className={styles.servicios}>
            <section className={styles.serviciosTitulo}>
                <h2>Servicios</h2>
            </section>
            <section className={styles.contenedorServicios}>
                {serviciosData.map((servicio, index) => (
                <ServicioItem
                    key={index}
                    image={servicio.image}
                    title={servicio.title}
                    description={servicio.description}
                />
                ))}
            </section>
        </article>
    );
};

export default Servicios;
