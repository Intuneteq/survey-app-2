// import { NavigationButton } from "../atoms";
type props = {
    startNumber: string;
    endNumber: string;
};
export default function Pagination({ startNumber, endNumber }: props) {
    return (
        <div className="flex justify-start px-[2rem] text-grey absolute bottom-0">
            {startNumber} out of {endNumber}
            {/* <div className="space-x-[1rem]">
                <NavigationButton text="PREVIOUS" color="lightgrey" />
                <NavigationButton text="NEXT" color="#239D60" />
            </div> */}
        </div>
    );
}
