import { Images } from "../assets";
import { Button } from "../components/atoms";

export default function Home() {
    const { Logo, Polygon, Triangle } = Images;
    return (
        <main className="w-full min-h-screen bg-primary flex justify-center items-center flex-col">
            <div className="absolute top-0 left-0 w-[15rem] xl:w-auto h-[15rem] xl:h-auto">
                <img src={Polygon} alt="polygon" className="w-full h-full object-cover" />
            </div>
            <div className="w-24 h-24 flex justify-center items-center">
                <img
                    src={Logo}
                    alt="logo"
                    className="w-full h-full object-contain"
                />
            </div>
            <h1 className="text-[4rem] font-black flex justify-center items-center gap-0">
                <span className="text-tertiary">Survey</span>
                <span className="text-secondary">Lite</span>
            </h1>
            <div className="mt-[6rem] xl:mt-[12rem] flex justify-between items-center gap-12 xl:gap-[4.375rem]">
                <Button
                    type="link"
                    scheme="primary"
                    href="/login"
                    className="w-[25rem] h-[3.75rem] font-black text-[1.875rem]"
                >
                    Log in
                </Button>
                <Button
                    type="link"
                    scheme="secondary"
                    href="/register"
                    className="w-[25rem] h-[3.75rem] font-black text-[1.875rem]"
                >
                    Register
                </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-[12rem] xl:w-auto h-[12rem] xl:h-auto">
                <img src={Triangle} alt="trianTriangle" className="w-full h-full object-cover" />
            </div>
        </main>
    );
}
