import Img from "../../assets/img/logo.jpg"
import {Nav} from "../header/Nav"


export const Header = () => {
  return (
    <section>
      <img src={Img} alt="" />
      <section>
        <Nav/>
      </section>
    </section>
  )
}

