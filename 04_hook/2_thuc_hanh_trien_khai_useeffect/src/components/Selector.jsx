import { useEffect, useState } from "react";

function Selector() {
    const [selection, setSelection] = useState("");

    const handleSelectOnChange = (event) => {
        setSelection(event.target.value);
    }

    useEffect(() => {
        alert(selection);
    }, [selection])

    return (<>
        <h1>Selector is : {selection}</h1>
        <select name="selector" id="selector" onChange={handleSelectOnChange}>
            <option value="Java Script">Java Script</option>
            <option value="Java" selected>Java</option>
            <option value="Python">Python</option>
        </select>
    </>);
}

export default Selector;