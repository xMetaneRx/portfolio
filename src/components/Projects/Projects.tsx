import { useState } from "react";
import githubIcon from "../../assets/github.png";

export interface IProject {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    fork: boolean;
}

const data = await fetch("https://api.github.com/users/xMetaneRx/repos").then(
    (res) => res.json()
);

export default function Projects() {
    const [projects, setProjects] = useState<IProject[] | []>(data);

    return (
        <>
            <section className="my-8">
                <h2 className="text-2xl font-bold">Projects:</h2>
                <div>
                    {projects.map(
                        (project) =>
                        project.fork === false &&
                        project.name !== "xMetaneRx" && (
                                <div className="bg-zinc-600 rounded-lg p-4 my-4" key={project.name}>
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-bold">
                                            {project.name}
                                        </h3>
                                        <a
                                            href={`${project.html_url}`}
                                            className="rounded-full bg-white p-0.5"
                                        >
                                            <img
                                                src={githubIcon}
                                                alt="github icon"
                                                className="w-12 h-12"
                                            />
                                        </a>
                                    </div>
                                    <p className="text-neutral-300 my-2">
                                        {project.description}
                                    </p>
                                    <ul className="flex flex-wrap gap-1 md:gap-1.5 mt-4">
                                        {project.topics.map((topic) => (
                                            <li className="bg-zinc-500 rounded-md py-0.5 px-1.5">
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                    )}
                </div>
            </section>
        </>
    );
}
