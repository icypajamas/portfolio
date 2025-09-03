import React from "react";
import { motion } from "motion/react";
import { GlowingEffect } from "./ui/glowing-effect";
import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        alert("Message sent!");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div
      id="contacts"
      className="flex flex-col pt-8 pb-8 w-full justify-center items-center bg-gradient-to-r from-slate-900 via-purple-800 to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="flex flex-col gap-8 w-23/24 bg-transparent border border-gray-700 rounded-xl p-4 lg:p-10 items-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-4xl text-neutral-200 font-bold">
            Send me a Mail!
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/5 border border-gray-700 rounded-xl p-8 relative">
          <GlowingEffect
            blur={0}
            borderWidth={8}
            spread={50}
            glow={true}
            disabled={false}
            proximity={32}
            inactiveZone={0.01}
          />
          <form onSubmit={onSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-white">Full Name:</h2>
              <input
                type="text"
                className="p-2 border rounded-md border-purple-600 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white">Your Email:</h2>
              <input
                type="text"
                className="p-2 border rounded-md border-purple-600 text-white placeholder:text-neutral-300"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-white">Your Message:</h2>
              <textarea
                type="text"
                rows={4}
                className="p-2 border rounded-md border-purple-600 text-white placeholder:text-neutral-300"
                placeholder="Type your message here..."
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-3xl w-32 text-lg p-3 text-white bg-gradient-to-r from-slate-900 to-purple-800 hover:scale-120 cursor-pointer shadow-2xl"
              >
                _send_
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
