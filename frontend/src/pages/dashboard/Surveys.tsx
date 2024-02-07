import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FormInput,
    NavigationButton,
    SurveyIcon,
} from "../../components/atoms";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../../assets";

export default function Surveys() {
    const { dashIcon } = Images;
    const surveylist = [
        {
            id: 1,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
        {
            id: 2,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
        {
            id: 2,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
        {
            id: 2,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
        {
            id: 2,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
        {
            id: 2,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
        {
            id: 2,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
        {
            id: 2,
            icon: { dashIcon },
            name: "Survey 1",
            question: "10",
            response: "40",
            created: "30 Dec 2021",
            updated: "30 Dec 2021",
        },
    ];

    return (
        <section className="px-5">
            <div className="flex gap-2 p-5">
                <SurveyIcon fill="black" className="w-8 h-8" />
                <h1 className="text-xl">Surveys</h1>
            </div>
            <div className="flex justify-end">
                <div className=" flex-col flex gap-4">
                    <NavigationButton
                        text="Create Survey"
                        width="20.624rem"
                        height="3.75rem"
                        backgroundColor="#1D2827"
                        color="#FFF5C1"
                        borderRadius="0.5rem"
                    />
                    <div className=" flex relative">
                        <FormInput
                            type="text"
                            name="search"
                            placeholder="Search Survey"
                            label="search"
                            hideLabel
                            className="placeholder:text-[#817F7F] pl-[1.25rem] "
                            style={{
                                width: "20.624rem",
                                height: "3.75rem",
                                color: "#817F7F",
                            }}
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            color="black"
                            className="w-5 h-5 absolute right-4 bottom-1/2 translate-y-1/2"
                        />
                    </div>
                </div>
            </div>
            <div className="py-6">
                <div>
                    <table className="table-auto w-full text-center">
                        <thead className="">
                            <tr>
                                <th></th>
                                <th>Survey Name</th>
                                <th>Questions</th>
                                <th>Responses</th>
                                <th>Created</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {surveylist.map((list) => (
                                <tr className="h-[3.5rem] border">
                                    <td>
                                        <img src={dashIcon} />
                                    </td>
                                    <td>{list.name}</td>
                                    <td>{list.question}</td>
                                    <td>{list.response}</td>
                                    <td>{list.created}</td>
                                    <td>{list.updated}</td>
                                    <td>
                                        <button className="text-[1.75rem]">
                                            ...
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
