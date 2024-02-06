import React from "react";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center">
      <div className="flex items-center justify-start text-2xl">
        <span className="text-white">Event</span>
        <span className="font-bold text-blue-500">Badge</span>
      </div>
      <div className="flex">
        <a
          className="py-2 px-4 rounded-xl bg-white shadow-blue"
          href="/sign-in"
        >
          Sign In
        </a>
        <a
          className="ml-6 py-2 px-4 rounded-xl bg-blue-500 text-white"
          href="/sign-up"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
