import { NavigationButton } from "../../components/atoms";
import { Images } from "../../assets";
//import { Background } from "../../components/organisms";

const { view, surveyImage, surveyBackground } = Images;

export default function CreateSurvey() {
    return (
        <main>
            <div className="w-full h-[3.75rem] flex items-center px-4 justify-between ">
                <div>
                    <p className="text-[1rem] text-[#767676] py-2">
                        Dashboard &gt; Survey Title
                    </p>
                </div>
                <div className=" text-[1.5rem] flex gap-6">
                    <NavigationButton text="Design" />
                    <NavigationButton text="Share" />
                    <NavigationButton text="Result" />
                </div>
                <div className="flex gap-1">
                    <img className="w-9 h-9" src={view} />{" "}
                    <NavigationButton
                        text="Publish"
                        width="4.563rem"
                        padding="0.375rem"
                        borderRadius="0.625rem"
                        backgroundColor="#239D60"
                    />
                    <NavigationButton
                        text="Delete"
                        width="4.563rem"
                        padding="0.375rem"
                        borderRadius="0.625rem"
                        backgroundColor="#DC2626"
                    />
                </div>
            </div>
            <div className="w-full flex">
                <div className="w-[15.625rem] px-2 ">
                    <div>
                        <p className="text-[0.625rem] text-[#767676] py-2">
                            Survey Image
                        </p>
                        <img src={surveyImage} />
                    </div>
                    <div>
                        <p className="text-[0.625rem] text-[#767676] py-2">
                            Survey Background
                        </p>
                        <img src={surveyBackground} />
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#767676] py-2">Type</p>
                        <select className="border w-full">
                            <option>Option 1</option>
                            <option>Option 1</option>
                            <option>Option 1</option>
                            <option>Option 1</option>
                        </select>
                    </div>
                </div>
                <div className="w-[74.375rem] bg-grey"></div>
            </div>
        </main>
    );
}
