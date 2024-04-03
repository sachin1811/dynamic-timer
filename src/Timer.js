import { useState, useEffect } from "react";
export default function Card({ time }) {
  const [timer, setTimer] = useState(time * 60);

  useEffect(() => {
    let id = setInterval(() => {
      setTimer((x) => {
        if (x <= 0) clearInterval(id);
        else x = x - 1;
        return x;
      });
    }, 1000);
  }, []);

  return <h1>{timer}</h1>;
}
