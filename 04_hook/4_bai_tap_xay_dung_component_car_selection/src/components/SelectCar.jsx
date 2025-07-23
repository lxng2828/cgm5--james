
function SelectCar({ sendCar }) {


    const handleSelectCar = (e) => {
        sendCar(e.target.value);
    }

    return (
        <>
            <select name="Car" id="Car" onChange={handleSelectCar}>
                <option value="">--select your car--</option>
                <option value="Merc">Merc</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
            </select>
        </>
    );
}

export default SelectCar;