import Img from "../../assets/img/logo.jpg"
import { Nav } from "../header/Nav"
import "../header/styleHeader.css"



export const Header = () => {
  return (
    <section className="header">
      <img src={Img} alt="" className="logo"/>
      <section>
        <Nav/>
      </section>
    </section>
  )
}

