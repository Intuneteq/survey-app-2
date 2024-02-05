import { Images } from "../../assets";

import {
    AuthButton,
    EnvelopeIcon,
    FormInput,
    PadlockIcon,
    SocialButton,
    UserIcon,
} from "../../components/atoms";
import { AuthFooter, AuthHeader } from "../../components/molecules";

export default function Register() {
    const { google, apple } = Images;

    return (
        <section className="py-20 xl:py-24">
            <div className="flex justify-center items-center w-full">
                <AuthHeader
                    title="Welcome!"
                    subTitle="Kindly submit your details to register."
                />
            </div>

            <article className="mt-[6.44rem] mb-[3.75rem] w-full flex items-center justify-center">
                <form className="w-full max-w-[24.625rem]">
                    <div className="flex-col space-y-[1.16rem]">
                        <div className="w-full relative">
                            <div className="absolute left-2 bottom-1/2 translate-y-1/2">
                                <UserIcon className="w-6 h-6" />
                            </div>
                            <FormInput
                                type="text"
                                label="name"
                                name="name"
                                hideLabel
                                placeholder="name"
                                style={{
                                    paddingLeft: "40px",
                                }}
                            />
                        </div>

                        <div className="w-full relative">
                            <div className="absolute left-2 bottom-1/2 translate-y-1/2">
                                <EnvelopeIcon className="w-6 h-6" />
                            </div>
                            <FormInput
                                type="email"
                                label="email"
                                name="email"
                                hideLabel
                                placeholder="Email"
                                style={{
                                    paddingLeft: "40px",
                                }}
                            />
                        </div>

                        <div className="w-full relative">
                            <div className="absolute left-2 bottom-1/2 translate-y-1/2">
                                <PadlockIcon className="w-6 h-6" />
                            </div>
                            <FormInput
                                type="password"
                                label="password"
                                name="password"
                                hideLabel
                                placeholder="Password"
                                style={{
                                    paddingLeft: "40px",
                                }}
                            />
                        </div>

                        <div className="w-full relative">
                            <div className="absolute left-2 bottom-1/2 translate-y-1/2">
                                <PadlockIcon className="w-6 h-6" />
                            </div>
                            <FormInput
                                type="password"
                                label="Confirm Password"
                                name="confirmPassword"
                                hideLabel
                                placeholder="Confirm Password"
                                style={{
                                    paddingLeft: "40px",
                                }}
                            />
                        </div>

                        <FormInput
                            type="checkbox"
                            name="terms"
                            label="terms"
                            hideLabel
                            className="rounded-[0.625rem] text-black border border-primary cursor-pointer checked:border-primary"
                            style={{
                                width: "24px",
                                height: "24px",
                            }}
                        >
                            <div className="text-white max-w-[19rem]">
                                <small className="text-[0.625rem] font-normal">
                                    I agree to Typeform’s{" "}
                                    <button type="button" className="underline">
                                        Terms of Service
                                    </button>
                                    ,{" "}
                                    <button type="button" className="underline">
                                        Privacy Policy
                                    </button>{" "}
                                    and{" "}
                                    <button type="button" className="underline">
                                        Data Processing Agreement
                                    </button>
                                    .
                                </small>
                            </div>
                        </FormInput>
                    </div>
                    <div className="w-full flex justify-center items-center mt-[6rem]">
                        <div className="w-full justify-center items-center space-y-[0.5rem]">
                            <div className="w-full flex items-center justify-center">
                                <AuthButton text="Sign Up" />
                            </div>
                            <div className="flex justify-center">
                                <p className="text-[#FFF] text-[1.25rem] font-[500] leading-normal">
                                    Or
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <SocialButton
                                    icon={google}
                                    text="Google"
                                    width="10rem"
                                />
                                <SocialButton
                                    icon={apple}
                                    text="apple"
                                    width="10rem"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </article>

            <AuthFooter
                to="/login"
                text="Already Registered?"
                linkText="Log In"
            />
        </section>
    );
}
