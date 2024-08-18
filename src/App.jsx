import { useEffect } from "react";
import { useState } from "react";

export default function App (){
const [advice , setAdvice] = useState("");
const [count, setCount] = useState(0)

 async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  setAdvice(data.slip.advice);
  setCount((c)=> c +1)


 }
 
 useEffect(function () {
  getAdvice();
 }, []);

  return( 
  <div className="">
    <h1 className="bg-gray-400 text-cyan-300 text-center h-24  rounded-3xl ml-6 mr-6 mt-6 p-5 border-slate-900 border-2">{advice}</h1>
    <button onClick={getAdvice} className="bg-slate-800 rounded-xl text-cyan-200 w-32 mt-3 mb-3 p-3 border-2 border-slate-400">More Advice</button>  
    <Message count={count}/>
  </div>
  )
  
}
function Message(props){
  return(
    <p className="text-slate-950">You have read <strong>{props.count}</strong> Pieces of Advice</p>
  )
}