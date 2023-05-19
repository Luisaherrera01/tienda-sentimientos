import { Link } from "react-router-dom"

export const Productos = () => {
  return (
    <section className="link-productos">
         <ul>
            <li><Link to={"/joyas"}>Joyas</Link></li>
            <li><Link to={"/libros"}>Libros</Link></li>
            <li><Link to={"/papeleria"}>Papelería</Link></li>
            <li><Link to={"/peluches"}>Peluches</Link></li>
            <li><Link to={"/Regalos"}>Regalos</Link></li>
        </ul>

    </section>
  )
}

