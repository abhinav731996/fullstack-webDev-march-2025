"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleLogout = () => {

    document.cookie = "login=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    window.location.href = "/signin";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Logout Page</h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Page;