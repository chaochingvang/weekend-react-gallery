import { useState } from "react";

function GalleryForm({addNewCreature}) {
    const [nameInput, setNameInput] = useState(``);
    const [descriptionInput, setDescriptionInput] = useState(``);
    const [pathInput, setPathInput] = useState(``);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCreature = {
            title: nameInput,
            description: descriptionInput,
            path: pathInput
        }

        addNewCreature(newCreature);

        setNameInput(``);
        setDescriptionInput(``);
        setPathInput(``);
    }

    return (<>
        <h3>Enter A New Creature:</h3>

        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input placeholder="name" value={nameInput} onChange={(event) => setNameInput(event.target.value)} />
            <label>Description:</label>
            <input placeholder="description" value={descriptionInput} onChange={(event) => setDescriptionInput(event.target.value)} />
            <label>Url Path:</label>
            <input placeholder="url path" value={pathInput} onChange={(event) => setPathInput(event.target.value)} />
            <button>Submit</button>
        </form>
    </>);
}

export default GalleryForm;