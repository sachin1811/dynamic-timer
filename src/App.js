import "./styles.css";
import { useState } from "react";
import Timer from "./Timer";

export default function App() {
  const [count, setCount] = useState(0);
  const [countList, setCountList] = useState([]);
  const handleButtonClick = () => {
    setCountList([...countList, count]);
  };
  return (
    <div>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={handleButtonClick}>Click</button>
      </div>
      <div>
        {countList.map((item) => {
          return <Timer time={item} />;
        })}
      </div>
    </div>
  );
}
