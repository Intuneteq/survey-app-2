import NavigationButton from "../../components/atoms/Buttons/NavigationButton";
import { Background } from "../../components/molecules";
import CheckedList from "../../components/molecules/CheckedList";

export default function Checkbox() {
    return (
        <Background>
            <div className="w-full flex justify-center items-center ">
                <div className=" pt-[0.63rem]">
                    <div className=" text-center w-[51.25rem]">
                        <h3 className="text-[2.5rem] font-[700] leading-normal">
                            Lorem Ipsum
                        </h3>
                        <p className="text-[#0000004d] text-[1.25rem] font-[400] leading-[1.5625rem] text-start">
                            The purpose of an exit survey is to obtain valuable
                            information that can be used to enhance the
                            organization's processes, address any issues, and
                            improve retention rates.
                        </p>
                    </div>
                    <hr />
                    <div className=" text-center pt-[0.81rem]">
                        <h3 className="text-[1.875rem] font-[400] leading-normal text-[#000000db] flex items-center justify-center">
                            <span className="text-[1.25rem]">1 &gt;</span> Lorem
                            ipsum dolor sit amet consectetur.
                        </h3>
                        <div>
                            <div>
                                <CheckedList
                                    type="radio"
                                    name="Lorem"
                                    placeholder="item1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    );
}
