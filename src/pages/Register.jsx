import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const LogIn = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* <div className="hidden md:block">
                <img
                    src="src/assets/marissa-grootes-ck0i9Dnjtj0-unsplash.jpg"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                />
                <img
                    src="src/assets/banner1.jpg"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div> */}
            <div className="container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-900" />
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours
                                of work and helped me deliver stunning designs
                                to my clients faster than ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Register
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your info below to register
                            </p>
                        </div>
                        <RegisterForm></RegisterForm>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            Already have an account ? Please{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="underline underline-offset-4 hover:text-primary cursor-pointer"
                            >
                                Log In
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;
