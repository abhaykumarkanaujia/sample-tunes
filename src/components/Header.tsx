"use client";

import { refreshAuthToken } from "@/lib/services/auth-token";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    refreshAuthToken();
  }, []);
  return <header className="min-h-16 bg-primary-accent1"></header>;
};

export default Header;
