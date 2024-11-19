import ContactForm from "@/app/components/ContactForm";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const ContactsPage: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Contacts");

  const tContact = {
    title: t("title"),
    placeholderName: t("placeholderName"),
    placeholderEmail: t("placeholderEmail"),
    placeholderMessage: t("placeholderMessage"),
    required: t("required"),
    requiredName: t("requiredName"),
    requiredEmail: t("requiredEmail"),
    requiredMessage: t("requiredMessage"),
    acceptTerms: t("acceptTerms"),
    button: t("button"),
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-300">
      <div className="flex items-center h-screen xl:max-w-[90%] w-full bg-[url('/images/containerBGSecondary3.webp')] bg-cover bg-center bg-no-repeat">
        {/* justify-end */}
        <div className="xl:container relative flex gap-11 justify-between h-[70%] w-[90%] xl:pl-14 xl:pr-14 bg-neutral-100 rounded-3xl ">
          <ContactForm t={tContact} />
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
