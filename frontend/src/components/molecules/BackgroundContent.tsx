import { ReactNode } from "react";
// import Background from "./Background";
import { NavigationButton } from "../atoms";
import { AnswerHead } from ".";

type props = {
    children?: ReactNode;
    text: string;
    subtext: string;
};

export default function BackgroundContent({ children, text, subtext }: props) {
    return (
        // <Background>
            <div className="h-full">
                <AnswerHead text={text} subtext={subtext} />
                <div className=" text-center py-[0.81rem]">{children}</div>
                <div className="flex justify-between px-[2rem] mt-[5rem] ">
                    <div>1 out of 20</div>

                    <div className="space-x-[1rem]">
                        <NavigationButton text="PREVIOUS" color="lightgrey" />
                        <NavigationButton text="NEXT" color="#239D60" />
                    </div>
                </div>
            </div>
        // </Background>
    );
}
