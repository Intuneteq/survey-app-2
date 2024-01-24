import { Images } from "../../assets";

import { AuthButton } from "../../components/atoms";


export default function Register() {
  const { google, apple } = Images;

  return (
    <main>
      <div className="flex-col flex justify-center items-center mt-[6.88rem] w-full">
        <h1 className="text-[#FFF] text-[3.75rem] font-[900] leading-normal ">
          Welcome!
        </h1>
        <p className="text-[#BDBBBB] text-[1.25rem] font-[500] leading-normal ">
          Kindly submit your details to register.
        </p>
      </div>
      <section className="mt-[6.44rem] w-full">
        <form className="flex justify-center ">
          <div className="flex-col space-y-[1.16rem]">
            <div className="">
              <input
                className="border-[1px] border-[#675E5E] rounded-[0.5rem] w-[24.625rem] h-[2.5rem] bg-transparent p-[0.5rem] text-[#FFF]"
                type="text"
                placeholder="Name"
                name="name"

              />
            </div>
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
              <input
                className="border-[1px] border-[#675E5E] rounded-[0.5rem] w-[24.625rem] h-[2.5rem] bg-transparent p-[0.5rem]"
                type="password"
                placeholder="Confirm Password"
                name="confirmpass"
              />
            </div>
            <div className="flex w-full items-center gap-x-[0.62rem] mt-[2.5rem] ">
              <input className="w-[1.5rem] h-[1.5rem] rounded border" type="checkbox" />

              <div className="w-[22.125rem]">
                <p className="text-[0.75rem] font-[400] leading-normal">I agree to Typeform’s <a href="#" className="underline">Terms of Service</a>, <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Data Processing Agreement</a>.</p>
              </div>
            </div>
          </div>
        </form>

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

      <section className="mt-[4.94rem]">
        <div className="flex justify-center">
          <p className="text-[#FFF] text-[1.25rem] font-[400] leading-normal">
            Already Registered?
            <span className="text-[#FFF5C1] ml-[0.62rem]"> <a href="#">Log in</a></span>
          </p>
        </div>
      </section>


    </main>

  )
}
