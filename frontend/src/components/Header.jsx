import React from "react";

const Header = ({ title, searchTerm, onSearchChange }) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        <h1 className="text-lg md:text-2xl font-semibold tracking-tight">
          {title}
          <span className="ml-4 text-xs md:text-sm text-white font-normal">
            Developer Resource Intelligence
          </span>
        </h1>

        <div className="flex-1 flex justify-end">
          <div className="w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search resources by title, tag, or keyword..."
              className="w-full rounded-lg bg-slate-800/80 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
