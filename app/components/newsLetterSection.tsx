
"use client";
import { motion } from "framer-motion";
export default function Newsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
    >
      <div className="mt-4">
        <div className="mt-1">
          <h1 className="font-medium text-gray-900 mb-4 text-lg">
            Meditations Newsletter
          </h1>
          <p className="text-gray-500 mt-4">
            Stay ahead of the curve with my monthly newsletter called
            Meditations. Receive valuable insights on the latest trends,
            techniques, and tools in web development and design.
          </p>
          <form className="relative">
            <input
              className="border w-full mt-4 px-2 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Enter your email"
            />
            <button
              className="bg-gray-900 hover:bg-gray-700 inline-block top-6 text-xs right-1 text-white px-2 py-2 rounded-md absolute disabled:opacity-80"
              type="submit"
              disabled={false}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}