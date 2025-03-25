import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AboutMeText() {
  const [textToCopy] = useState("1203jumayev@gmail.com");

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    toast.success("📋 Email copied to clipboard!", {
      position: "top-right",
      autoClose: 2000, // 2 sekunddan keyin yopiladi
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <ToastContainer /> {/* Toast'larni chiqarish uchun */}
      <h1 className="text-6xl text-cyan mb-10">About Me</h1>
      <p className="text-white">
        Hi, I'm Diyorbek Jumayev, a passionate Frontend Developer with 1 year of
        experience in building modern and responsive web applications. I
        specialize in HTML, CSS, Tailwind CSS, JavaScript, and React to create
        clean, user-friendly, and efficient websites.
        <br />
        Feel free to reach out: <br />
        📩 Email:{" "}
        <span onClick={handleCopy} className="hover:text-orange cursor-pointer">
          {textToCopy}
        </span>{" "}
        <br />
        📲 Telegram:{" "}
        <a href="https://t.me/diyorceek_15" className="hover:text-orange">
          diyorceek_15
        </a>
      </p>
      <button
        className="border border-orange rounded-full py-2 px-4 flex items-center mt-10 
                   hover:bg-orange transition-all duration-500 cursor-pointer md:self-start 
                   sm:self-center text-white hover:text-cyan"
        onClick={() =>
          toast.info("Projects section coming soon!", { theme: "colored" })
        }
      >
        My Projects
      </button>
    </div>
  );
}

export default AboutMeText;
