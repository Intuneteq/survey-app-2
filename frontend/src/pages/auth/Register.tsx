import { Images } from "../../assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import {
  AuthButton,
  EnvelopeIcon,
  FormInput,
  PadlockIcon,
  SocialButton,
} from "../../components/atoms";
import { AuthFooter, AuthHeader } from "../../components/molecules";

export default function Register() {
  const { google, apple } = Images;

  return (
    <section className="py-20 xl:py-24">
      <AuthHeader
        title="Welcome!"
        subTitle="Kindly submit your details to register."
      />

      <article className="pt-[5.31rem] w-full max-w-[24.625rem] mx-auto pb-[4.94rem] ">
        <form className="">
          <div className="flex-col space-y-[1.16rem]">
            <div className="w-full relative">
              <FontAwesomeIcon
                className="w-6 h-6 absolute left-2 bottom-1/2 translate-y-1/2 font-normal"
                color="white"
                icon={faUser}
              />
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
              style={{ width: "24px", height: "24px", borderRadius: "100%" }}
            >
              <div className="w-[22.125rem] text-white">
                <small className="text-[0.75rem] font-normal">
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
          <div className=" w-full flex justify-center mt-[5rem]">
            <div className=" w-[22.5rem] justify-center space-y-[0.5rem]">
              <div className=" w-full flex items-center justify-center">
                <AuthButton width="22.5rem" height="3.75rem" text="Sign Up" />
              </div>
              <div className="flex justify-center">
                <p className="text-[#FFF] text-[1.25rem] font-[500] leading-normal">
                  Or
                </p>
              </div>
              <div className="flex justify-between items-center">
                <SocialButton icon={google} text="Google" width="10rem" />
                <SocialButton icon={apple} text="apple" width="10rem" />
              </div>
            </div>
          </div>
        </form>
      </article>

      <AuthFooter to="/login" text="Already Registered?" linkText="Log In" />
    </section>
  );
}
