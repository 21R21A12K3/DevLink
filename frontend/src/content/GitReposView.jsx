// src/components/content/GitReposView.jsx
import React, { useState, useEffect } from "react";

const GitReposView = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const handleLoading = async () => {
    const res = await fetch("http://localhost:5000/api/git");
    if (res.ok) {
      console.log("Successfully Done");
    }
    const data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    handleLoading();
  }, []);
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Git Repositories</h2>
      <p className="text-sm text-slate-400 mb-4">
        Search:{" "}
        <span className="font-mono text-slate-200">
          {searchTerm || "No Search"}
        </span>
      </p>

      <div>
        {data.map((repo) => (
          <div
            key={repo.id}
            className="border border-slate-800 rounded-lg p-4 mb-3 bg-slate-900/60 hover:bg-slate-900 transition"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              {repo.avatar && (
                <img
                  src={repo.avatar}
                  alt={repo.owner}
                  className="w-10 h-10 rounded-full border border-slate-700"
                />
              )}

              <div className="flex-1">
                {/* Repo name + link */}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-50 hover:text-indigo-400"
                >
                  {repo.fullName || repo.name}
                </a>

                {/* Description */}
                {repo.description && (
                  <p className="text-xs text-slate-400 mt-1">
                    {repo.description}
                  </p>
                )}

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 mt-2">
                  {repo.stars != null && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700">
                      ★ {repo.stars.toLocaleString()}
                    </span>
                  )}
                  {repo.language && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-800/80 border border-slate-700">
                      {repo.language}
                    </span>
                  )}
                  {repo.owner && <span>Owner: {repo.owner}</span>}
                </div>

                {/* Created time (optional) */}
                {repo.createdAt && (
                  <div className="flex items-center justify-between mt-3 text-[11px] text-slate-500">
                    <p className="text-[11px] text-slate-500 mt-1">
                      Added: {new Date(repo.createdAt).toLocaleDateString()}
                    </p>
                    <span className="uppercase px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-400">
                      {repo.type}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitReposView;
