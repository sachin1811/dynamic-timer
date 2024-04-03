import "./styles.css";
import { useState } from "react";
import Timer from "./Timer";

// 1 second == 1000ms
// 1 min == 60s -- 60000ms
// n min -- n*60000ms

export default function App() {
  const [count, setCount] = useState(0);
  const [countList, setCountList] = useState([]);
  const handleButtonClick = () => {
    // let obj = {count: count , id: }
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
