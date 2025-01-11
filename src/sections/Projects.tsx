import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrorUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import clientXcProject from "@/assets/images/clientXcProject.png";
import portfolioWebsite from "@/assets/images/portfolioWebsite.png";
import passwordGenerator from "@/assets/images/passGen.png";

const portfolioProjects = [
  {
    company: "U of M",
    year: "2024",
    title: "Client XC Project",
    results: [
      { title: "Enhanced user experience and usability" },
      { title: "Accessibility features for all users" },
      { title: "Dropdown navigation for easy to use access" },
    ],
    link: "https://shanectr.github.io/Client-Project-Deliverable-4/",
    image: clientXcProject,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Portfolio Website",
    results: [
      { title: "reusable code for easy changes" },
      { title: "developed for any screensize" },
      { title: "fully responsive and accesible webpage" },
    ],
    link: "https://shanectr.github.io/portfolio-website/",
    image: portfolioWebsite,
  },
  {
    company: "Peronal App",
    year: "2024",
    title: "Password Generator",
    results: [
      { title: "Random character generation" },
      { title: "Storing elements and information" },
      { title: "Structuring with HTML" },
    ],
    link: "https://shanectr.github.io/Random-Password-Generator/",
    image: passwordGenerator,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div id="my-work" className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrorUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-2xl border-t-2 border-l-2 border-r-2 border-gray-900"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
