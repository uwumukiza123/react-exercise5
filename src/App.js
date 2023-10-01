import dataFile from "./dataFile";
import "./App.css";

function App() {
  const list = dataFile.map((item) => {
    return <li>{item}</li>;
  });

  return <div className="list">{list}</div>;
}

export default App;
