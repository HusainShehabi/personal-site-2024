import { HiExternalLink } from "react-icons/hi";

type Props = {
  title: string;
  Description?: string;
  link: string;
  image?: string | undefined;
};

const containerStyle = {
  padding: "15px",
};

export default function ProjectItem({ title, Description, link }: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        style={containerStyle}
        className="flex items-center justify-between overflow-hidden rounded-lg hover:bg-white/5 hover:backdrop-blur-md"
      >
        <div className="mr-4 flex-shrink-0"></div>

        <div className="flex-1">
          <p className="text-base font-semibold text-white">{title}</p>
          <div className="text-sm">
            <p className="text-gray-300 text-xs">{Description}</p>
          </div>
        </div>
        <HiExternalLink color="lightgray" size={24} className="ml-4" />
      </div>
    </a>
  );
}
