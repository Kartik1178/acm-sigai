import React from 'react';

const Pagination = () => {
  return (
    <div className="ep-pagination">
      <ul className="ep-pagination__list">
        <li><a href="#">01</a></li>
        <li className="active"><a href="#">02</a></li>
        <li><a href="#">03</a></li>
        <li><a href="#"><i className="fi-rr-plus"></i></a></li>
      </ul>
    </div>
  );
}

export default Pagination;
