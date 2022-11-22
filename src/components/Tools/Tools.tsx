import { useState } from "react";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javascript.png";
import typescriptIcon from "../../assets/typescript.png";
import reactIcon from "../../assets/react.png";
import gitIcon from "../../assets/git.png";
import firebaseIcon from "../../assets/firebase.png";
import reduxIcon from '../../assets/redux.png';
import bootstrapIcon from '../../assets/bootstrap.png';
import tailwindIcon from '../../assets/tailwind.png';

interface ITool {
    name: string;
    icon: string;
}

const TOOLS = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Git", icon: gitIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "Redux", icon: reduxIcon},
    { name: "Bootstrap", icon: bootstrapIcon},
    { name: "Tailwindcss", icon: tailwindIcon},
];

const Tools = () => {
    const [tools, setTools] = useState<ITool[]>(TOOLS);

    return (
        <>
            <section className="my-16">
                <h2 className="text-2xl font-bold">Languages and tools:</h2>
                <div className="flex flex-col flex-wrap md:flex-row">
                    {tools.map((tool) => (
                        <div className="flex basis-4/12 justify-space items-center gap-4" key={tool.name}>
                            <span className="rounded-full bg-zinc-400 rounded-lg p-4 my-4 border-4 border-black">
                                <img
                                    src={tool.icon}
                                    alt={tool.icon}
                                    className="w-8 h-8"
                                />
                            </span>
                            <p className="text-neutral-300">{tool.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Tools;
