"use client";
import React from "react";

const GlobalError = () => {
  return (
    <html>
      <body>
        <div className="flex flex-col ">
          Something Went Wrong
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
