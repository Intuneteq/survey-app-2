import { useRouteError } from "react-router-dom";
import { Images } from "../../assets";
import { NavigationButton } from "../../components/atoms";
export default function Error() {
    const error = useRouteError();
    console.error(error);

    const { errorImage } = Images;
    return (
        <div className="bg-[gold] min-h-screen flex justify-center text-center items-center ">
            <div>
                <div className="w-full flex justify-center items-center ">
                    <img src={errorImage} />
                </div>
                <div className="w-[46rem] ">
                    <h2 className="text-[3rem]">Page not Found</h2>
                    <p className="text-[2rem]">
                        The page you are looking for may have been removed.
                        Please check the survey link or contact support for
                        assistance{" "}
                    </p>
                    <div className="pt-9">
                        <NavigationButton
                            text="Back To Homepage"
                            width="25rem"
                            height="3rem"
                            border="3px solid green"
                            borderRadius="0.625rem"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
