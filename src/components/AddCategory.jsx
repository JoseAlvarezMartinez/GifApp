import { useState } from "react"
export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("")

    function onInputChange({ target }) {
        setInputValue(target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const newValueInput = inputValue.trim()
        if (newValueInput === "") return;

        onAddCategory(newValueInput)
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

