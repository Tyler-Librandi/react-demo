import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
