import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const IntroductionPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Introduction");
  const tScroll = await getTranslations("Scroll");

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-300">
      {/* Next 2 div and the 4-th can be removed & everything can be turned back! The 3-d and 5-th to uncomment */}
      <div className="flex justify-end items-center h-screen xl:max-w-[90%] w-full bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat">
        <div className="xl:container absolute top-[50%] -translate-y-[50%] left-[6%] flex gap-11 justify-between h-[70%] w-[90%]  z-10">
          {/* <div className="container relative flex justify-end items-center h-screen bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat"> */}
          <div className="absolute left-[6%] xl:max-w-[700px] w-full xl:max-h-[700px] h-full bg-neutral-100 rounded-3xl z-10">
            {/* <div className="absolute top-[50%] -translate-y-[50%] left-[6%] xl:max-w-[700px] w-full xl:max-h-[700px] h-full bg-neutral-100 rounded-3xl z-10"> */}
            <div className="w-full h-full px-16 pt-16 pb-40 overflow-y-auto scroll-containerCl">
              {/* <div className="absolute top-[7%] left-[6%] bottom-[18%] xl:max-w-[590px] w-full px-16 pt-11 pb-40 bg-neutral-100 rounded-3xl overflow-y-auto scroll-containerCl"> */}
              <p className="subTitleCl">{t("introduction") || ""}</p>
              <h1 className="titleCl ">{t("title") || ""}</h1>
              <p className="descriptionCl">{t("p1") || ""}</p>
              <p className="descriptionCl">{t("p2") || ""}</p>
              <p className="descriptionCl">{t("p3") || ""}</p>
            </div>
            <div className="absolute right-0 bottom-0 rotate-90 -translate-y-[500%] translate-x-[20%]">
              <p className="before:content-[''] before:h-[1px] before:w-11 before:mr-3 flex items-center before:bg-stone-950">
                {tScroll("scroll") || ""}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:max-w-[75%] w-full h-full xl:-mr-[30px] ">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/introductionPage.mp4" type="video/mp4" />
            Ваш браузер не підтримує відтворення відео.
          </video>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default IntroductionPage;

// relative;
// before:absolute before:t-0.5 before:left-0
