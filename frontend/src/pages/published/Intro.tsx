import { Images } from "../../assets";
import { AuthButton } from "../../components/atoms";

export default function Intro() {
    const { picture } = Images;
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-[25rem] h-[25rem]">
                    <img
                        className="flex justify-center object-contain items-center"
                        src={picture}
                        alt="picture"
                    />
                </div>
            </div>

            <div className="flex justify-center space-y-[0.69rem]">
                <div className="text-center">
                    <div className="space-y-[0.06rem]">
                        <h1 className="text-[6.25rem] font-[700] leading-normal">
                            Lorem ipsum
                        </h1>
                        <h4 className="text-[1.5rem] font-[700] leading-normal">
                            Expiry Date: DD-MM-YYYY{" "}
                        </h4>
                    </div>
                    <div className="w-[53.75rem] space-y-[2.31rem]">
                        <p className="text-[#434242] text-[1.375rem] font-[400] leading-normal">
                            Lorem ipsum dolor sit amet consectetur. Habitant
                            lacus morbi suspendisse egestas dignissim venenatis
                            tortor. Proin elementum lectus id risus.
                        </p>
                        <p className="text-[1.5rem] font-[400] leading-normal ">
                            20 Questions
                        </p>
                    </div>

                    {/* <IntroHeader title="Lorem ipsum" subtitle="Expiry Date: DD-MM-YYYY" /> */}
                </div>
            </div>

            <div className="space-y-[0.62rem]">
                {/* <IntroBody
                    text="Lorem ipsum dolor sit amet consectetur. Habitant lacus morbi suspendisse egestas dignissim venenatis tortor. Proin elementum lectus id risus."
                    num="20"
                /> */}

                <div className=" flex justify-center pt-[3.19rem]">
                    <AuthButton
                        width="10.9375rem"
                        height="3.75rem"
                        text="Start"
                        backgroundColor="#239D60"
                        color="#FFF"
                    />
                </div>
                <p className=" text-[#434242] text-[1.25rem] font-[400] leading-normal text-center">
                    [Click to Begin the survey]
                </p>
            </div>
        </>
    );
}
