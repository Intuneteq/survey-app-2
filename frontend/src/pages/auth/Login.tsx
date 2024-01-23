import { Images } from "../../assets";

export default function Login() {
  const { welcome, google, apple, } = Images;


  return (
    <main className="w-full h-[64rem] bg-[#239D60]">
      <div className="flex w-full h-full">
        <div className="flex justify-center w-[60%] h-full bg-[#FFF5C1] rounded-tr-[6.2rem] rounded-br-[6.2rem] relative ">
          <div className=" w-[43.125rem] h-[38.125rem] object-contain absolute bottom-[3.44rem]">
            <img src={welcome} alt="welcome" />
          </div>
        </div>
        <div className="w-[40%] h-full">
          <div className="flex-col flex justify-center items-center mt-[6.88rem] w-full">
            <h1 className="text-[#FFF] text-[3.75rem] font-[900] leading-normal ">Welcome Back</h1>
            <p className="text-[#BDBBBB] text-[1.25rem] font-[500] leading-normal ">Kindly input your information to obtain access.</p>
          </div>

          <section className="mt-[6.44rem] w-full">
            <form className="flex justify-center">
              <div className="flex-col space-y-[1.16rem]">
                <div className="relative">
                  <i className="fa fa-telephone"></i>
                  <input className="border-[1px] border-[#675E5E] rounded-[0.5rem] w-[24.625rem] h-[2.5rem] bg-transparent p-[0.5rem] text-[#FFF]" type="text" placeholder="Email" name="email" />
                </div>
                <div >
                  <input className="border-[1px] border-[#675E5E] rounded-[0.5rem] w-[24.625rem] h-[2.5rem] bg-transparent p-[0.5rem]" type="password" placeholder="Password" name="pass" />
                </div>
                <div>
                  <a href="#"><p className="text-[#FFF] text-[0.875remrem] font-[400] leading-normal">Forgot Password?</p></a>
                </div>
              </div>
            </form>

            <div className=" w-full flex justify-center mt-[5rem]">
              <div className=" w-[22.5rem] justify-center space-y-[0.5rem]">
                <div className=" w-full flex items-center justify-center">
                  <button className="w-[22.5rem]  py-[1.5rem] rounded-[1.25rem] bg-[#FFF5C1] text-[#000] text-[1.25rem] font-[700] leading-normal text-center">Log in
                  </button>
                </div>
                <div className="flex justify-center">
                  <p className="text-[#FFF] text-[1.25rem] font-[500] leading-normal">Or</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-center" >
                    <button className="w-[10rem] border-[1px] border-[#FFF5C1] rounded-[1.25rem] px-[2rem] py-[0.5rem] text-[#FFF5C1] text-[0.875rem] font-[400] leading-normal flex justify-center" ><span className="mr-[0.5rem]"><img src={google} alt="google" /> </span>Google</button>
                  </div>
                  <div className="flex justify-center " >
                    <button className="w-[10rem] border-[1px] border-[#FFF5C1] rounded-[1.25rem] px-[2rem] py-[0.5rem] text-[#FFF5C1] text-[0.875rem] font-[400] leading-normal flex justify-center" ><span className="mr-[0.5rem]"><img src={apple} alt="google" /> </span>Apple</button>
                  </div>
                </div>

              </div>
            </div>


          </section>
          <section className="mt-[13.06rem]">
            <div className="flex justify-center">
              <p className="text-[#FFF] text-[1.25rem] font-[400] leading-normal">Have no account yet? <span className="text-[#FFF5C1] ml-[0.62rem]">Sign Up</span></p>
            </div>
          </section>

        </div>
      </div>

    </main>
  );
}
