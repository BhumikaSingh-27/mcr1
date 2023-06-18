import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" elements={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
