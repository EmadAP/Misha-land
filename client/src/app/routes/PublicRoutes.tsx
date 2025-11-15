import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PublicLayout from "../layout/PublicLayout";

export const PublicRoutes = (
  <Route element={<PublicLayout />}>
    <Route index element={<HomePage />} />
    {/* <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} /> */}
  </Route>
);
