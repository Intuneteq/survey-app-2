import { Images } from "../../assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

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
      <section>
        <div className="flex-col flex justify-center items-center mt-[6.88rem] w-full">
          <AuthHeader
            title="Welcome Back"
            subTitle="Kindly input your information to obtain access."
          />
        </div>
      </section>

      <section className=" mt-[6.44rem] mb-[4.94rem] ">
        <div className="flex justify-center ">
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
          </form>
        </div>
      </section>

      <section className="w-full flex justify-center mt-[5rem]">
        <div className="w-[22.5rem] justify-center space-y-[0.5rem]">
          <div className="w-full flex items-center justify-center">
            <AuthButton text="Log in" width="22.5rem" height="3.75rem" />
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
      </section>

      <section className="mt-[13.06rem]">
        <AuthFooter
          text="Have no account yet?"
          linkText="Sign Up"
          to="Sign Up"
        />
      </section>

      {/* <div className="flex-col flex justify-center items-center mt-[6.88rem] w-full">
        <h1 className="text-[#FFF] text-[3.75rem] font-[900] leading-normal ">
          Welcome Back
        </h1>
        <p className="text-[#BDBBBB] text-[1.25rem] font-[500] leading-normal ">
          Kindly input your information to obtain access.
        </p>
      </div>

      <section className="mt-[6.44rem] w-full">
        <form className="flex justify-center">
          <div className="flex-col space-y-[1.16rem]">
            <div className="">
              <input
                className="border-[1px] border-[#675E5E] rounded-[0.5rem] w-[24.625rem] h-[2.5rem] bg-transparent p-[0.5rem] text-[#FFF]"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <input
                className="border-[1px] border-[#675E5E] rounded-[0.5rem] w-[24.625rem] h-[2.5rem] bg-transparent p-[0.5rem]"
                type="password"
                placeholder="Password"
                name="pass"
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
        </form>

        <div className=" w-full flex justify-center mt-[5rem]">
          <div className=" w-[22.5rem] justify-center space-y-[0.5rem]">
            <div className=" w-full flex items-center justify-center">
              <AuthButton width="22.5rem" height="3.75rem" text="Log in" />
            </div>
            <div className="flex justify-center">
              <p className="text-[#FFF] text-[1.25rem] font-[500] leading-normal">
                Or
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-center">
                <button className="w-[10rem] border-[1px] border-[#FFF5C1] rounded-[1.25rem] px-[2rem] py-[0.5rem] text-[#FFF5C1] text-[0.875rem] font-[400] leading-normal flex justify-center">
                  <span className="mr-[0.5rem]">
                    <img src={google} alt="google" />{" "}
                  </span>
                  Google
                </button>
              </div>
              <div className="flex justify-center ">
                <button className="w-[10rem] border-[1px] border-[#FFF5C1] rounded-[1.25rem] px-[2rem] py-[0.5rem] text-[#FFF5C1] text-[0.875rem] font-[400] leading-normal flex justify-center">
                  <span className="mr-[0.5rem]">
                    <img src={apple} alt="google" />{" "}
                  </span>
                  Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[13.06rem]">
        <div className="flex justify-center">
          <p className="text-[#FFF] text-[1.25rem] font-[400] leading-normal">
            Have no account yet?
            <span className="text-[#FFF5C1] ml-[0.62rem]">Sign Up</span>
          </p>
        </div>

      </section> */}
    </>
  );
}
