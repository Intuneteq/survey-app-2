import { ReactNode } from "react";

type Props = {
    text?: string;
    subtext?: string;
    children?: ReactNode;
};

const AnswerHead = ({ text, subtext, children }: Props) => {
    return (
        <div className="text-center px-4 w-full pt-3 border-b border-[#00000080] border-opacity-50">
            <h3 className="text-[2.5rem] font-[700] leading-normal">{text}</h3>
            <p className="text-[#0000004d] text-[1.25rem] font-[400] leading-[1.5625rem] text-start">
                {subtext} {children}
            </p>
        </div>
    );
};

export default AnswerHead;
