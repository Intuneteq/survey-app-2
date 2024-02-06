import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { Images } from "../../assets";
import { DashboardIcon, SurveyIcon } from "../../components/atoms";

const navLinks = [
    {
        id: "1",
        name: "Dashboard",
        path: "/dashboard",
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
            <section className="w-[17%] h-full min-h-screen bg-primary py-4 px-5 flex flex-col justify-start items-center ">
                <div className="w-20 h-20 mb-5 ">
                    <img
                        src={Logo}
                        alt="logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="w-full flex justify-center gap-1 items-center mb-16">
                    <div className="w-10 h-10 rounded-full flex justify-center items-center">
                        <img
                            src={User}
                            alt="user"
                            className="w-full h-full object-contain rounded-full"
                        />
                    </div>
                    <small className="font-medium text-base xl:text-xl text-[#1D2827]">
                        Dante Silver
                    </small>
                    <FontAwesomeIcon
                        className="w-[24px] h-[24px]"
                        icon={faCaretDown}
                    />
                </div>

                <div className="max-w-[9rem] flex flex-col items-start justify-start gap-y-7 w-full">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className={({ isActive }) => {
                                if (isActive) {
                                    setActive(link.id);
                                }
                                return `flex justify-start items-center gap-2 text-secondary ${
                                    isActive ? "text-[#0A8347]" : ""
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
            </section>

            <section className="w-[83%] scroll-vertical min-h-screen h-full">
                <Outlet />
            </section>
        </main>
    );
}
