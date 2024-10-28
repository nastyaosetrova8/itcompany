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

// import { getRequestConfig } from "next-intl/server";
// import { routing } from "./routing";

// export default getRequestConfig(async ({ requestLocale }) => {
//   // This typically corresponds to the `[locale]` segment
//   let locale = await requestLocale;

//   // Ensure that the incoming `locale` is valid
//   if (!locale || !routing.locales.includes(locale as any)) {
//     locale = routing.defaultLocale;
//   }

//   return {
//     locale,
//     messages: (
//       await (locale === "en"
//         ? // When using Turbopack, this will enable HMR for `en`
//           import("../messages/en.json")
//         : import(`../messages/${locale}.json`))
//     ).default,
//   };
// });
