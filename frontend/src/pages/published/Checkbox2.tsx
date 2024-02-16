import { BackgroundContent } from "../../components/molecules";
import { FormInput } from "../../components/atoms";
import { Pagination } from "../../components/organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

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
                    <span className="text-[1.2rem] px-[1rem]">
                        3{" "}
                        <FontAwesomeIcon
                            className="w-2 h-4 px-2"
                            icon={faChevronRight}
                        />{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit amet consectetur
                </h3>
            </div>

            <div className=" space-y-[2rem] text-[1.375rem] pt-[2rem]">
                {checklist.map((list) => (
                    <>
                        <FormInput
                            key={list.id}
                            type="checkbox"
                            name={list.name}
                            label={list.label}
                            style={{
                                color: "blue",
                                width: "20px",
                                height: "20px",
                            }}
                            hideLabel
                        >
                            {list.label}{" "}
                        </FormInput>
                    </>
                ))}
            </div>

            <div className="w-full">
                <Pagination startNumber="2" endNumber="20" />
            </div>
        </BackgroundContent>
    );
}
