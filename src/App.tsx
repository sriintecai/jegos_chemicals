import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import Home from "./Pages/LandingPage/Home";
import CheProducts from "./Pages/ChemicalProducts/CheProducts";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home/>} />
          <Route path="products" element={<CheProducts />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;