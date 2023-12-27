import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const { categoriaId } = useParams()
    
    const productos = [
        {id: "1", titulo:"t-amarilla", descripcion:"desc de producto 1", precio:"4000", categoria:"Remeras"},
        {id: "2", titulo:"t-negra", descripcion:"desc de producto 2", precio:"3000", categoria:"Remeras"},
        {id: "3", titulo:"t-blanca", descripcion:"desc de producto 3", precio:"3000", categoria:"Remeras"},
        {id: "4", titulo:"nike", descripcion:"desc de producto 4", precio:"6000", categoria:"Zapatillas"},
        {id: "5", titulo:"adidas", descripcion:"desc de producto 5", precio:"6000", categoria:"Zapatillas"},
        {id: "6", titulo:"gorra1", descripcion:"desc de producto 6", precio:"1000", categoria:"Gorras"},
        {id: "7", titulo:"gorra2", descripcion:"desc de producto 7", precio:"1000", categoria:"Gorras"},
    ]

    
    const productosFiltrados = productos.filter((producto)=> producto.categoria == categoriaId)
    
    return (

        <div>
            {
                categoriaId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos}/>
            }
            
        </div>
    )
}

export default ItemListContainer