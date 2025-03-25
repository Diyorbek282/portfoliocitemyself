import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";

function HeroPic() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../public/images/1.jpg"
        alt="Diyorbek Jumayev"
        className="max-h-[200px] w-auto rounded-xl"
      />
    </motion.div>
  );
}

export default HeroPic;
{
  /* <div className="absolute -z-10 flex justify-center items-center"> */
}
{
  /* animate-pulse */
}
{
  /* <PiHexagonThin className=" min-h-[300px] w-auto text-cyan blur-md" /> */
}
{
  /* animate-[spin_20s_linear_infinite] */
}
// </div>
