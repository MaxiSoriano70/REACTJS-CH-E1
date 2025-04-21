import styles from '../css/slider.module.css';
import banner1 from '../assets/img/banner-1.jpeg';
import banner2 from '../assets/img/banner-2.jpeg';
import banner3 from '../assets/img/banner-3.jpeg';

const Slider = () => {
    return (
        <article id="carouselVeterinaria" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button
            type="button"
            data-bs-target="#carouselVeterinaria"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselVeterinaria"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            ></button>
            <button
            type="button"
            data-bs-target="#carouselVeterinaria"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            ></button>
        </div>

        <div className="carousel-inner">
            {/* Slide 1 */}
            <div className={`carousel-item active ${styles.containerImg}`}>
            <img src={banner1} className={`d-block w-100 ${styles.veterinariaCarousel}`} alt="banner-1" />
            <div className={`d-flex align-items-center justify-content-center flex-column ${styles.textCarrusel}`}>
                <h2 className={styles.tituloCarrusel}>
                Bienvenido a la Veterinaria, Nos apasiona cuidar y proteger a tus mascotas como si fueran parte de
                nuestra familia. Ofrecemos servicios completos de salud y bienestar, brindando atención personalizada
                para cada peludo amigo.
                </h2>
                <button
                id="boton-registrarse"
                className={`btn ${styles.btnCarrusel1}`}
                data-bs-toggle="modal"
                data-bs-target="#registrarseModal"
                >
                Registrate
                </button>
            </div>
            </div>

            {/* Slide 2 */}
            <div className={`carousel-item ${styles.containerImg}`}>
            <img src={banner2} className={`d-block w-100 ${styles.veterinariaCarousel}`} alt="banner-2" />
            <div className={`d-flex align-items-center justify-content-center flex-column ${styles.textCarrusel}`}>
                <h2 className={styles.tituloCarrusel}>
                Cuidamos la salud y el bienestar de tus mascotas con servicios completos: desde consultas y emergencias,
                hasta vacunación, desparasitación y procedimientos quirúrgicos. También ofrecemos peluquería y asesoría
                nutricional personalizada para que tu mascota esté siempre saludable y feliz.
                </h2>
                <a href="#" className={`btn ${styles.btnCarrusel2}`}>
                <i className="fa-solid fa-shield-dog"></i> Servicios
                </a>
            </div>
            </div>

            {/* Slide 3 */}
            <div className={`carousel-item ${styles.containerImg}`}>
            <img src={banner3} className={`d-block w-100 ${styles.veterinariaCarousel}`} alt="banner-3" />
            <div className={`d-flex align-items-center justify-content-center flex-column ${styles.textCarrusel}`}>
                <h2 className={styles.tituloCarrusel}>
                Nuestra clínica está ubicada en Calle falsa 123, fácilmente accesible y cercana a estacionamientos y
                transporte público. Puedes comunicarte con nosotros por teléfono o escribirnos a nuestro correo. También
                respondemos consultas a través de WhatsApp en el mismo número. ¡Estamos siempre listos para ayudarte y
                cuidar de tu mascota!
                </h2>
                <a href="#" className={`btn ${styles.btnCarrusel3}`}>
                <i className="fa-solid fa-address-book"></i> Contacto
                </a>
            </div>
            </div>
        </div>

        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselVeterinaria"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselVeterinaria"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>
        </article>
    );
};

export default Slider;