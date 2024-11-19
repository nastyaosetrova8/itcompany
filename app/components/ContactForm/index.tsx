"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { sendEmail } from "@/utils/send-email";
// import Checkbox from "../Checkbox";
import dynamic from "next/dynamic";
import { IContacts } from "@/helpers/interfaces";

interface Props {
  t: IContacts;
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC<Props> = ({ t }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });
  console.log("🚀 ~ errors:", errors);

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValue(name as keyof FormData, value);

    const cookieData = getCookie("contactForm");

    const parsedCookieData = cookieData ? JSON.parse(cookieData as string) : {};

    setCookie(
      "contactForm",
      JSON.stringify({ ...parsedCookieData, [name]: value })
    );
  };

  // useEffect(() => {
  //   const savedData = getCookie("contactForm");
  //   if (savedData) {
  //     const parsedData = JSON.parse(savedData as string);
  //     for (const key in parsedData) {
  //       setValue(key as keyof FormData, parsedData[key]);
  //     }
  //   }
  // }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // const response =
      await sendEmail(data);
      reset();
      deleteCookie("contactForm");
    } catch (err: any) {
      setIsError(true);
    }
  };

  return (
    <>
      <div className="flex flex-[0.4] flex-col gap-8 py-12 px-16 bg-customTeal rounded-3xl">
        <h2 className="mainDescriptionCl">{t.title}</h2>
        <form
          className="flex flex-col items-center placeholder:text-stone-700"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <div className="flex gap-7 w-full"> */}
          <div className="w-full">
            <input
              className="inputsCl w-full h-10"
              type="text"
              id="name"
              placeholder={t.placeholderName}
              {...register("name", {
                required: `${t.required}`,
                minLength: {
                  value: 2,
                  message: `${t.requiredName}`,
                },
                validate: {
                  isNotEmpty: (value) => {
                    if (value.trim() === "") {
                      return `${t.requiredName}`;
                    }
                    return true;
                  },
                },
              })}
              // onChange={handleChange}
            />
            <div className="errorWrapperCl">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </div>
          <div className="w-full">
            <input
              className="inputsCl w-full h-10"
              type="email"
              id="email"
              placeholder={t.placeholderEmail}
              {...register("email", {
                required: `${t.required}`,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: `${t.requiredEmail}`,
                },
              })}
              // onChange={handleChange}
            />

            <div className="errorWrapperCl">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
          </div>
          {/* </div> */}
          <div className="w-full">
            <textarea
              className="inputsCl w-full h-28 pt-3 resize-none"
              id="message"
              placeholder={t.placeholderMessage}
              {...register("message", {
                required: `${t.required}`,
                minLength: {
                  value: 15,
                  message: `${t.requiredMessage} `,
                },
              })}
              // onChange={handleChange}
            />
            <div className="errorWrapperCl">
              {errors?.message && <p>{errors?.message?.message || "Error!"}</p>}
            </div>
          </div>
          {/* <Checkbox
            label={t.acceptTerms}
            name="acceptTerms"
            register={register}
            required={true}
          /> */}

          {/* className="inline-block px-6 py-2 text-white bg-customTeal transition-all hover:bg-customTeal-accent hover:-translate-y-1 hover:scale-110 rounded-3xl" */}

          <button
            type="submit"
            disabled={!isValid}
            className="flex justify-center items-center max-w-fit py-3 px-12 text-xl border-transparent  bg-neutral-100 rounded-full scale-100
            hover:scale-110 focus:scale-110 
            transition-all
            "
          >
            {loading ? "Sending..." : `${t.button}`}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
