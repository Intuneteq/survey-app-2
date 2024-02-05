import { Images } from "../../assets/";

export default function Complete() {
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
                    <div className="space-y-[0.06rem] py-8">
                        <h4 className="text-[2.5rem] font-[700] leading-normal">
                            Thank you for dedicating your time to fill out this
                            survey!
                        </h4>
                    </div>
                    <div className=" space-y-[2.31rem] ">
                        <p className="text-[#434242] text-[1.375rem] font-[400] leading-normal">
                            We truly appreciate your valuable insight provided
                            in our survey! Your input helps us improve our
                            products/services for you and others.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
