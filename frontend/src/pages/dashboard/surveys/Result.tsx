import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Images } from "../../../assets";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Result() {
    const { picture } = Images;
    return (
        <main>
            <section className="flex  gap-[4.5rem] px-20 ">
                <div className="w-[20.5rem] h-[20.5rem] flex justify-center items-center ">
                    <img
                        className="object-contain w-full j-full"
                        src={picture}
                    />
                </div>
                <div className="flex flex-col justify-center gap-4 ">
                    <h1 className="text-[2.5rem] text-[#1D2827]  ">
                        Overall Result of the Survey “Lorem Ipsum”
                    </h1>
                    <h3 className="text[1.5rem] text-[#434242]">
                        Expiry Date: DD-MM-YYYY
                    </h3>
                    <h5 className="text-[1.625rem] text-[#434242]">
                        Lorem ipsum dolor sit amet consectetur. Habitant lacus
                        morbi suspendisse egestas dignissim venenatis tortor.
                        Proin elementum lectus id risus.
                    </h5>
                </div>
            </section>
            <section>
                <div className="flex flex-col items-center justify-between liner">
                    <div className=" text-center py-4 liner">
                        <h6 className="text-[1.25rem] font-[300] border-b-2 border-[#239D60]">
                            Summary
                        </h6>
                    </div>
                    <div className="flex justify-between items-center w-[61.875rem] h-[7.75rem] px-[0.813rem]  ">
                        <div className="text-center flex flex-col gap-5">
                            <h6 className="text-[1.25rem] font-[300] border-b-2 border-[#239D60]">
                                Submissions
                            </h6>
                            <p className="text-[1.875rem] font-[600]">10</p>
                        </div>
                        <div className="text-center flex flex-col gap-5">
                            <h6 className="text-[1.25rem] font-[300] border-b-2 border-[#239D60]">
                                Completion Rate
                            </h6>
                            <p className="text-[1.875rem] font-[600]">100%</p>
                        </div>
                        <div className="text-center flex flex-col gap-5">
                            <h6 className="text-[1.25rem] font-[300] border-b-2 border-[#239D60]">
                                Time to Complete
                            </h6>
                            <p className="text-[1.875rem] font-[600]">00:10</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#1D2827] rounded-tl-[3rem] rounded-tr-[3rem]">
                <div className="flex flex-col items-center justify-center py-[1.875rem] gap-[2.5rem]">
                    <div className="bg-[#FFF5C1] w-[43.75rem] h-[18.625rem] rounded-[0.625rem] py-[1.75rem] pl-[3.125rem]">
                        <div className=" flex py-[0.625rem]">
                            <h3 className="text-[1.25rem] flex items-center">
                                <span className="text-[1.2rem]">
                                    1{" "}
                                    <FontAwesomeIcon
                                        className="w-2 h-4 px-2"
                                        icon={faChevronRight}
                                    />
                                </span>
                                Lorem ipsum dolor sit amet consectetur
                            </h3>
                        </div>
                        <div className="bg-[#FFFFFF] h-[12.5rem] w-[37.5rem]"></div>
                    </div>
                    <div className="bg-[#FFF5C1] w-[43.75rem] h-[18.625rem] rounded-[0.625rem] py-[1.75rem] pl-[3.125rem]">
                        <div className=" flex py-[0.625rem]">
                            <h3 className="text-[1.25rem] flex items-center">
                                <span className="text-[1.2rem]">
                                    2{" "}
                                    <FontAwesomeIcon
                                        className="w-2 h-4 px-2"
                                        icon={faChevronRight}
                                    />
                                </span>
                                Lorem ipsum dolor sit amet consectetur
                            </h3>
                        </div>
                        <div className="bg-[#FFFFFF] h-[12.5rem] w-[37.5rem]"></div>
                    </div>
                    <div className="bg-[#FFF5C1] w-[43.75rem] h-[24.375rem] rounded-[0.625rem] py-[1.75rem] pl-[3.125rem]">
                        <div className=" flex py-[0.625rem]">
                            <h3 className="text-[1.25rem] flex items-center">
                                <span className="text-[1.2rem]">
                                    3{" "}
                                    <FontAwesomeIcon
                                        className="w-2 h-4 px-2"
                                        icon={faChevronRight}
                                    />
                                </span>
                                Lorem ipsum dolor sit amet consectetur
                            </h3>
                        </div>
                        <div className="bg-[#FFFFFF] h-[15.625rem] w-[37.5rem] p-[0.625rem] text-justify relative ">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Tellus
                                convallis nulla habitant quis augue purus sed
                                tortor leo. Auctor morbi eget pharetra massa.
                                Quis lectus non amet nulla consectetur at
                                fringilla sed est. Vestibulum porta ipsum mauris
                                vitae at et facilisis aliquam. Blandit sed lacus
                                tellus leo nec. Feugiat interdum tellus enim
                                volutpat iaculis. Tristique id volutpat eget
                                pretium lectus dui netus elementum tincidunt.
                                Facilisis amet tellus odio vel consectetur sit
                                eget. Sit odio cras ac aliquam a viverra sed
                                blandit nisl.{" "}
                            </p>
                            <div className="absolute bottom-0 w-full text-center ">
                              <p className="text-[#AAA2A2] text-[0.625rem] leading-[1.4rem]">1 out of 20 responses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
