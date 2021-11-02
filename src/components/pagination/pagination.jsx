const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  paginatePrev,
  isPrevDisabled,
  isNextDisabled,
  paginateNext,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    // console.log(i);
    // debugger;
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${isPrevDisabled ? "disabled" : ""}`}>
          <a
            className="page-link"
            onClick={(e) => paginatePrev(e, currentPage)}
            href={`posts/${currentPage}`}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              className="page-link"
              onClick={(e) => paginate(e, number)}
              href={`posts/${number}`}
            >
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item ${isNextDisabled ? "disabled" : ""}`}>
          <a
            className="page-link"
            onClick={(e) => paginateNext(e, currentPage)}
            href={`posts/${currentPage}`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
