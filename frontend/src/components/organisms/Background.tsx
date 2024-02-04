import { ReactNode } from "react";

type props = {
    children: ReactNode;
};

const Background = ({ children }: props) => {
    return (
        <section className="h-full">
            <div className="flex justify-center h-full">
                <div className="w-[53.75rem] h-[37.5rem] bg-[#FFF] rounded-xl shadow-topshad">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Background;
