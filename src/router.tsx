import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContasPagarListDT } from "./features/contas-a-pagar/pages/ContasPagarList";
import { GridMaterial } from "./features/contas-a-pagar/pages/gridMaterialUi/tableList";
import { Header } from "./shared/header";

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContasPagarListDT />} />
        <Route path="/materialui" element={<GridMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}
