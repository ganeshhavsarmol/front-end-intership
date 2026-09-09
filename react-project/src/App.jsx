import React, { useState } from "react";
import "./App.css";
function App() {
  const [num, setNum] = useState(0);
  const [outValue, setOutValue] = useState("");
  const [nameValue1, setNameValue1] = useState("");
  const [nameValue2, setNameValue2] = useState("");
  const[inputValues,setInputValues] = useState({
    inputValue:"",
    inputValue2:"",
  });
  const changeValue =(e,text)=>{
    if (text==="first"){
      setInputValues({...inputValues,inputValue: e.target.value});
    } else if(text==="second"){
      setInputValues({...inputValues,inputValue2: e.target.value});
    }
  };

  return (
    <>
    {/* NUMBER COUNTER  */}
      <div style={{ textAlign: "center" }}>
        <h1>Number Counter</h1>
        <h1>{num}</h1>
        <div id="btn">
          {" "}
          <button
            onClick={() => {
              if (num > 0) {
                setNum(num - 1);
              }
            }}
          >
            <a> Decrement</a>
          </button>
          <button
            onClick={() => {
              setNum(num + 1);
            }}
          >
            <a>Increment</a>
          </button>
        </div>
        <hr />
      </div>
{/* LIVE NAME SYNCING  */}
      <div style={{ textAlign: "center" }}>
        <h1>Live Text Syncing</h1>
        <h2>{outValue}</h2>
        <input
          type="Text"
          placeholder="Enter your Name"
          value={outValue}
          onChange={(e) => {
            setOutValue(e.target.value);
          }}
        />
        <hr />
      </div>
      {/* SIMPLE FORM  */}
      <div style={{ textAlign: "center" }}>
        <h1>Simple Form</h1>
        <div id="left">
          <input
            type="Text"
            placeholder="Enter your Name"
            value={nameValue1}
            onChange={(e) => {
              setNameValue1(e.target.value);
            }}
          />
          <h2>{nameValue1}</h2>
          <input
            type="email"
            placeholder="Enter your Email"
            value={nameValue2}
            onChange={(e) => {
              setNameValue2(e.target.value);
            }}
          />{" "}
          <h2>{nameValue2}</h2>
        </div>

        <hr />
      </div>
   <div style={{ textAlign: "center" }}>
        <h1>Object Use</h1>
        <h2>{inputValues.inputValue}{inputValues.inputValue2}</h2>
        <input
          type="Text"
          placeholder="Enter first Name"
          value={inputValues.inputValue}
          onChange={(e)=>changeValue(e,"first")}
        />
         <input
          type="Text"
          placeholder="Enter last Name"
          value={inputValues.inputValue2}
          onChange={(e) => {
            changeValue(e,"second")
          }}
        />
        <hr />
      </div>

      
    </>
  );
}

export default App;