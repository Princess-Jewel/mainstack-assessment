import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Dashboard from "./pages/dashboard/dashboard";
import Item1 from "./pages/item1/item1";
import Item2 from "./pages/item2/item2";
import Item3 from "./pages/item3/item3";
import Item4 from "./pages/item4/item4";
import Item5 from "./pages/item5/item5";
import Item6 from "./pages/item6/item6";
import Item7 from "./pages/item7/item7";
import Item8 from "./pages/item8/item8";
import "./App.css";

function App() {
  return (
   
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/item1" element={<Item1 />} />
            <Route path="/item2" element={<Item2 />} />
            <Route path="/item3" element={<Item3 />} />
            <Route path="/item4" element={<Item4 />} />
            <Route path="/item5" element={<Item5 />} />
            <Route path="/item6" element={<Item6 />} />
            <Route path="/item7" element={<Item7 />} />
            <Route path="/item8" element={<Item8 />} />
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
