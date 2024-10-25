"use client";

import React, { ComponentProps } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import { Link } from "@/i18n/routing";

const NavigationLink: React.FC<ComponentProps<typeof Link>> = ({
  href,
  ...rest
}) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <div>
      <Link
        aria-current={isActive ? "page" : undefined}
        className={clsx(
          "inline-block p-2 text-red transition-colors",
          isActive ? "bg-customTealAccent" : "bg-transparent"
        )}
        href={href}
        {...rest}
      />
    </div>
  );
};

export default NavigationLink;
