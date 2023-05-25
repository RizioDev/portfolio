import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bh8v48p",
        "template_94685s7",
        form.current,
        "Tsa71ypc2z1HpdXgP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setShowPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            {t("contact.contact")}
          </p>
          <p className="text-gray-300 py-4">{t("contact.description")}</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          {t("contact.lets")}
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h2 className="text-2xl font-bold">{t("form.ok")}</h2>
            </div>
            <p className="text-gray-700 mb-4">{t("form.soon")}</p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setShowPopup(false);
                  resetForm();
                }}
                className="text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-800"
              >
                {t("form.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
