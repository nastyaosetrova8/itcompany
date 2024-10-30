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
    <>
      <Link
        aria-current={isActive ? "page" : undefined}
        className={clsx(
          "inline-block whitespace-nowrap py-3 px-5 text-xs transition-colors rounded-full",
          isActive ? "bg-customTeal-accent" : "bg-transparent"
        )}
        href={href}
        {...rest}
      />
    </>
  );
};

export default NavigationLink;
