import { Route, Routes } from "react-router-dom";

import PublicLayout from "./app/layout/PublicLayout";
import HomePage from "./app/pages/HomePage";
import AuthLayout from "./app/layout/AuthLayout";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ProtectedLayout from "./app/layout/ProtectedLayout";
import DashboardPage from "./app/pages/protectedPages/DashboardPage";

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
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
