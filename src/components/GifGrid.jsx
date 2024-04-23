import { useFetchGif } from "../hooks/useFetchGif"
import {GiftItem} from "./GiftItem"

export const GifGrid = ({ category }) => {

    const { images, loading } = useFetchGif(category)

    return (
        <>
            <h3>{category}</h3>

            {loading && <h2>Loading...</h2>}
            <div className="card-grid">
                {images.map(image => (
                    <GiftItem key={image.id} {...image} />
                ))}

            </div>
        </>
    )
}
