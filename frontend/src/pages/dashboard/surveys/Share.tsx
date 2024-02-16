import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormInput } from "../../../components/atoms";
import { Background, Pagination } from "../../../components/organisms";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Share() {
    return (
        <main>
            {/* <div className="h-[10.75rem] w-full bg-[#FFFFFF] absolute top-">
                <div>
                    <input type="text" className="" />
                </div>
            </div> */}
            <Background>
                <div className="w-full flex justify-start items-start flex-col px-[1.875rem]">
                    <div className="w-full border-b border-black border-opacity-50 mt-[10px] pb-[1.688rem]">
                        <FormInput
                            name="title"
                            type="text"
                            className="w-full text-black border-none text-center font-bold text-[2.5rem] placeholder:text-[#B3B3B3]"
                            placeholder="Survey Title"
                        />
                        <FormInput
                            name="title"
                            type="text"
                            className="w-full text-black border-none text-center font-normal text-[1.25rem] placeholder:text-[#B3B3B3]"
                            placeholder="Description (Optional)"
                        />
                    </div>

                    {/* Question. It is subject to change */}
                    <div className="flex justify-start items-start gap-5 w-full mt-3 pl-[5.5rem] pr-[2rem]">
                        <div className="flex justify-start items-center pt-[0.25rem] gap-5">
                            <span className="text-xl font-medium">2</span>
                            <FontAwesomeIcon
                                className="w-[7px] h-[11px]"
                                icon={faChevronRight}
                            />
                        </div>
                        <div className="flex justify-start items-start flex-col gap-y-24 w-full">
                            <FormInput
                                type="text"
                                name="question"
                                className="text-3xl font-normal placeholder:text-[#B3B3B3] text-black p-0 border-none"
                                placeholder="Lorem ipsum dolor sit amet consectetur."
                                hideLabel
                            />
                            <div className="w-full">
                                <FormInput
                                    type="text"
                                    name="answer"
                                    placeholder="Type your answer here"
                                    label="answer"
                                    hideLabel
                                    readOnly
                                    className="w-full placeholder:text-black placeholder:text-opacity-30"
                                    style={{
                                        color: "black",
                                        border: "none",
                                        borderBottom: "1px solid #0000004D",
                                        borderRadius: "0",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <Pagination startNumber="2" endNumber="20" />
                </div>
            </Background>
        </main>
    );
}
