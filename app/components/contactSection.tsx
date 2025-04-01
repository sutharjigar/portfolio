"use client";
import {motion} from "framer-motion";
console.log(motion)
export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
    >
      <div className="flex items-center justify-between  w-full flex-col mb-auto mt-5">
        <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading mb-4">
          Get in Touch
        </h1>
        <input
          type="text"
          className="pl-4 p-2 border rounded-lg w-11/12 lg:w-[342px] text-sm outline-none mb-4"
          placeholder="Enter your name"
        ></input>
        <input
          type="text"
          className="pl-4 p-2 border rounded-lg w-11/12 lg:w-[342px] text-sm outline-none mb-4"
          placeholder="Enter your email"
        ></input>
        <textarea
          rows={5}
          className="pl-4 p-2 border rounded-lg w-11/12 lg:w-[342px] text-sm outline-none mb-4"
          placeholder="How can I help you?"
        ></textarea>
        <button className="text-white bg-black text-sm px-3 py-2 rounded-md relative">
          <span className="relative z-10">Submit</span>
        </button>
      </div>
    </motion.div>
  );
}
