
"use client";

import "./globals.css";
import { motion } from "framer-motion";
import { FaCircleNotch, FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <FaCircleNotch className="h-10 w-10 animate-spin text-purple-500" />
      </motion.div>
    </div>
  );
}
