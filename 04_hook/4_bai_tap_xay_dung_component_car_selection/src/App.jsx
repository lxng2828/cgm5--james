import { useState } from "react"
import SelectColor from "./components/SelectColor";
import SelectCar from "./components/SelectCar";


function App() {

  const [color, setColor] = useState("");
  const [car, setCar] = useState("");

  const getColor = (colorFromChild) => {
    setColor(colorFromChild);
  }

  const getCar = (carFromChild) => {
    setCar(carFromChild);
  }

  return (
    <>
      <h1>Select your car</h1>
      <SelectColor sendColor={getColor}></SelectColor>

      <SelectCar sendCar={getCar}></SelectCar>
      <h3>You select a {color} - {car}</h3>
    </>
  )
}

export default App
