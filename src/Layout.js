import { Outlet, Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";

function Layout({ onLogoClick = () => {} }) {
  return (
    <div className="min-h-screen bg-orange">
      <header className="bg-orange shadow-lg text-white h-20 flex items-center fixed w-full">
        <Link
          to="/"
          className="mx-auto"
          onClick={(e) => {
            window.confirm("Bist du sicher, dass du von vorn starten möchtest?")
              ? onLogoClick()
              : e.preventDefault();
          }}
        >
          <Logo />
        </Link>
      </header>
      <main className="bg-orange pt-20 h-screen flex flex-col text-2xl md:text-3xl">
        <div className="p-6 md:p-16 flex-grow flex flex-col">
          <Outlet />
        </div>
      </main>
      <div className="hidden h-32 w-full fixed bottom-0 bg-orange"></div>
    </div>
  );
}

export default Layout;
