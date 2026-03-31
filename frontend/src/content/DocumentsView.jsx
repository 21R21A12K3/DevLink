// src/components/content/DocumentsView.jsx
import React, { useState, useEffect } from "react";
import { getDocuments } from "../api/apiService";

const DocumentsView = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const handleLoading = async () => {
    const res = await getDocuments();
    if(!res.success){
      console.error("Error fetching documents:", res.error);
      return;
    }
    const data = res.data;
    setData(data);
    console.log("Documents fetched successfully:", data);
  };
  useEffect(() => {
    handleLoading();
  }, []);
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">Documents</h2>
      <p className="text-sm text-slate-400 mb-4">
        Showing documents for search:{" "}
        <span className="font-mono text-slate-200">
          {searchTerm || "No Search"}
        </span>
      </p>

      <div>
        {data.map((doc) => (
          <div
            key={doc.id}
            className="border border-slate-800 rounded-lg p-4 mb-3 bg-slate-900/60 hover:bg-slate-900 transition"
          >
            <div className="flex items-start gap-3">
              {/* Favicon */}
              {doc.favicon && (
                <img
                  src={doc.favicon}
                  alt={doc.title}
                  className="w-8 h-8 rounded border border-slate-700"
                />
              )}

              <div className="flex-1">
                {/* Title */}
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-50 hover:text-indigo-400"
                >
                  {doc.title}
                </a>

                {/* Description */}
                {doc.description && (
                  <p className="text-xs text-slate-400 mt-1">
                    {doc.description}
                  </p>
                )}

                {/* URL */}
                <p className="text-[11px] text-slate-500 mt-2 truncate">
                  {doc.url}
                </p>

                {/* Footer: metadata */}
                <div className="flex items-center justify-between mt-3 text-[11px] text-slate-500">
                  <span>
                    Added: {new Date(doc.createdAt).toLocaleDateString()}
                  </span>

                  <span className="uppercase px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-400">
                    {doc.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsView;
