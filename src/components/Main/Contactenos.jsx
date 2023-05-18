import { Header } from "../header/Header"
import "../../components/main/styleMain.css"

export const Contactenos = () => {
  return (
    <section>
      <Header/>
      <section className="formulario">
        <form action=""> <strong><h1>Formulario de contacto</h1></strong>
          <section>
            <p htmlFor="">Nombre: </p>
            <input type="text" />
            <p htmlFor="">Apellido: </p>
            <input type="text" />
            <p htmlFor="">Correo: </p>
            <input type="email" />
            <p>
              <input type="submit" value= "Enviar" />
            </p>
          </section>
        </form>
      </section>
    </section>
  )
}

