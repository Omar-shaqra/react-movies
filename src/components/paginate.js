import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const Paginate = ({ getpage, pagecount }) => {
  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    getpage(data.selected + 1);
  };
  const pageCount = pagecount;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Paginate;
