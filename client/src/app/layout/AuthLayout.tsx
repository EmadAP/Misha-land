import { Link, Outlet } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import authBanner from "@/assets/banner/authBanner.png";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";

export default function AuthLayout() {
  return (
    <main className="min-h-screen w-full">
      <MaxWidthWrapper>
        <div className="relative flex flex-row items-center justify-between gap-10">
          <Link
            to="/"
            className="absolute top-20 left-15  flex flex-row gap-2 items-center hover:underline hover:text-accent-30"
          >
            بازگشت به صفحه اصلی
            <FaArrowLeftLong />
          </Link>
          <div className="min-h-screen w-full md:w-1/2  flex items-center justify-center">
            <Outlet />
          </div>
          <img
            src={authBanner}
            alt="auth banner"
            className="hidden md:flex md:w-1/2 xl:w-2/3  h-screen object-contain"
          />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
