import { Outlet, Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
function Layout({ onLogoClick = () => { } }) {
  return (
    <div className="h-screen bg-orange">
      <header className="bg-orange shadow-lg text-white h-20 flex items-center fixed w-full">
        <Link
          to="/"
          className="mx-auto"
          onClick={onLogoClick}
        >
          <Logo />
        </Link>
      </header>
      <main className="bg-orange pt-20 h-screen flex flex-col text-2xl md:text-3xl">
        <div className="p-6 md:p-16 flex-grow flex flex-col w-100 max-w-screen-md mx-auto h-full overflow-hidden">
          <Outlet />
          <div className="bg-orange h-24"></div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
