import Navbar from "@/modules/home/components/navbar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-background
        dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)]
        dark:bg-[size:16px_16px]
        bg-[radial-gradient(#daddee2_1px,transparent_1px)]
        bg-[size:16px_16px]"
      />

      {/* Navbar goes here */}

      {/* Page content */}
      <div className="flex flex-1 flex-col px-4 pb-4">
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
