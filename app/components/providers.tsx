"use client";

import { ReactFlowProvider } from "@xyflow/react";
import { ReactNode } from "react";

const Providers = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
};

export default Providers;
