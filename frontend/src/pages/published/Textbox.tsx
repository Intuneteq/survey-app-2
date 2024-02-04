import { BackgroundContent } from "../../components/molecules";
import { FormInput } from "../../components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Textbox() {
    return (
        <BackgroundContent
            text="Exit Interview Survey"
            subtext="The purpose of an exit survey is to obtain valuable information that can be used to enhance the organization's processes, address any issues, and improve retention rates."
        >
            <div className=" flex pl-[4rem] ">
                <h3 className="text-[1.735rem] flex items-center">
                   <span className="text-[1.2rem] px-[1rem]">2 &gt; </span> Lorem ipsum dolor sit amet consectetur
                </h3>
            </div>
            <div className="flex justify-center items-center">
                <div className="pt-[5rem] ">
                    <FormInput
                        type="text"
                        name="answer"
                        placeholder="Type your answer here"
                        label="answer"
                        hideLabel
                        style={{ width: "40rem", color: "black" }}
                    />
                    <div className="py-[1.5rem] flex justify-end">
                        <button className="w-[4rem] h-[3rem] bg-[#239D60] rounded-xl">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="text-center w-7 h-7 text-white"
                            />{" "}
                        </button>
                    </div>
                </div>
            </div>
        </BackgroundContent>
    );
}
