 "use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function Navbar() {
  const { isAuthenticated } = useKindeBrowserClient();

  return (
    <nav className="min-h-screen bg-gray-900 text-white py-8 px-6 flex flex-col justify-between m-5 rounded-xl min-w-[160px]">
      {!isAuthenticated ? (
        <Link href="/login" className="text-white hover:text-gray-400">
          Login
        </Link>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {/* <span>{user?.email ?? " "}</span> */}
            <Link href="/dashboard" className="text-white hover:text-gray-400">
              Dashboard
            </Link>
            {/* <Link href="/menu" className="text-white hover:text-gray-400">
              Menu
            </Link> */}
            {/* <Link href="/profile" className="text-white hover:text-gray-400">
              Profile
            </Link> */}
            <Link href="/brief  " className="text-white hover:text-gray-400">
              Brief
            </Link>
            <Link href="/meetings" className="text-white hover:text-gray-400">
              Reuniones
            </Link>
            <Link href="/billing" className="text-white hover:text-gray-400">
              Facturación
            </Link>
            <Link href="/about" className="text-white hover:text-gray-400">
              Sobre el portal
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <LogoutLink className="text-white hover:text-gray-400">
              Logout
            </LogoutLink>
          </div>
        </>
      )}
    </nav>
  );
}
