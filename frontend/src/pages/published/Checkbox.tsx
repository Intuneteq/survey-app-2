import { FormInput } from "../../components/atoms";
import { BackgroundContent } from "../../components/molecules";

export default function Checkbox() {
    const sublist = [
        { id: 1, value: "Lorem ipsum", label: "food" },
        { id: 2, value: "Lorem ipsum dolor", label: "wine" },
        { id: 3, value: "Lorem ipsum dolor sit amet", label: "drinks" },
        {
            id: 4,
            value: "Lorem ipsum dolor sit amet consectetur.",
            label: "chris",
        },
    ];

    return (
        <BackgroundContent
            text="Lorem ipsum"
            subtext="The purpose of an exit survey is to obtain valuable information that can be used to enhance the organization's processes, address any issues, and improve retention rates."
        >
            <div>
                {sublist.map((item) => (
                    <FormInput
                        key={item.id}
                        type="radio"
                        name={item.value}
                        label={item.label}
                        hideLabel
                    />
                ))}
            </div>
        </BackgroundContent>
    );
}
