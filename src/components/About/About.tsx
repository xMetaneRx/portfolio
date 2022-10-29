import profile from "../../assets/avatar.svg";

const Contact = () => {
    return (
        <>
            <section className="flex flex-col-reverse md:flex-row items-center gap-1 mt-16">
                <div>
                    <h2 className="text-3xl my-2">Hi 👋, I'm Dawid.</h2>
                    <p className="text-sm my-2 text-neutral-300 leading-6">
                        Hello there, I am an aspiring self-taught front-end developer. I 
                        relish creating Web applications. I am currently developing my skills 
                        in JavaScript, Typescript, React, and Next.js
                    </p>
                </div>
                <div>
                    <img
                        src={profile}
                        className="my-2 w-full h-full"
                        alt="profile_img"
                    />
                </div>
            </section>
        </>
    );
};

export default Contact;
