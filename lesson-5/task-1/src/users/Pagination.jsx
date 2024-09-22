import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

  const prevButtonText = isPrevPageAvailable ? '←' : '';
  const nextButtonText = isNextPageAvailable ? '→' : '';

  return (
    <div className="pagination">
      <button
        className={`btn ${!isPrevPageAvailable ? 'disabled' : ''}`}
        onClick={goPrev}
        disabled={!isPrevPageAvailable}
      >
        {prevButtonText}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button
        className={`btn ${!isNextPageAvailable ? 'disabled' : ''}`}
        onClick={goNext}
        disabled={!isNextPageAvailable}
      >
        {nextButtonText}
      </button>
    </div>
  );
};

export default Pagination;
