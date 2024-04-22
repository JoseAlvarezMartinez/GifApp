import AddCategory from "./components/AddCategory"
import { useState } from "react"

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])


    const onAddCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />

            <ol>
                {
                    categories.map(category => <li key={category}>{category}</li>)
                }
            </ol>
        </>
    )
}

export default GifExpertApp