import React from "react";
import { Link } from "react-router-dom";

function FooterPages() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 items-center justify-between gap-6">
      <Link
        to="#"
        className="mx-auto text-sm hover:underline hover:text-accent-30"
      >
        سوالات متداول
      </Link>
      <Link
        to="#"
        className="mx-auto text-sm hover:underline hover:text-accent-30"
      >
        چرا میشا لند
      </Link>
      <Link
        to="#"
        className="mx-auto text-sm hover:underline hover:text-accent-30"
      >
        تماس با ما
      </Link>
      <Link
        to="#"
        className="mx-auto text-sm hover:underline hover:text-accent-30"
      >
        راهنمای خرید و مقررات
      </Link>
      <Link
        to="#"
        className="mx-auto text-sm hover:underline hover:text-accent-30"
      >
        شرایط گارانتی
      </Link>
      <Link
        to="#"
        className="mx-auto text-sm hover:underline hover:text-accent-30"
      >
        درباره ما
      </Link>
    </div>
  );
}

export default FooterPages;
