import { ReactNode } from "react";
import Background from "./Background";

type props = {
    children?: ReactNode;
    text:string;
    subtext:string;
};

export default function BackgroundContent({ children,text, subtext }: props) {
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
                    <div className=" text-center pt-[0.81rem]">
                        {children}
                        <div></div>
                    </div>
                </div>
            </div>
        </Background>
    );
}
