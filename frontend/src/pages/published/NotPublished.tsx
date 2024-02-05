import { Images } from "../../assets";
import { BackgroundContent } from "../../components/molecules";
import { NavigationButton } from "../../components/atoms";

export default function NotPublished() {
    const { ClosedEye } = Images;
    return (
        <BackgroundContent>
            <div className="py-[10rem] ">
                <div className=" flex justify-center items-center">
                    <img src={ClosedEye} />
                </div>

                <h4 className="text-[1.5rem] font-[700] leading-normal">
                    This survey's link is not published
                </h4>
                <NavigationButton
                    text="Back"
                    // style={{
                    //     width: "10px",
                    //     borderRadius: "10px",
                    //     backgroundColor: "green",
                    // }}
                ></NavigationButton>
            </div>
        </BackgroundContent>
    );
}
