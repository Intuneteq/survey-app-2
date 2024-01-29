import IntroHeader from "../../components/molecules/IntroHeader";
import CheckedList from "../../components/molecules/CheckedList";
import { Images } from "../../assets";
import NavigationButton from "../../components/atoms/Buttons/NavigationButton";

export default function Checkbox() {
    const { rightarrow, leftarrow } = Images;

    return (
        <div className="">
            <div className="flex justify-center pt-[5.25rem]">
                <div className="w-[53.75rem] h-[37.5rem] bg-[#FFF] rounded-xl ">
                    <div className="flex justify-center text-[2.5rem] px-[0.69rem]">
                        <IntroHeader
                            title="Lorem Ipsum"
                            subtitle="The purpose of an exit survey is to obtain valuable information that can be used to enhance the organization's processes, address any issues, and improve retention rates."
                        />
                    </div>
                    <hr />
                    <div>
                        <div className=" pl-[4.5rem]">
                            <p className="text-[1.875rem] font-[400] leading-normal">
                                1. Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>

                        <div>
                            <form>
                                <div className="space-y-[1.88rem] px-[7.88rem] py-[3.12rem] ">
                                    <div className="flex items-center ">
                                        <input
                                            className="w-[1.5625rem] h-[1.5625rem] "
                                            type="radio"
                                            name="Lorem ipsum"
                                        />
                                        <p className="pl-[1.25rem]">
                                            Lorem ipsum
                                        </p>
                                    </div>
                                    <div className="flex items-center ">
                                        <input
                                            className="w-[1.5625rem] h-[1.5625rem] "
                                            type="radio"
                                            name="Lorem ipsum"
                                        />
                                        <p className="pl-[1.25rem]">
                                            Lorem ipsum dolor
                                        </p>
                                    </div>
                                    <div className="flex items-center ">
                                        <input
                                            className="w-[1.5625rem] h-[1.5625rem] "
                                            type="radio"
                                            name="Lorem ipsum"
                                        />
                                        <p className="pl-[1.25rem]">
                                            Lorem ipsum dolor sit amet
                                        </p>
                                    </div>
                                    <div className="flex items-center ">
                                        <input
                                            className="w-[1.5625rem] h-[1.5625rem] "
                                            type="radio"
                                            name="Lorem ipsum"
                                        />
                                        <p className="pl-[1.25rem]">
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </p>
                                    </div>
                                </div>
                            </form>

                            <div className="flex justify-between px-[4.06rem] mt-[3.29rem] ">
                                <div>
                                    <p>1 out of 20</p>
                                </div>
                                <div className="flex space-x-[1.19rem]">
                                    <NavigationButton text="PREVIOUS" />

                                    <NavigationButton
                                        text="NEXT"
                                        color="#239D60"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end space-x-[0.62rem] pt-[5rem]">
                <NavigationButton>
                    <img src={leftarrow} />
                </NavigationButton>

                <NavigationButton
                    text="1"
                    width="4rem"
                    height="4rem"
                    borderRadius="0.375rem"
                    backgroundColor="#239D60"
                />
                <NavigationButton
                    text="2"
                    width="4rem"
                    height="4rem"
                    borderRadius="0.375rem"
                    backgroundColor="transparent"
                />
                <NavigationButton
                    text="3"
                    width="4rem"
                    height="4rem"
                    borderRadius="0.375rem"
                    backgroundColor="transparent"
                />
                <NavigationButton
                    text="..."
                    width="4rem"
                    height="4rem"
                    borderRadius="0.375rem"
                    backgroundColor="transparent"
                />
                <NavigationButton
                    text="20"
                    width="4rem"
                    height="4rem"
                    borderRadius="0.375rem"
                    backgroundColor="transparent"
                />
                <NavigationButton>
                    <img src={rightarrow} />
                </NavigationButton>
            </div>
        </div>
    );
}
