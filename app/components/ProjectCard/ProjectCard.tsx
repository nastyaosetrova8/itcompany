import { IPropsProjectItem } from "@/helpers/interfaces";

const ProjectCard: React.FC<IPropsProjectItem> = ({ title, description }) => {
  return (
    <div className="xl:max-w-[560px] w-full py-10 px-14 bg-white rounded-3xl">
      <h2 className="titleCl font-medium mb-6">{title}</h2>
      <p className="descriptionCl mb-6">{description}</p>

      <a
        href="#"
        className="inline-block px-6 py-2 text-white bg-customTeal transition-all hover:bg-customTeal-accent hover:-translate-y-1 hover:scale-110 rounded-3xl"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
