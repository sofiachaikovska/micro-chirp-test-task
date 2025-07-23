"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(Cookies.get("token") || null);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(null);
    router.push("/login");
  };

  return (
    <div className="w-full mx-auto p-4">
      <nav className="flex items-center gap-10 mb-6 border-b pb-4 px-12 text-lg">
        <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
          Home
        </Link>

        {!token && (
          <>
            <Link
              href="/login"
              className={pathname === "/login" ? "font-bold" : ""}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={pathname === "/register" ? "font-bold" : ""}
            >
              Register
            </Link>
          </>
        )}

        {token && (
          <button
            onClick={handleLogout}
            className="ml-auto px-3 py-1 text-lg bg-gray-200 rounded hover:bg-red-400 hover:text-white dark:bg-gray-700 dark:hover:bg-red-500 cursor-pointer transition-colors duration-200"
          >
            Logout
          </button>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
}
