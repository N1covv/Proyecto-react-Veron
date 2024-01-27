import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "./Loader";

const ItemListContainer = () => {

    const id = useParams().id
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const db = getFirestore()
        const docCol = doc(db, "productos", `${id}`)
        getDoc(docCol).then((resp) => {
            setItem(
                { ...resp.data(), id: resp.id }
            )
        })
            .finally(() => {
                setLoading(false)
            })
    }, [id])
    return (

        <div>
            {loading ? (
                <Loader />
            ) : (
                item && <ItemDetail item={item} />
            )}
        </div>
    )
}

export default ItemListContainer