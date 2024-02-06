import { Images } from "../../assets";

import { BackgroundContent } from "../../components/molecules";

export default function ExpiredLink() {
    const { Expired } = Images;
    return (
        <BackgroundContent>
            
            <div className="py-[9rem] flex-col flex  gap-5">
                <div className=" flex justify-center items-center">
                    <img src={Expired} />
                </div>

                <h4 className="text-[1.5rem] font-[700] leading-normal">
                    The Survey Link is expired
                </h4>
            </div>
        </BackgroundContent>
    );
}
