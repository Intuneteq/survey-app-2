import { NavigationButton } from "../../components/atoms";
import { Images } from "../../assets";
import { AnswerHead, BackgroundContent } from "../../components/molecules";
//import { Background } from "../../components/organisms";
import { FormInput } from "../../components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "../../components/organisms";

const { view, surveyImage, surveyBackground, start, typeimg } = Images;

export default function CreateSurvey() {
    return (
        <main className=" min-h-screen">
            <div className="w-full h-[3.75rem] flex items-center px-4 justify-between">
                <div>
                    <p className="text-[1rem] text-[#767676] py-2">
                        Dashboard &gt; Survey Title
                    </p>
                </div>
                <div className=" text-[1.5rem] flex gap-6">
                    <NavigationButton text="Design" />
                    <NavigationButton text="Share" />
                    <NavigationButton text="Result" />
                </div>
                <div className="flex gap-1">
                    <img className="w-9 h-9" src={view} />{" "}
                    <NavigationButton
                        text="Publish"
                        width="4.563rem"
                        padding="0.375rem"
                        borderRadius="0.625rem"
                        backgroundColor="#239D60"
                    />
                    <NavigationButton
                        text="Delete"
                        width="4.563rem"
                        padding="0.375rem"
                        borderRadius="0.625rem"
                        backgroundColor="#DC2626"
                    />
                </div>
            </div>
            <div className="w-full flex ">
                <div className="w-[25.625rem] px-2">
                    <div className=" w-full">
                        <p className="text-[0.625rem] text-[#767676] py-2">
                            Survey Image
                        </p>
                        <img className="w-full" src={surveyImage} />
                    </div>
                    <div>
                        <p className="text-[0.625rem] text-[#767676] py-2">
                            Survey Background
                        </p>
                        <img className="w-full" src={surveyBackground} />
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#767676] py-2">Type</p>
                        <select className="border-[2px] border-[#239D60] w-full h-10 rounded-xl">
                            <option>Option 1</option>
                            <option>Option 1</option>
                            <option>Option 1</option>
                            <option>Option 1</option>
                        </select>
                    </div>
                    <div>
                        <h2 className="text-[1.25rem] font-[600] py-5">
                            Contents
                        </h2>
                        <hr />
                        <p className="text-[1.25rem] py-5 text-[#767676]">
                            Starting
                        </p>
                        <div className="h-[4.125rem] flex items-center justify-start ">
                            <div className="w-[5.75rem] h-full bg-[#FFF5C1] p-2 rounded-tl-xl rounded-bl-xl">
                                <img
                                    className="object-contain w-full h-full p-1"
                                    src={start}
                                />
                            </div>
                            <div className="w-full h-full flex items-center bg-[#1D2827] rounded-tr-xl rounded-br-xl">
                                <p className="text-[0.5rem] px-1 text-[#FFFFFF]">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Habitant lacus morbi suspendisse egestas
                                    dignissim venenatis tortor. Proin elementum
                                    lectus id risus.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[1.25rem] py-5 text-[#767676]">
                                Questions
                            </p>

                            <div className="flex flex-col gap-3">
                                {questionlist.map((item) => (
                                    <div className="h-[4.125rem] flex items-center justify-start ">
                                        <div className="w-[3.75rem] h-full flex items-center justify-end bg-[#1D2827] p-2 rounded-tl-xl rounded-bl-xl">
                                            <img
                                                className="object-contain w-8 h-8 p-1"
                                                src={typeimg}
                                            />
                                        </div>
                                        <div className="w-full h-full flex items-center bg-[#] rounded-tr-xl rounded-br-xl">
                                            <p className="px-2">{item.num}</p>
                                            <p className="text-[0.5rem] px-1 ">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-[1.25rem] py-5 text-[#767676]">
                                    Ending
                                </p>
                                <div className="h-[4.125rem] flex items-center justify-start ">
                                    <div className="w-[5.75rem] h-full bg-[#FFF5C1] p-2 rounded-tl-xl rounded-bl-xl">
                                        <img
                                            className="object-contain w-full h-full p-1"
                                            src={start}
                                        />
                                    </div>
                                    <div className="w-full h-full flex items-center bg-[#1D2827] rounded-tr-xl rounded-br-xl">
                                        <p className="text-[0.5rem] px-1 text-[#FFFFFF]">
                                            Thank you for dedicating your time
                                            to fill out our survey!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-published ">
                    <BackgroundContent>
                        <AnswerHead text="Survey Title">
                            <p className="text-center py-6">
                                Description (Optional){" "}
                            </p>{" "}
                        </AnswerHead>

                        <div className=" flex flex-col ">
                            <div className="flex justify-start items-start gap-5 w-full mt-3 pl-[5.5rem] pr-[7.5rem] ">
                                <div className="flex justify-start items-center pt-[0.25rem] gap-5 ">
                                    <span className="text-xl font-medium">
                                        {" "}
                                        2{" "}
                                    </span>
                                    <FontAwesomeIcon
                                        className="w-[7px] h-[11px]"
                                        icon={faChevronRight}
                                    />
                                </div>
                                <div className="flex justify-start items-start flex-col gap-y-24 ">
                                    <p className="text-3xl font-normal">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                    <div className="w-full">
                                        <FormInput
                                            type="text"
                                            name="answer"
                                            placeholder="Type your answer here"
                                            label="answer"
                                            hideLabel
                                            className="w-full placeholder:text-black placeholder:text-opacity-30"
                                            style={{
                                                color: "black",
                                                border: "none",
                                                borderBottom:
                                                    "1px solid #0000004D",
                                                borderRadius: "0",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full ">
                                <Pagination startNumber="2" endNumber="20" />
                            </div>
                        </div>
                    </BackgroundContent>
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
