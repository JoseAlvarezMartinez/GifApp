import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import GiftItem from "./GiftItem"
const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    const getImagesApi = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setLoading(false)
    }

    useEffect(() => {
        getImagesApi()
    }, [])

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {loading ? <p>Loading...</p> : images.map(image => (
                    <GiftItem key={image.id} {...image} />
                ))}

            </div>
        </>
    )
}

export default GifGrid