import { Images } from "../../assets";

import {
  AuthButton,
  SocialButton,
  FormInput,
  EnvelopeIcon,
  PadlockIcon,
} from "../../components/atoms";
import { AuthFooter, AuthHeader } from "../../components/molecules";

export default function Login() {
  const { google, apple } = Images;

  return (
    <>
      <section className="py-20 xl:py-24">
        <div className="flex-col flex justify-center items-center  w-full">
          <AuthHeader
            title="Welcome Back"
            subTitle="Kindly input your information to obtain access."
          />
        </div>

        <article className="py-[6.44rem]">
          <div className="flex justify-center">
            <form className="">
              <div className="flex-col  space-y-[1.16rem]">
                <div className="w-full relative ">
                  <FormInput
                    type="text"
                    name="email"
                    label="email"
                    hideLabel
                    placeholder="Email"
                    style={{
                      paddingLeft: "40px",
                      width: "24.625rem",
                    }}
                  />
                  <div className="absolute left-2 bottom-1/2 translate-y-1/2 ">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
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
                <div>
                  <a href="#">
                    <p className="text-[#FFF] text-[0.875remrem] font-[400] leading-normal">
                      Forgot Password?
                    </p>
                  </a>
                </div>
              </div>
              <div className="w-[22.5rem] justify-center space-y-[0.5rem] pt-[5rem]">
                <div className="w-full flex items-center justify-center">
                  <AuthButton
                    text="Log in"
                    width="22.5rem"
                    height="3.75rem"
                    backgroundColor="#FFF5C1"
                    color="#000"
                  />
                </div>
                <div className="flex justify-center">
                  <p className="text-[#FFF] text-[1.25rem] font-[500] leading-normal">
                    Or
                  </p>
                </div>
                <div className="flex justify-between">
                  <SocialButton text="Google" width="10rem" icon={google} />

                  <SocialButton text="Apple" width="10rem" icon={apple} />
                </div>
              </div>
            </form>
          </div>
        </article>

        <AuthFooter
          text="Have no account yet?"
          linkText="Sign Up"
          to="/register"
        />
      </section>
    </>
  );
}
