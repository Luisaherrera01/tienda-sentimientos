import { Link } from "react-router-dom"

export const Nav = () => {
  return (
    
    <section>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/productos"}>Productos</Link></li>
            <li><Link to={"/contactenos"}>contactenos</Link></li>
        </ul>
    </section>
    
  )
}

