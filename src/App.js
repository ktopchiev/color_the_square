
import { useState } from "react";
import SetColor from "./SetColor";
import SquareBox from "./SquareBox";

function App() {
  const [color, setColor] = useState('')

  return (
    <div className="App">
        <SquareBox
          color={color}
        />
        <SetColor
          color={color}
          setColor={setColor}
        />
    </div>
  );
}

export default App;
