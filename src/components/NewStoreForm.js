import React from "react"

function NewStoreForm({ formData, handleFormSubmit, handleFormChange}) {

    return(
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleFormChange} type="text" name="name" placeholder="Store Name"/>
            <input onChange={handleFormChange} type="text" name="image" placeholder="Image URL" />
            <input onChange={handleFormChange} type="number" name="season" placeholder="Season" step="1"/>
            <input onChange={handleFormChange} type="number" name="episode" placeholder="Episode" step="1"/>
            <button onChange={handleFormChange} type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;