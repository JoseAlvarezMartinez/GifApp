import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
export const useFetchGif = (category) => {
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
    return {
        images,
        loading
    }
}