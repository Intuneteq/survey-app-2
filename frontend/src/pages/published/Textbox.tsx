import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { AnswerHead } from "../../components/molecules";
import { Pagination, Background } from "../../components/organisms";
import { FormInput } from "../../components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Textbox() {
    return (
        <Background>
            <div className="h-full flex flex-col justify-between items-center">
                <AnswerHead
                    text="Exit Interview Survey"
                    subtext="The purpose of an exit survey is to obtain valuable information that can be used to enhance the organization's processes, address any issues, and improve retention rates."
                />

                <div className="flex justify-start items-start gap-5 w-full mt-3 pl-[5.5rem] pr-[7.5rem]">
                    <div className="flex justify-start items-center pt-[0.25rem] gap-5">
                        <span className="text-xl font-medium"> 2 </span>
                        <FontAwesomeIcon
                            className="w-[7px] h-[11px]"
                            icon={faChevronRight}
                        />
                    </div>
                    <div className="flex justify-start items-start flex-col gap-y-24">
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
                                    borderBottom: "1px solid #0000004D",
                                    borderRadius: "0",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-auto">
                    <Pagination />
                </div>
            </div>
        </Background>
    );
}
