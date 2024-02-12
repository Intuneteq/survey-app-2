import { SurveyIcon } from "../../components/atoms";

export default function Overview() {
    return (
        <section className="px-[1.625rem] xl:pr-10 py-[1.563rem] h-full scroll-vertical">
            <div className="flex gap-2 items-center justify-start">
                <SurveyIcon fill="black" stroke="#0A8347" className="w-8 h-8" />
                <h1 className="text-[2.625rem]">Overview</h1>
            </div>
        </section>
    );
}
