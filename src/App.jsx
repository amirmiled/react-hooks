import { useEffect, useState } from "react";
import "./App.css";
import Forms from "./Forms";
function App() {
  const [count, setCount] = useState(0);
  const [timer,setTimer]=useState(0);
  const [color,setColor]=useState("red");
  const plus = () => {
    setCount(count + 1);
  };
  const moins = () => {
    setCount(count - 1);
  };
  useEffect(()=>{
    setTimeout(()=>{
      setTimer(()=> timer+1)
    },1000)
  });
 
  return (
    <div className="App">
      <header className="App-header">
      <Forms/>
      <p>my color is {color}</p>
      <button onClick={()=>setColor("blue")}>blue</button>
      <button onClick={()=>setColor("yellow")}>yellow</button>
      <br/>
        <button type="button" onClick={plus}>
          +
        </button>
        <p>{count}</p>
        <button type="button" onClick={moins}>
          -
        </button>
        <p>this is timer : {timer}</p>
      </header>
      
    </div>
    
  );
}


export default App;
