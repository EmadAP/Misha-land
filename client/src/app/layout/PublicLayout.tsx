import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";

export default function PublicLayout() {
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
