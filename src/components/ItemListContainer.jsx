import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import  Loader from "./Loader"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const db = getFirestore()

        const itemsCollection = collection(db, "productos")

        const qry = categoriaId ? query(itemsCollection, where("categoria", "==", categoriaId)) : itemsCollection
        getDocs(qry).then((snapshot) => {
            setProductos(
                snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            )
            setLoading(false);
        })
    }, [categoriaId])


    const productosFiltrados = productos.filter((producto) => producto.categoria === categoriaId)

    return (

        <div>
            {loading ? (
                <Loader />
            ) : (

                categoriaId ? <ItemList productos={productosFiltrados} /> : <ItemList productos={productos} />
            )}

        </div>
    )
}

export default ItemListContainer