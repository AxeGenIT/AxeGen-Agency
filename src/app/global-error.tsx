"use client";

import React from "react";

export default function GlobalError() {
  return (
    <html>
      <body>
        <div>
          <h2>Something went wrong</h2>

          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}