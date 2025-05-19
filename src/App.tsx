import { Routes, Route } from "react-router-dom";
import Home from "./page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
