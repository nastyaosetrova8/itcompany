"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { sendEmail } from "@/utils/send-email";
// import Checkbox from "../Checkbox";
import dynamic from "next/dynamic";
import { IContacts } from "@/helpers/interfaces";
import Сheck from "@/public/icons/check.svg";

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
    // } = useForm<FormData>({ mode: "onChange" });
  } = useForm<FormData>({ mode: "all" });

  console.log("🚀 ~ errors:", errors);

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      // const response =
      await sendEmail(data);
      reset();
      setLoading(false);
      deleteCookie("contactForm");
    } catch (err: any) {
      // setIsError(true);
      console.log(err);
      setLoading(false);
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
              className="inputsCl h-10 capitalize"
              id="name"
              type="text"
              placeholder={t.placeholderName}
              {...register("name", {
                required: `${t.required}`,
                minLength: {
                  value: 2,
                  message: `${t.requiredName}`,
                },
                // validate: {
                //   isNotEmpty: (value) => {
                //     if (value.trim() === "") {
                //       return `${t.requiredName}`;
                //     }
                //     return true;
                //   },
                // },
                validate: {
                  isNotEmpty: (value) =>
                    value.trim() !== "" || `${t.requiredName}`,
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
              className="inputsCl h-10"
              id="email"
              type="email"
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
              className="inputsCl h-28 pt-3 resize-none"
              autoCapitalize="sentences"
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

          <div className="group ">
            <input
              id="accept"
              type="checkbox"
              // name="acceptTerms"
              // required={true}
              className="checkboxCl peer"
              {...register("accept", {
                required: `${t.requiredAccept}`,
              })}
              aria-required={`${t.requiredAccept}` ? "true" : "false"}
            />
            <label
              className="labelCheckCl descriptionCl text-neutral-100"
              htmlFor="accept"
            >
              <span className="iconCheckWrapCl">
                <Сheck className="iconCheckCl" />
              </span>
              {t.acceptTerms}
            </label>

            {/* </div> */}
          </div>

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
