import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GridPrime } from './pages/gridReactPrime/';
import { GridMaterial } from './pages/gridMaterialUi/';
import { Header } from './components/header';

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