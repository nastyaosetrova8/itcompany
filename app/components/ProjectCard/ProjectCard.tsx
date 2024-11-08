import { IPropsProjectItem } from "@/helpers/interfaces";

const ProjectCard: React.FC<IPropsProjectItem> = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <h2 className="titleCl font-medium mb-6">{title}</h2>

        {/* <p className="descriptionCl overflow-y-auto">{description}</p> */}
        <p className="descriptionCl flex-grow overflow-y-auto max-h-[250px]">
          {description}
        </p>
      </div>
      <a
        href="#"
        className="inline-block px-6 py-2 text-white bg-customTeal transition-all hover:bg-customTeal-accent hover:-translate-y-1 hover:scale-110 rounded-3xl"
      >
        View Project
      </a>
    </>
  );
};

export default ProjectCard;
