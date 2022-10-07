import profile from "../../assets/avatar.svg";

const Contact = () => {
    return (
        <>
            <section className="flex flex-col-reverse md:flex-row items-center gap-1">
                <div>
                    <h2 className="text-3xl my-2">Hi 👋, I'm Dawid.</h2>
                    <p className="text-sm my-2 text-neutral-300 leading-6">
                        Hello there, I am a self-taught front-end developer. I
                        relish creating Web applications. I am developing my
                        skills in JavaScript, React, Redux and Typescript.
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
