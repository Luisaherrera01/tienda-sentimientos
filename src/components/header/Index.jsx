import {Header} from "../header/Header"
import "../header/styleHeader.css"
import { Link } from "react-router-dom"
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
                <Link to={"/Regalos"}>Regalos</Link>
                <img src={Taza} alt="photo taza" />
            </section>
            <section >
                <Link to={"/joyas"}>Joyas</Link>
                <img src={Collar} alt="photo collar" />
            </section>
            <section>
                <Link to={"/libros"}>Libros</Link>
                <img src={Libro} alt="photo libro" />
            </section>
            <section>
                <Link to={"/peluches"}>Peluches</Link>
                <img src={Peluche} alt="photo peluche" />
            </section>
            <section>
                <Link to={"/papeleria"}>Papelería</Link>
                <img src={Tarjeta} alt="photo tarjeta" />
        </section>
        </section>
    </section>
  )
}

