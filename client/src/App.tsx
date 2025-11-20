import { Route, Routes } from "react-router-dom";

import PublicLayout from "./app/layout/PublicLayout";
import HomePage from "./app/pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
