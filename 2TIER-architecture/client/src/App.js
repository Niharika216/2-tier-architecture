
import "./App.css";
import { useState } from "react";

function App() {
  const [marks, setMarks] = useState([]);
  let getDataFromServer = async () => {
    let reqOptions = { method: "GET" };
    let JSONData = await fetch("http://localhost:1919/results", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    setMarks(JSOData);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          getDataFromServer();
        }}
      >
        Marks
      </button>
      {marks.map((ele, i) => {
        return(
          <div className="detailsDiv*">
            <h2>{ele.name}</h2>
            {ele.marksList.map((ele, i) => (
            <p key={i}>{ele}</p>
          ))}
          </div>
        );
      })}
    </div>
  );
}

export default App;
