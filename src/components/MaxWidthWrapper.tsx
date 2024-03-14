import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto p-8 max-w-[1440px]", className)}>{children}</div>
  );
};

export default MaxWidthWrapper;
