import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight() {
  return (
    <div className="flex items-center flex-col justify-center gap-12">
      <img
        className="max-w-[300px]"
        src="/public/images/email-image.png"
        alt=""
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
}

export default ContactMeRight;
