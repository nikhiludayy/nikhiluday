import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g8u7b4w", // Replace with your EmailJS service ID
        "template_lkfxaip", // Replace with your EmailJS template ID
        form.current,
        "fHmWMX1OooW0w8KIC" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="scale-90 overflow-hidden mb-16">
      <div className="text-white p-6 flex flex-col md:flex-row gap-6">
        {/* Left Panel */}
        <div className="bg-white text-black rounded-lg p-6 md:w-1/3 shadow-lg">
          <h2 className="text-2xl font-bold">
            How can we help?
            <br />
            Let’s work together.
          </h2>
          <p className="mt-4 text-sm">
            Working together takes some practice to get in sync. <br />
            But once we find our rhythm, the result can be magical.
          </p>
        </div>

        {/* Right Panel */}
        <div className="bg-gray-800 rounded-lg p-6 md:w-2/3 shadow-lg">
          <form ref={form} onSubmit={sendEmail}>
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full mb-4 p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            ></textarea>

            {/* File Upload */}
            {/* <input
            type="file"
            name="file"
            className="mb-4 w-full p-3 rounded-md bg-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-white"
          /> */}

            {/* Success Message */}
            {submitted && (
              <div className="text-green-400 text-sm mb-4">
                ✅ Your message has been sent!
              </div>
            )}

            {/* Footer */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-gray-400">
                Hate contact forms? <br className="md:hidden" />
                <a
                  href="mailto:nikhiluday0823@gmail.com"
                  className="text-white underline"
                >
                  nikhiluday0823@gmail.com
                </a>
              </p>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
              >
                Send message →
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}
