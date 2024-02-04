import { BackgroundContent } from "../../components/molecules";
import { FormInput } from "../../components/atoms";

export default function Checkbox2() {
    const checklist = [
        { id: 1, value: "Lorem ipsum", label: "Lorem ipsum", name: "Lorem1" },
        {
            id: 2,
            value: "Lorem ipsum dolor",
            label: "Lorem ipsum dolor",
            name: "Lorem2",
        },
        {
            id: 3,
            value: "Lorem ipsum dolor sit amet",
            label: "Lorem ipsum dolor sit amet",
            name: "Lorem3",
        },
        {
            id: 4,
            value: "Lorem ipsum dolor sit amet consectetur",
            label: "Lorem ipsum dolor sit amet",
            name: "Lorem4",
        },
    ];
    return (
        <BackgroundContent
            text="Lorem Ipsum"
            subtext="The purpose of an exit survey is to obtain valuable information that can be used to enhance the organization's processes, address any issues, and improve retention rates. "
        >
            <div className=" flex pl-[4rem] ">
                <h3 className="text-[1.735rem] flex items-center">
                    <span className="text-[1.2rem] px-[1rem]">3 &gt; </span>{" "}
                    Lorem ipsum dolor sit amet consectetur
                </h3>
            </div>
            {/* <div className="space-y-[2rem] text-[1.375rem] pt-[2rem]">
                {checklist.map((item) => (
                    <FormInput
                        key={item.id}
                        type="checkbox"
                        name={item.name}
                        label={item.label}
                        
                    />
                ))}
            </div> */}

            <div className="flex-col flex space-y-[2rem">
                {checklist.map((item) => (
                    <div className="]">
                        <FormInput
                            type="checkbox"
                            name={item.name}
                            label={item.label}
                            hideLabel
                            style={{ width: "24px", height: "24px" }}
                        />
                        <label className="text-[1.375rem] pt-[2rem]">
                            {item.label}
                        </label>
                    </div>
                ))}
            </div>
        </BackgroundContent>
    );
}
