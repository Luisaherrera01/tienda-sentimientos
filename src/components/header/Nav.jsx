import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    
    <section className="nav">
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/productos"}>Productos</Link></li>
            <li><Link to={"/contactenos"}>Contáctenos</Link></li>
        </ul>
    </section>
    
  )
}

