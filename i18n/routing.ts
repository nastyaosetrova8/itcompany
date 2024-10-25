import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

// --------
// export const locales = ["en", "uk"] as const;
// --------

export const routing = defineRouting({
  locales: ["en", "uk"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    // "/pathnames": {
    //   en: "/pathnames",
    //   uk: "/шляхи",
    // },
  },
});

// export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// --------
// export const localePrefix: LocalePrefix<typeof locales> = "always";
// --------

export const { Link, redirect, usePathname, useRouter } =
  // getPathname,
  createSharedPathnamesNavigation(routing);