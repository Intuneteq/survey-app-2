import { BackgroundContent } from "../../components/molecules";
import { FormInput } from "../../components/atoms";

export default function Textbox() {
    return (
        <BackgroundContent
            text="Exit Interview Survey"
            subtext="The purpose of an exit survey is to obtain valuable information that can be used to enhance the organization's processes, address any issues, and improve retention rates."
        >
            <div className=" flex pl-[7rem]">
                <h3 className="text-[1.735rem]">
                    2 &gt; Lorem ipsum dolor sit amet consectetur
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

                    <button >Submit</button>
                </div>
            </div>
        </BackgroundContent>
    );
}
