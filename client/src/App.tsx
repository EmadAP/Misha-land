import { Route, Routes } from "react-router-dom";

import PublicLayout from "./app/layout/PublicLayout";
import HomePage from "./app/pages/HomePage";
import AuthLayout from "./app/layout/AuthLayout";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ProtectedLayout from "./app/layout/ProtectedLayout";
import DashboardPage from "./app/pages/protectedPages/DashboardPage";
import OrdersPage from "./app/pages/protectedPages/OrdersPage";
import AddressesPage from "./app/pages/protectedPages/AddressesPage";
import AccountDetailsPage from "./app/pages/protectedPages/AccountDetailsPage";
import WishlistPage from "./app/pages/protectedPages/WishlistPage";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="/my-account/dashboard" element={<DashboardPage />} />
        <Route path="/my-account/orders" element={<OrdersPage />} />
        <Route path="/my-account/addresses" element={<AddressesPage />} />
        <Route
          path="/my-account/account-details"
          element={<AccountDetailsPage />}
        />
        <Route path="/my-account/wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}

export default App;
