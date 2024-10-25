import { MetadataRoute } from "next";
import { host } from "@/app/config";
import { Locale, routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry("/")];
  // getEntry("/pathnames");
}

// type Href = Parameters<typeof getPathname>[0]["href"];
type Href = string;

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      ),
    },
  };
}

function getUrl(href: Href, locale: Locale) {
  //   const pathname = getPathname({ locale, href });
  const pathname = href;
  return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
}
