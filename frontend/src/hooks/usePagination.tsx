import { useState } from "react";

export default function usePagination<T>(perPage: number, data: T[]) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + perPage;

    const currentItems = data.slice(itemOffset, endOffset);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * perPage) % data.length;
        setItemOffset(newOffset);
    };

    return { currentItems, setItemOffset, handlePageClick };
}
