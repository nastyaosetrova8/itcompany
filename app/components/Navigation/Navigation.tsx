"use client";

import { useTranslations } from "use-intl";
import NavigationLink from "./NavigationLink";
import { Link, usePathname } from "@/i18n/routing";
import ArrowRight from "@/public/icons/arrow-right.svg";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Navigation = () => {
  const t = useTranslations("Navigation");
  const tSlogan = useTranslations("Slogan");
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <div className="fixed bottom-[34px] left-1/2 -translate-x-1/2 container z-100">
          <div className="flex items-center justify-between p-6 text-stone-950 bg-customTeal rounded-3xl">
            {/* className="fixed bottom-[34px] left-1/2 -translate-x-1/2 flex items-center justify-between p-6 text-stone-950 bg-customTeal rounded-3xl z-100" */}
            <div className="flex items-center gap-6">
              {/* <div className="w-12 h-12 rounded-full border border-white"> */}
              <LocaleSwitcher />
              {/* </div> */}
              <p className="font-semibold text-medium leading-relaxed text-white w-48">
                {tSlogan("slogan")}
              </p>
            </div>
            <Link
              className="flex gap-5 items-center justify-center p-3 pl-5 text-medium font-semibold bg-white rounded-full"
              href="/introduction"
            >
              {t("getStarted")}
              <span className="flex items-center justify-center w-7 h-7 bg-stone-950 text-white rounded-full">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <nav className="fixed bottom-[34px] left-1/2 -translate-x-1/2 flex justify-center p-2 text-white bg-customTeal rounded-full z-100">
          <NavigationLink href="/">{t("home")}</NavigationLink>
          <NavigationLink href="/introduction">
            {t("introduction")}
          </NavigationLink>
          <NavigationLink href="/mission">{t("mission")}</NavigationLink>
          <NavigationLink href="/services">{t("services")}</NavigationLink>
          <NavigationLink href="/culture">{t("culture")}</NavigationLink>
          <NavigationLink href="/clients">{t("clients")}</NavigationLink>
        </nav>
      )}
    </>
  );
};

export default Navigation;

// background: rgba(28, 133, 255, 0.5);
//border: 1px solid rgba(28, 133, 255, 0.5);

// bg - teal - 600;
// rgb(38, 152, 165)
