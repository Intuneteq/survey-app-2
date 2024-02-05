import { Images } from "../../assets";

import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    const { welcome, Logo } = Images;

    return (
        <main className="w-full h-screen bg-secondary">
            <div className="flex w-full h-full">
                <div className="flex justify-between items-center flex-col w-[48%] h-full bg-primary rounded-tr-[1rem] rounded-br-[1rem] xl:rounded-tr-[6.2rem] xl:rounded-br-[6.2rem] py-[2.44rem] px-[6.56rem]">
                    <div className="flex justify-start items-center flex-col">
                        <div className="w-24 h-24 flex justify-center items-center">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h1 className="text-[4rem] font-black flex justify-center items-center gap-0">
                            <span className="text-tertiary">Survey</span>
                            <span className="text-secondary">Lite</span>
                        </h1>
                    </div>
                    <div className="w-[20rem] h-[15rem] xl:w-[43.125rem] xl:h-[38.125rem] flex justify-center items-center">
                        <img
                            src={welcome}
                            alt="welcome"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="w-[52%] h-full scroll-vertical">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}
