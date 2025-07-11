import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
