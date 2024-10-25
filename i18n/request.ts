import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locale)) notFound();

  return {
    // messages: (await import(`../messages/${locale}.json`)).default,
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../messages/en.json")
        : import(`../messages/${locale}.json`))
    ).default,
  };
});

// ------------------------

// const localMessages = (await import(`../messages/${locale}.json`)).default;
// const defaultMessages = (await import(`../messages/en.json`)).default;
