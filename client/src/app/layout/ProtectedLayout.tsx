import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";

export default function ProtectedLayout() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
