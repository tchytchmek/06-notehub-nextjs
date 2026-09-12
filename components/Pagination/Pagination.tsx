import css from './Pagination.module.css'
import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate"
import type { ReactPaginateProps } from "react-paginate";

interface PaginationProps {
  totalPages: number,
  currentPage: number,
  onPageChange: (page: number) => void,
}

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<ComponentType<ReactPaginateProps>>
).default;
export default function Pagination({totalPages , currentPage , onPageChange} : PaginationProps) {
    return(
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={({ selected }) => onPageChange(selected + 1)}
            forcePage={currentPage - 1}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={1}
            containerClassName={css.pagination}
            activeClassName={css.active}
          />
    )
}