import { useState } from "react"
const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("")

    function onInputChange({ target }) {
        setInputValue(target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (inputValue.trim() === "") return;

        onAddCategory(inputValue)
        setInputValue("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
    )
}

export default AddCategory