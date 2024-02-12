import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Images } from "../../assets";
import { DashboardIcon, FormInput, SurveyIcon } from "../../components/atoms";

const navLinks = [
    {
        id: "1",
        name: "Dashboard",
        path: "home",
        icon: DashboardIcon,
    },
    {
        id: "2",
        name: "Survey",
        path: "survey",
        icon: SurveyIcon,
    },
];

export default function Layout() {
    const { Logo, User } = Images;
    const [isHovered, setIsHovered] = useState("");
    const [active, setActive] = useState("");

    return (
        <main className="w-full min-h-screen flex justify-start items-start">
            <section className="w-[17%] scroll-vertical h-screen bg-primary py-4 px-5 flex flex-col justify-start items-center ">
                <div className="flex justify-center items-center gap-2 w-full mb-10">
                    <div className="w-[30px] h-[30px]">
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h1 className="text-xl font-black flex justify-center items-center gap-0">
                        <span className="text-tertiary">Survey</span>
                        <span className="text-secondary">Lite</span>
                    </h1>
                </div>

                <div className="w-full flex justify-center gap-5 items-center mb-10">
                    <div className="w-10 h-10 rounded-full flex justify-center items-center">
                        <img
                            src={User}
                            alt="user"
                            className="w-full h-full object-contain rounded-full"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <p className="font-medium text-base xl:text-xl text-[#1D2827]">
                            Dante Silver
                        </p>
                        <small className="text-[8px]">
                            Dante.Silver@gmail.com
                        </small>
                    </div>
                </div>

                <div className=" flex relative mb-10">
                    <FormInput
                        type="text"
                        name="search"
                        placeholder="Search Survey"
                        label="search"
                        hideLabel
                        className="placeholder:text-[#817F7F] pl-[1.25rem] rounded-[5px]"
                        style={{
                            height: "2.5rem",
                            color: "#817F7F",
                            fontSize: "12px",
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        color="black"
                        className="w-4 h-4 absolute right-4 bottom-1/2 translate-y-1/2"
                    />
                </div>

                <div className="max-w-[9rem] flex flex-col items-start justify-start gap-y-7 w-full mb-[15rem] xl:mb-[30rem]">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={({ isActive }) => {
                                console.log(link.id, isActive);

                                if (isActive) {
                                    setActive(link.id);
                                }
                                return `flex justify-start items-center gap-2 ${
                                    isActive
                                        ? "text-[#0A8347]"
                                        : "text-secondary"
                                } hover:text-[#6E6E6E]`;
                            }}
                            onMouseEnter={() => setIsHovered(link.id)}
                            onMouseLeave={() => setIsHovered("")}
                        >
                            <link.icon
                                className="w-6 h-6"
                                fill={
                                    isHovered === link.id
                                        ? "#6E6E6E"
                                        : active === link.id
                                        ? "#0A8347"
                                        : "#1D2827"
                                }
                            />
                            <span className="font-medium text-lg xl:text-2xl">
                                {link.name}
                            </span>
                        </NavLink>
                    ))}
                </div>

                <hr className="border-t-2 border-[#1D282780] shadow-md w-full mb-5" />

                <button
                    type="button"
                    className="flex justify-start items-center gap-2 w-full hover:text-[#6E6E6E]"
                >
                    <SurveyIcon className="w-6 h-6" fill="#1D2827" />
                    <span className="font-medium text-lg xl:text-2xl">
                        Log Out
                    </span>
                </button>
            </section>

            <section className="w-[83%] h-screen">
                <Outlet />
            </section>
        </main>
    );
}
