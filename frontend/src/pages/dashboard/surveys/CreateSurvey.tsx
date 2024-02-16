import { Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpFromBracket,
    faTrashCan,
    faCirclePlus,
    faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import { Images } from "../../../assets";
import { PickImage } from "../../../components/molecules";
import { Button, SelectButton } from "../../../components/atoms";

const { view, surveyImage, surveyBackground, start, typeimg } = Images;

export default function CreateSurvey() {
    function onSelect(option: SelectOption | SelectOption[], id?: string) {
        console.log(option, id);
    }

    return (
        <main className="h-screen w-full">
            {/* Top Nav */}
            <div className="w-full h-[10%] flex items-center px-5 justify-between bg-white">
                <p className="text-[0.875rem] font-normal">
                    <Link to={"/dashboard"} className="text-black underline">
                        Dashboard
                    </Link>{" "}
                    &gt; <span className="text-light_grey">Survey Title</span>
                </p>

                <div className=" text-xl flex gap-5 text-grey font-normal h-full justify-center items-center">
                    {navLink.map((link) => (
                        <NavLink className={({isActive}) => `${isActive ? "border-b-2 border-[#239D60]" : ""} h-full flex justify-center items-center`} key={link.id} to={link.path}>
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                <div className="flex gap-1 h-9">
                    <div className="w-9 h-full">
                        <img
                            className="w-full h-full object-contain"
                            src={view}
                        />{" "}
                    </div>

                    <Button type="button" scheme="primary">
                        <FontAwesomeIcon
                            icon={faArrowUpFromBracket}
                            className="h-[0.875rem] w-[0.875rem] text-white"
                        />
                        <span>Publish</span>
                    </Button>

                    <Button
                        style={{ backgroundColor: "#DC2626", color: "#2E0606" }}
                        type="button"
                        scheme="primary"
                    >
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            className="h-[0.875rem] w-[0.875rem] text-[#2E0606]"
                        />
                        <span>Delete</span>
                    </Button>
                </div>
            </div>

            {/* BODY */}
            <div className="w-full flex h-[90%]">
                {/* SIDE BAR */}
                <div className="w-[17%] pt-3 pb-[7.5rem] px-2 h-full scroll-vertical flex justify-start items-start flex-col gap-5">
                    <PickImage text="Survey Image" img={surveyImage} />
                    <PickImage
                        text="Survey Background"
                        img={surveyBackground}
                    />
                    <div className="w-full">
                        <p className="text-[0.875rem] text-[#767676] mb-[0.625rem]">
                            Type
                        </p>
                        <SelectButton
                            id="1"
                            backgroundColor="white"
                            color="#1D2827"
                            options={[]}
                            placeholder="Select"
                            name="type"
                            height="2.5rem"
                            borderRadius="0.25rem"
                            borderColor="#239D60"
                            onSelect={onSelect}
                        />
                    </div>
                    <div className="w-full flex justify-start items-start flex-col gap-5 ">
                        <h2 className="text-[1.25rem] font-bold">Contents</h2>

                        <div className="flex justify-center items-center px-3 w-full">
                            <hr className="w-full" color="#877C7C3D" />
                        </div>

                        <div className="w-full">
                            <p className="text-[0.875rem] text-[#767676] font-normal mb-[0.625rem]">
                                Starting
                            </p>
                            <div className="h-[3.125rem] w-full flex items-center justify-start rounded-[0.625rem]">
                                <div className="w-[27%] h-full bg-[#FFF5C1] p-2 rounded-tl-[0.625rem] rounded-bl-[0.625rem]">
                                    <img
                                        className="object-contain w-full h-full"
                                        src={start}
                                    />
                                </div>
                                <div className="w-[73%] h-full flex items-center bg-[#1D2827] rounded-tr-[0.625rem] rounded-br-[0.625rem] whitespace-nowrap">
                                    <p className="text-[0.5rem] px-1 text-[#FFFFFF] text-ellipsis overflow-hidden">
                                        Lorem ipsum dolor sit amet consectetur.
                                        Habitant lacus morbi suspendisse egestas
                                        dignissim venenatis tortor. Proin
                                        elementum lectus id risus.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="w-full mb-[0.625rem] flex justify-between items-center">
                                <p className="text-[0.875rem] text-[#767676] font-normal">
                                    Questions
                                </p>
                                <button type="button">
                                    <FontAwesomeIcon
                                        icon={faCirclePlus}
                                        className="h-3 w-3"
                                        color="black"
                                    />
                                </button>
                            </div>

                            <div className="flex justify-start items-start flex-col gap-3">
                                {questionlist.map((item) => (
                                    <div className="h-[2.3rem] flex items-center justify-start">
                                        <div className="w-[15%] h-full flex items-center justify-end bg-[#1D2827] p-2 rounded-tl-xl rounded-bl-xl">
                                            <img
                                                className="object-contain w-full h-full p-[0.18rem]"
                                                src={typeimg}
                                            />
                                        </div>
                                        <div className="w-[85%] h-full flex items-center justify-between gap-1 px-[0.313rem] rounded-tr-xl rounded-br-xl">
                                            <p className=" text-black font-semi-bold text-[0.625rem]">
                                                {item.num}.
                                            </p>
                                            <p className="text-[0.5rem]">
                                                {item.text.substring(0, 30) +
                                                    "..."}
                                            </p>
                                            <button className=" flex justify-center items-center">
                                                <FontAwesomeIcon
                                                    icon={faEllipsisVertical}
                                                    className="h-[7px] w-[2px]"
                                                    color="black"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-[0.875rem] text-[#767676] font-normal mb-[0.625rem]">
                                Ending
                            </p>
                            <div className="h-[3.125rem] w-full flex items-center justify-start rounded-[0.625rem]">
                                <div className="w-[27%] h-full bg-[#FFF5C1] p-2 rounded-tl-[0.625rem] rounded-bl-[0.625rem]">
                                    <img
                                        className="object-contain w-full h-full"
                                        src={start}
                                    />
                                </div>
                                <div className="w-[73%] h-full flex items-center bg-[#1D2827] rounded-tr-[0.625rem] rounded-br-[0.625rem] whitespace-nowrap">
                                    <p className="text-[0.5rem] px-1 text-[#FFFFFF] text-ellipsis overflow-hidden">
                                        Thank you for dedicating your time to
                                        fill out our survey!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full bg-published h-full scroll-vertical py-28 xl:py-44">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

const questionlist = [
    { num: "01", text: "Lorem ipsum dolor sit amet consectetur." },
    { num: "02", text: "Lorem ipsum dolor sit amet consectetur." },
    { num: "03", text: "Lorem ipsum dolor sit amet consectetur." },
    { num: "04", text: "Lorem ipsum dolor sit amet consectetur." },
    { num: "05", text: "Lorem ipsum dolor sit amet consectetur." },
];

const navLink = [
    { id: 2, name: "Design", path: "design" },
    { id: 1, name: "Share", path: "share" },
    { id: 3, name: "Result", path: "result" },
];

// const questionType: SelectOption[] = [
//     {
//         label: "Checkbox",
//         value: "checkbox"
//     }
// ]