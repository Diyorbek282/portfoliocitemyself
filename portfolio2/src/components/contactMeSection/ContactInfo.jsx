import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="1203jumayev@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+998 91 418 44 15" Image={FiPhone} />
      <SingleInfo text="Bukhara, Gijduvan" Image={IoLocationOutline} />
    </div>
  );
}

export default ContactInfo;
