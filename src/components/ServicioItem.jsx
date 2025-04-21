import styles from '../css/servicios.module.css';

const ServicioItem = ({ image, title, description }) => {
    const imageUrl = new URL(`../assets/img/${image}`, import.meta.url).href;

    return (
        <div className={styles.cardServicio}>
        <img src={imageUrl} alt={title} />
        <h5>{title}</h5>
        <p>{description}</p>
        </div>
    );
};

export default ServicioItem;
