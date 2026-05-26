import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import PropertyClickedSection from "./components/PropertyClickedSection";
import Home from "./components/homepage/Home";
import Layout from "./components/Layout";
import AllProperties from "./components/AllProperties";

function App() {
  return (
    <BrowserRouter basename="/real-estate">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyClickedSection />} />

          <Route path="/properties/:id" element={<AllProperties />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
