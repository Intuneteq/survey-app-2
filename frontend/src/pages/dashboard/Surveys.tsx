import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Button, FormInput, SurveyIcon } from "../../components/atoms";
import { SurveyPagination } from "../../components/molecules";

import { Images } from "../../assets";
import { usePagination } from "../../hooks";

const { dashIcon } = Images;

export default function Surveys() {
    const perPage = 8;

    const { currentItems, handlePageClick } = usePagination<SurveyList>(
        perPage,
        surveylist
    );

    return (
        <section className="px-[0.625rem] xl:pr-10 py-[1.563rem] h-full scroll-vertical">
            <div className="flex gap-2 items-center justify-start">
                <SurveyIcon fill="black" stroke="#0A8347" className="w-8 h-8" />
                <h1 className="text-[2.625rem]">Surveys</h1>
            </div>
            <div className="flex-col flex justify-end items-end gap-4 mb-6">
                <Button
                    type="button"
                    scheme="primary"
                    className="w-[20.624rem] h-[3.75rem] rounded-[0.5rem]"
                    style={{ color: "#FFF5C1", backgroundColor: "#1D2827" }}
                >
                    Create Survey
                </Button>
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
            <table className="table-auto w-full text-center border-separate border-spacing-y-[8px]">
                <thead>
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
                    {currentItems.map((list) => (
                        <tr key={list.id} className="h-[3.5rem]">
                            <td className="border-r-0 border-t border-b border-l">
                                <img src={dashIcon} />
                            </td>
                            <td className="border-t border-b">{list.name}</td>
                            <td className="border-t border-b">
                                {list.question}
                            </td>
                            <td className="border-t border-b">
                                {list.response}
                            </td>
                            <td className="border-t border-b">
                                {list.created}
                            </td>
                            <td className="border-t border-b">
                                {list.updated}
                            </td>
                            <td className="border-t border-b border-r">
                                <button className="text-[1.75rem]">...</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-9 flex justify-between items-center">
                <p className="font-normal text-base text-black text-opacity-50">
                    Showing Page 1 to 8 of 8 entries
                </p>
                <div>
                    <SurveyPagination
                        total={surveylist.length}
                        perPage={8}
                        handlePageClick={handlePageClick}
                    />
                </div>
            </div>
        </section>
    );
}

const surveylist = [
    {
        id: 1,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 2,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 3,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 4,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 5,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 6,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 7,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 8,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
    {
        id: 9,
        name: "Survey 1",
        question: "10",
        response: "40",
        created: "30 Dec 2021",
        updated: "30 Dec 2021",
    },
];
