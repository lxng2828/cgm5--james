function SelectColor({ sendColor }) {

    const handleSelectColor = (e) => {
        sendColor(e.target.value);
    }

    return (
        <>
            <select name="color" id="color" onChange={handleSelectColor}>
                <option value="">--select your color--</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
        </>
    );
}

export default SelectColor;