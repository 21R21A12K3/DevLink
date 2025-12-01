import React, { useState, useEffect } from "react";

const YoutubeVideosView = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const handleLoading = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/youtube-videos");
      if (res.ok) {
        console.log("Successfully Done");
      }
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleLoading();
  }, []);
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">YouTube Videos</h2>
      <p className="text-sm text-slate-400 mb-4">
        Search:{" "}
        <span className="font-mono text-slate-200">
          {searchTerm || "No Search"}
        </span>
      </p>

      <div>
        {data.map((vid) => (
          <div
            key={vid.id}
            className="border border-slate-800 rounded-lg p-4 mb-4 bg-slate-900/60 hover:bg-slate-900 transition"
          >
            <div className="flex gap-4">
              {/* Thumbnail */}
              {vid.thumbnail && (
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-40 h-24 object-cover rounded-md border border-slate-700"
                />
              )}

              <div className="flex-1">
                {/* Title */}
                <a
                  href={vid.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-50 hover:text-indigo-400"
                >
                  {vid.title}
                </a>

                {/* Channel */}
                <p className="text-xs text-slate-400 mt-1">{vid.channel}</p>

                {/* Description */}
                {vid.description && (
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {vid.description}
                  </p>
                )}

                {/* Footer section */}
                <div className="flex items-center justify-between mt-3 text-[11px] text-slate-500">
                  <span>
                    Added: {new Date(vid.createdAt).toLocaleDateString()}
                  </span>

                  <span className="uppercase px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-400">
                    {vid.type}
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

export default YoutubeVideosView;
