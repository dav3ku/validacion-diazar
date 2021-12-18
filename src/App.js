import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Index from "./Pages/Index";
import Validate from "./Pages/Validate";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/validate">Validate</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="validate" element={<Validate />}>
          <Route path=":ID" element={<Validate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
