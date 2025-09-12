'use client'

import { useTheme } from "@/components/themeProvider";
import React from "react";

const Clientside = () => {
  const theme = useTheme();
  return <div style={{ color: theme.color.primary }}>Clientside</div>;
};

export default Clientside;
