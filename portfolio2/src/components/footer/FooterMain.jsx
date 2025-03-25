import React from "react";

function FooterMain() {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Contact", section: "contact" },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4">
        <p className="text-3xl text-lightGrey cursor-default">
          DIYORBEK JUMAYEV
        </p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                  href="#"
                >
                  {link.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        2024 Diyorbek | All Rights Reserved.
      </p>
    </div>
  );
}

export default FooterMain;
