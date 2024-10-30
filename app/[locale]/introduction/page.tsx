import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const IntroductionPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Introduction");

  return (
    <section className="bg-neutral-300 ">
      <div className="container relative flex justify-center items-center bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat w-full h-screen">
        <div className="absolute top-[7%] left-[6%] bottom-[18%] xl:max-w-[590px] w-full px-16 pt-11 pb-2  bg-neutral-100 rounded-3xl overflow-y-auto scroll-containerCl">
          <p className="subTitleCl">{t("introduction") || ""}</p>
          <h1 className="titleCl ">{t("title") || ""}</h1>
          <p className="descriptionCl">{t("p1") || ""}</p>
          <p className="descriptionCl">{t("p2") || ""}</p>
          <p className="descriptionCl">{t("p3") || ""}</p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default IntroductionPage;
