import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const ProjectsPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  //   const t = await getTranslations("Projects");

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-300">
      <div className="flex justify-end items-center bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat h-screen xl:max-w-[90%] w-full">
        <div className="container xl:h-800 xl:w-1280 rounded-3xl"></div>
      </div>
    </section>
  );
};

export default ProjectsPage;
