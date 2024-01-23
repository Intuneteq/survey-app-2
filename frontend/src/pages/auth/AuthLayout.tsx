import { Images } from "../../assets";

import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { welcome } = Images;

  return (
    <main className="w-full h-[64rem] bg-[#239D60]">
      <div className="flex w-full h-full">
        <div className="flex justify-center w-[60%] h-full bg-[#FFF5C1] rounded-tr-[6.2rem] rounded-br-[6.2rem] relative ">
          <div className=" w-[43.125rem] h-[38.125rem] object-contain absolute bottom-[3.44rem]">
            <img src={welcome} alt="welcome" />
          </div>
        </div>
        <div className="w-[40%] h-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
