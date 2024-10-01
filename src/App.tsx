import { MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const addCounter = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <Button onClick={addCounter}>Button</Button>
      <Button onClick={addCounter} appearence="big">
        Button
      </Button>
      <Input placeholder="Email" />
    </>
  );
}

export default App;
