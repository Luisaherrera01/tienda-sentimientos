import { useEffect,useState } from "react"

export const Main = () => {
    const [productos, setServicios] = useState([])
    const mostrarProductos = async() => {
        await fetch("src/json/productos.json")
        .then((res)=>res.json())
        .then((data)=>setArchivos(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(productos)
    }

    useEffect(()=>{mostrarProductos()},[])

  return (
    <div className="container-productos">
        {productos.map((productos)=>(
            <section key={productos.id} className="mainCard">
                
            </section>
        ))}
        
    </div>
  )
}
