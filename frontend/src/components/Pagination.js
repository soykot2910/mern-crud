import React from "react";

const Pagination = ({ usersPerPage, totalUsrs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsrs / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <a onClick={() => paginate(num)} href="e" className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
