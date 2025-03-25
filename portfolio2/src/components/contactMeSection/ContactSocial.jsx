import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function ContactSocial() {
  return (
    <div className="flex gap-4 ">
      <SingleContactSocial
        link="https://github.com/Diyorbek282"
        Icon={FaGithub}
      />
      <SingleContactSocial
        link="http://www.youtube.com/@Dasturchi.uz_2024"
        Icon={FaYoutube}
      />
      <SingleContactSocial
        link="https://www.instagram.com/d1yorceek_22"
        Icon={FaInstagram}
      />
    </div>
  );
}

export default ContactSocial;
