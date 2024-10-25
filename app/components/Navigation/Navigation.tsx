"use client";

import { useTranslations } from "use-intl";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
  const t = useTranslations("Navigation");

  return (
    <header className="bg-customTeal">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
          {/* <NavigationLink href="/introduction">
            {t("introduction")}
          </NavigationLink>
          <NavigationLink href="/mission">{t("mission")}</NavigationLink>
          <NavigationLink href="/services">{t("services")}</NavigationLink>
          <NavigationLink href="/culture">{t("culture")}</NavigationLink>
          <NavigationLink href="/clients">{t("clients")}</NavigationLink> */}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

// background: rgba(28, 133, 255, 0.5);
//border: 1px solid rgba(28, 133, 255, 0.5);

// bg - teal - 600;
// rgb(38, 152, 165)
