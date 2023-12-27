import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const ItemListContainer = () => {

    const { id } = useParams()

    const productos = [
        {id: "1", titulo:"t-amarilla", img:"https://www.bulletstore.cl/2521-large_default/polera-thrasher-modelo-crows-gold.jpg", precio:"4000"},
        {id: "2", titulo:"t-negra", img:"https://www.sickboards.nl/77225-large_default/thrasher-fire-logo-t-shirt.jpg", descripcion:"desc de producto 2", precio:"3000"},
        {id: "3", titulo:"t-blanca", img:"https://www.maplesk8.com/ps/7202-thickbox_default/camiseta-thrasher-flame-white.jpg", descripcion:"desc de producto 3", precio:"3000"},
        {id: "4", titulo:"nike", img:"https://www.nicekicks.com/files/2021/01/Nike-SB-Dunk-Low-Pro-Club-58-BQ6817-401-01-scaled.jpeg", descripcion:"desc de producto 4", precio:"6000"},
        {id: "5", titulo:"adidas", img:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/1/11-01-2018_adidas_forumlo_whiteroyal_gold_by3649_mg_4.jpg", descripcion:"desc de producto 5", precio:"6000"},
        {id: "6", titulo:"gorra1", img:"https://img.sombreroshop.es/Gorra-Trucker-Vintage-Rockets-by-Mitchell-Ness.54303a.jpg", descripcion:"desc de producto 6", precio:"1000"},
        {id: "7", titulo:"gorra2", img:"https://cdn.shopify.com/s/files/1/0306/2756/1607/products/Barias_FrontPrimario_1024x1024.jpg?v=1621612407", descripcion:"desc de producto 7", precio:"1000"},
    ]

    const productoFiltrado = productos.find((producto) => producto.id == id)
    return (

        <div>
            <ItemDetail producto={productoFiltrado}/>
        </div>
    )
}

export default ItemListContainer