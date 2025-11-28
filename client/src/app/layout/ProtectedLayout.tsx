import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import ProtectedLayoutBanner from "@/components/template/protectedTemp/ProtectedLayoutBanner";

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
        <div className="flex flex-col h-full items-center justify-between gap-10 py-18">
          <ProtectedLayoutBanner />
          <MaxWidthWrapper>
            <Outlet />
          </MaxWidthWrapper>
        </div>
      </main>
      <Footer />
    </>
  );
}
