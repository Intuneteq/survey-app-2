import { FormInput } from "../../components/atoms";
import { BackgroundContent } from "../../components/molecules";

export default function Checkbox() {
    const sublist = [
        {
            id: 1,
            value: "Lorem ipsum",
            label: "Lorem ipsum",
            category: "checklist",
        },
        {
            id: 2,
            value: "Lorem ipsum dolor",
            label: "Lorem ipsum dolor",
            category: "checklist",
        },
        {
            id: 3,
            value: "Lorem ipsum dolor sit amet",
            label: "Lorem ipsum dolor sit amet",
            category: "checklist",
        },
        {
            id: 4,
            value: "Lorem ipsum dolor sit amet consectetur.",
            label: "Lorem ipsum dolor sit amet consectetur.",
            category: "checklist",
        },
    ];

    return (
        <BackgroundContent
            text="Lorem ipsum"
            subtext="The purpose of an exit survey is to obtain valuable information that can be used to enhance the organization's processes, address any issues, and improve retention rates."
        >
            <div className=" flex pl-[4rem] ">
                <h3 className="text-[1.735rem] flex items-center">
                   <span className="text-[1.2rem] px-[1rem]">1 &gt; </span> Lorem ipsum dolor sit amet consectetur
                </h3>
            </div>
            <div className="space-y-[2rem] text-[1.375rem] pt-[2rem]">
                {sublist.map((item) => (
                    <FormInput
                        key={item.id}
                        type="radio"
                        name={item.category}
                        label={item.label}
                        hideLabel
                    />
                ))}
            </div>
        </BackgroundContent>
    );
}
