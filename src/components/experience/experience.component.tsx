// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import { delay, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
// import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const Experience: React.FC<{}> = ({}) => {
  return (
    <motion.div variants={textVariant(delay)}>
      <p className={`${styles.sectionSubText}`}>What i have done so far </p>
      <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "experience");
