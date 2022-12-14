import { useState } from "react";
import githubIcon from "../../assets/github.png";
import linkIcon from "../../assets/link.svg";

export interface IProject {
    id: number;
    name: string;
    description: string;
    html_url: string;
    topics: string[];
    fork: boolean;
    homepage: string;
}

const data = await fetch("https://api.github.com/users/xMetaneRx/repos").then(
    (res) => res.json()
);

export default function Projects() {
    const [projects, setProjects] = useState<IProject[] | []>(data);

    return (
        <>
            <section className="my-16">
                <h2 className="text-2xl font-bold">Projects:</h2>
                <div>
                    {projects.map(
                        (project) =>
                            project.fork === false &&
                            project.name !== "xMetaneRx" && (
                                <div
                                    className="bg-zinc-600 rounded-lg p-4 my-4"
                                    key={project.id}
                                >
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold">
                                            {project.homepage !== "" ? (
                                                <a
                                                    href={project.homepage}
                                                    className="flex flex-row flex-wrap items-center gap-1.5"
                                                >
                                                    {project.name}{" "}
                                                    <img
                                                        src={linkIcon}
                                                        alt=""
                                                        className="h-5 w-5"
                                                    />
                                                </a>
                                            ) : (
                                                project.name
                                            )}
                                        </h3>
                                        <a
                                            href={`${project.html_url}`}
                                            className="rounded-full bg-white p-0.5"
                                        >
                                            <img
                                                src={githubIcon}
                                                alt="github icon"
                                                className="w-8 h-8"
                                            />
                                        </a>
                                    </div>
                                    <p className="text-base text-neutral-300 my-2">
                                        {project.description}
                                    </p>
                                    <ul className="flex flex-wrap gap-1 md:gap-1.5 mt-4">
                                        {project.topics.map((topic) => (
                                            <li
                                                className="text-xs uppercase bg-zinc-500 rounded-md py-0.5 px-1.5"
                                                key={topic}
                                            >
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
