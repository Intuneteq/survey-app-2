import { Images } from "../../assets";

import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { welcome } = Images;

  return (
    <main className="w-full h-screen bg-primary">
      <div className="flex w-full h-full">
        <div className="flex justify-center items-end w-[60%] h-full bg-secondary rounded-tr-[2rem] rounded-br-[2rem] xl:rounded-tr-[6.2rem] xl:rounded-br-[6.2rem] py-[3.44rem] px-[6.56rem]">
          <div className="w-[30rem] h-[25rem] xl:w-[43.125rem] xl:h-[38.125rem] flex justify-center linerblue items-center">
            <img src={welcome} alt="welcome" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="w-[40%] h-full scroll-vertical">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
