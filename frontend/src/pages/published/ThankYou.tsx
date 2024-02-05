import { BackgroundContent } from "../../components/molecules";

export default function ThankYou() {
    return (
        <BackgroundContent>
            <div className="py-[13rem] ">
                <h1 className="text-[5.25rem] font-[700] leading-normal ">
                    Thank You
                </h1>

                <h4 className="text-[1rem] font-[700] leading-normal">
                    Your response has been recorded.
                </h4>
            </div>
        </BackgroundContent>
    );
}
