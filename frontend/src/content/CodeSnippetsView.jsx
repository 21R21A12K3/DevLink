// src/components/content/CodeSnippetsView.jsx
import React, { useState, useEffect } from "react";

const CodeSnippetsView = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const handleLoading = async () => {
    const res = await fetch("http://localhost:5000/api/codesnippets");
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
      <h2 className="text-xl font-semibold mb-3">Code Snippets</h2>
      <p className="text-sm text-slate-400 mb-4">
        Filter:{" "}
        <span className="font-mono text-slate-200">
          {searchTerm || "No Search"}
        </span>
      </p>

      <div>
        {data.map((snippet) => (
          <div
            key={snippet.id}
            className="border border-slate-800 rounded-lg p-4 mb-4 bg-slate-900/60 hover:bg-slate-900 transition"
          >
            {/* Title */}
            <h3 className="text-sm font-semibold text-slate-50">
              {snippet.title}
            </h3>

            {/* Language */}
            {snippet.language && (
              <span className="inline-block mt-2 px-2 py-0.5 text-[11px] rounded-full bg-slate-800/80 border border-slate-700 text-slate-400">
                {snippet.language}
              </span>
            )}

            {/* Description */}
            {snippet.description && (
              <p className="text-xs text-slate-400 mt-2">
                {snippet.description}
              </p>
            )}

            {/* Code Block */}
            <pre className="mt-3 p-3 rounded-md bg-slate-950 text-xs text-slate-300 overflow-x-auto border border-slate-800">
              <code>{snippet.code}</code>
            </pre>

            {/* Footer Metadata */}
            <div className="flex items-center justify-between mt-3 text-[11px] text-slate-500">
              <span>
                Added: {new Date(snippet.createdAt).toLocaleDateString()}
              </span>
              <span className="uppercase px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-400">
                {snippet.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodeSnippetsView;
