import Input from "@shared/components/input/Input";
import "@styles/global.css.ts";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const [value2, setValue2] = useState("");
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(e.target.value);
  };
  return (
    <div
      style={{
        width: "50rem",
        padding: "10rem",
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Input
        value={value}
        onChange={handleChange}
        maxLength={10}
        type="password"
      />
      <Input value={value2} onChange={handleChange2} type="text" />
    </div>
  );
}

export default App;
