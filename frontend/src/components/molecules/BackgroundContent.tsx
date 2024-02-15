import { ReactNode } from "react";
import Background from "../organisms/Background";
import AnswerHead from "./AnswerHead";

type props = {
    children?: ReactNode;
    text?: string;
    subtext?: string;
};

export default function BackgroundContent({ children, text, subtext }: props) {
    return (
        <Background>
            <div className="min-h-[37.5rem] relative">
                <AnswerHead text={text} subtext={subtext} />
                <div className=" text-center py-[0.81rem]">{children}</div>
            </div>
        </Background>
    );
}
