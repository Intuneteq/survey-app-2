type props = {
    startNumber: string;
    endNumber: string;
};
export default function Pagination({ startNumber, endNumber }: props) {
    return (
        <div className="flex justify-start px-[2.5rem] text-grey absolute bottom-[5px]">
            {startNumber} out of {endNumber}
        </div>
    );
}
