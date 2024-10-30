"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
// import { useParams } from "next/navigation";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label?: string;
};

const LocaleSwitcherSelect = ({ children, defaultValue, label }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  // console.log("🚀 ~ LocaleSwitcherSelect ~ pathname:", pathname);
  // const params = useParams();
  // console.log("🚀 ~ LocaleSwitcherSelect ~ params:", params);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // const nextLocale = e.target.value.toLowerCase();
    const nextLocale = e.target.value as Locale;
    // console.log("🚀 ~ onSelectChange ~ nextLocale:", nextLocale);
    // router.replace(`/${locale}`);
    // const currentLocale = params.locale as Locale;
    startTransition(() => {
      router.replace(
        // { pathname, params },
        // { locale: nextLocale }
        pathname,
        { locale: nextLocale }
      );
    });
  };

  return (
    <label
      className={clsx(
        "relative text-white",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none py-5 pl-3 pr-6 bg-transparent border border-white rounded-full outline-none"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-3 top-[17px]">⌄</span>
    </label>
  );
};

export default LocaleSwitcherSelect;

//  ts-expect-error -- TypeScript will validate that only known `params`
//      are used in combination with a given `pathname`. Since the two will
//      always match for the current route, we can skip runtime checks.
