import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GridPrime } from "./pages/gridReactPrime/tableList";
import { GridMaterial } from "./pages/gridMaterialUi/tableList";
import { Header } from "./shared/header";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<GridPrime />} />
        <Route path="/materialui" element={<GridMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}
