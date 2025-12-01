// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ selectedType, onSelect }) => {
  const items = [
    { id: "documents", label: "Documents" },
    { id: "git", label: "Git Repos" },
    { id: "snippets", label: "Code Snippets" },
    { id: "youtube", label: "YouTube Videos" },
  ];

  return (
    <aside className="w-52 md:w-64 border-r border-slate-800 bg-slate-900/70 h-full">
      <nav className="p-3 md:p-4 space-y-2">
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          Resource Types
        </p>
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = selectedType === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition
                    ${
                      isActive
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/50"
                        : "text-slate-300 hover:bg-slate-800/80 hover:text-slate-50"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
