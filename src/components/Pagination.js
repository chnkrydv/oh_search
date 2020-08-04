import React from 'react';

const Pagination = ({totalPages, currentPage, onPageNavigate}) => {
    const A
    return (
        <div>
            <button onClick={() => onPageNavigate(currentPage - 1)}>&#8592;</button>
            <div>jsfbvjksbv</div>
            <button onClick={() => onPageNavigate(currentPage + 1)}>&#8594;</button>
        </div>
    );
};

export default Pagination;