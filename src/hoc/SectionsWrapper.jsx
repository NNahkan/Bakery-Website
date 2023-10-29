import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const SectionsWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={variants	}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionsWrapper;
