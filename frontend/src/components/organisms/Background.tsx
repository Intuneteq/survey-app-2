import { ReactNode } from "react";
import {Images} from "../../assets/index"


const {banner} =Images;
type props = {
    children: ReactNode;
};

const Background = ({ children }: props) => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative ">
            <div className="flex justify-center  h-full ">
                <div className="w-[53.75rem] h-[37.5rem] bg-[#FFF] rounded-xl shadow-topshad ">
                    {children}
                </div>
            </div>
            <div className="absolute bottom-0 right-0 ">
                <img className="" src={banner} />
            </div>
        </section>
    );
};

export default Background;
