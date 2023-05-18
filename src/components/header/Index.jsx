import {Header} from "../header/Header"
import "../header/styleHeader.css"
import Taza from "../../assets/img/taza.jpg"
import Collar from "../../assets/img/collar.jpg"
import Libro from "../../assets/img/libro.jpg"
import Peluche from "../../assets/img/peluche.jpg"
import Tarjeta from "../../assets/img/tarjeta.jpg"

export const Index = () => {
  return (
    <section className="container-productos">
        <section>
            <Header/>
        </section>
        <section className="index-productos">
            <section>
                <h1>Regalos</h1>
                <img src={Taza} alt="photo taza" />
            </section>
            <section >
                <h1>Joyas</h1>
                <img src={Collar} alt="photo collar" />
            </section>
            <section>
                <h1>Libros</h1>
                <img src={Libro} alt="photo libro" />
            </section>
            <section>
                <h1>Peluches</h1>
                <img src={Peluche} alt="photo peluche" />
            </section>
            <section>
                <h1>Papeleria</h1>
                <img src={Tarjeta} alt="photo tarjeta" />
        </section>
        </section>
    </section>
  )
}

