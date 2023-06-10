import BallCanvas from "../canvas/Ball";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech: React.FC<{}> = ({}) => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
