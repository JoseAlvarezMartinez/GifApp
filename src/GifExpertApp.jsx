import { GifGrid, AddCategory } from "./components"
import { useState } from "react"

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />


            {categories.map(category => <GifGrid key={category} category={category} />)}
        </>
    )
}

export default GifExpertApp