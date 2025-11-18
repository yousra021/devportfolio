import { CiLink } from "react-icons/ci";
import ImageSlider from "./ImageSlider";

function Project({ title, description, technologies, link, github, images }) {
  // Convert single image string or array to array format
  const imageArray = images
    ? Array.isArray(images)
      ? images.map((img) =>
          img.startsWith("/") || img.startsWith("http") ? img : `/${img}`
        )
      : [
          images.startsWith("/") || images.startsWith("http")
            ? images
            : `/${images}`,
        ]
    : [];

  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        {/* =========== LEFT SIDE: IMAGE AND TECHNOLOGIES =========== */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* =========== IMAGE SLIDER =========== */}
          <ImageSlider images={imageArray} />

          {/* =========== TECHNOLOGIES USED =========== */}
          <div className="flex flex-wrap gap-2">
            {technologies.split(",").map((tech, index) => (
              <span
                className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
                key={index}
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* =========== RIGHT SIDE: TITLE, DESCRIPTION, LINKS =========== */}
        <div className="md:w-1/2 flex flex-col">
          {/* =========== PROJECT TITLE =========== */}
          <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300">
            {title}
          </h3>

          {/* =========== PROJECT DESCRIPTION =========== */}
          <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
            {description}
          </p>

          <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium mt-4">
            {/* =========== PROJECT LINK =========== */}
            <a
              href={link}
              className="flex gap-2 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
            >
              <CiLink className="text-2xl self-center" />
              <span className="text-xs self-center">View Project</span>
            </a>
            {/* =========== PROJECT GITHUB =========== */}
            <a
              href={github}
              className="flex gap-2 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300"
            >
              <CiLink className="text-2xl self-center" />
              <span className="text-xs self-center">View Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
