// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import ReactPaginate from "react-paginate";

type Props = {
    total: number;
    perPage: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handlePageClick: (event: any) => void;
};

export default function SurveyPagination({
    total,
    perPage,
    handlePageClick,
}: Props) {
    const pageCount = Math.ceil(total / perPage);
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={
                <FontAwesomeIcon
                    icon={faChevronRight}
                    color="black"
                    className="xl:w-5 xl:h-5 w-[7px] h-[11px]"
                />
            }
            onPageChange={handlePageClick}
            // pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    color="black"
                    className="xl:w-5 xl:h-5 w-[7px] h-[11px]"
                />
            }

            renderOnZeroPageCount={null}
            containerClassName="flex justify-between items-center gap-[0.625rem] xl:h-8 h-6"
            pageClassName="xl:w-8 w-6 xl:h-8 h-6 flex justify-center items-center border border-tertiary rounded-[5px] font-bold text-opacity-50 text-black"
            pageLinkClassName="text-sm"
            previousClassName="xl:w-8 w-6 text-white border border-tertiary rounded-[5px] flex justify-center items-center"
            nextClassName="xl:w-8 w-6 justify-center flex items-center text-white border border-tertiary rounded-[5px]"
            activeClassName="border-none bg-tertiary"
            activeLinkClassName="text-white"
        />
    );
}
