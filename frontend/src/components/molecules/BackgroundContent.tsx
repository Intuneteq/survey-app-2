import { ReactNode } from "react";
import Background from "./Background";
import { NavigationButton } from "../atoms";
type props = {
    children?: ReactNode;
    text: string;
    subtext: string;
};

export default function BackgroundContent({ children, text, subtext }: props) {
    return (
        <Background>
            <div className="w-full flex justify-center items-center ">
                <div className=" pt-[0.63rem]">
                    <div className=" text-center w-[51.25rem]">
                        <h3 className="text-[2.5rem] font-[700] leading-normal">
                            {text}
                        </h3>
                        <p className="text-[#0000004d] text-[1.25rem] font-[400] leading-[1.5625rem] text-start">
                            {subtext}
                        </p>
                    </div>
                    <hr />
                    <div className=" text-center py-[0.81rem]">{children}</div>
                    <div className="flex justify-between px-[2rem] mt-[5rem] ">
                        <div>1 out of 20</div>

                        <div className="space-x-[1rem]">
                            <NavigationButton
                                text="PREVIOUS"
                                color="lightgrey"
                            />
                            <NavigationButton text="NEXT" color="#239D60" />
                        </div>
                    </div>
                </div>
            </div>
        </Background>
    );
}
