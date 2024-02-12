import { useRouteError } from "react-router-dom";
import { NavigationButton } from "../../components/atoms";
export default function Error() {
    const error = useRouteError();
    const currentError = error as CustomError;

    return (
        <main className="bg-primary min-h-screen flex justify-center text-center items-center py-[100px]">
            <div>
                <div className="w-full flex justify-center items-center relative  h-[15rem]">
                    <h1 className="text-[12.5rem]  font-[800] opacity-10 absolute top-4">
                        404
                    </h1>
                    <h1 className="text-[12.5rem]  font-[800] ">404</h1>
                    <h1 className="text-[12.5rem]  font-[800] absolute opacity-10 bottom-4">
                        404
                    </h1>
                </div>
                <div className="w-[46rem] ">
                    <h2 className="text-[3rem]">{currentError.statusText}</h2>
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
                            border="3px solid #239D60"
                            borderRadius="0.625rem"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
